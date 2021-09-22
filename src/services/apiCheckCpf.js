import axios from 'axios'


const formatStringData = (data) => {
  var dia = data.split("/")[0];
  var mes = data.split("/")[1];
  var ano = data.split("/")[2];

  return ano + '-' + ("0" + mes).slice(-2) + '-' + ("0" + dia).slice(-2) + " 00:00:00";
  // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}

const url = `http://localhost:3333`;
// const url = `http://localhost:8080`;

const backEnd = {

  async updateUnimedNumber(schedule) {

    const data = {
      cpf: schedule.cpf,
      unimedNum: schedule.unimedNum
    }

    const response = await axios.post(`${url}/updateUnimedNumber`, data);

    if (response.status !== 200) {
      console.log("Falha ao atualizar carteirinha unimed");
    }

    return;
  },
  async sendFile(formData) {
    axios.post('http://laboratoriolaborclinica.ddns.net:3333/fileUpload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((res) => console.log("retorno : ", res))
      .catch((e) => console.log("error: ", e))
  }
  ,
  async getDateHour(cep, day, lastDay, getDay) {
    let address = [];
    let data = {
      cep: cep,
      day: day,
      lastDay: lastDay,
      getDay: getDay
    }
    await axios
      .post(`${url}/getDateHour`, data)
      .then(function (res) {
        address = res.data
      })
      .catch(function (error) {
        console.log(error);
      });
    return address;
  },


  async postCheckCpf(cpf) {
    let address = [];
    let data = {
      cpf: cpf
    }
    await axios
      .post(`${url}/check-cpf`, data)
      .then(function (res) {
        address = res

      })
      .catch(function (error) {
        console.log(error);
      });
    return address;
  },


  async insertPac(values) {
    let address = [];
    let schedule = JSON.parse(localStorage.getItem("labsp/schedule"));
    if (schedule) {
      console.log("achou : ", schedule)
    } else {
      schedule = {
        address: {
          numero: 0,
          cep: "123"
        }
      }
    }

    let data = {
      celular: (values.celular).replace(/[^0-9]/g, ""),
      cpf: (values.cpf).replace(/[^0-9]/g, ""),
      date_birth: formatStringData(values.date_birth),
      email: values.email,
      genero: values.genero,
      nome: `${values.name} ${values.lastname}`,
      numero: values.numero,
      rg: values.rg,
      endereco: schedule.address || {
        logradouro: "",
        numero: 0,
        cep: "",
        localidade: "",
        uf: ""
      }
    }


    await axios
      .post(`${url}/insert-pac`, data)
      .then(function (res) {
        address = res
        console.log(res)
      })
      .catch(function (error) {
        console.log(error);
      });
    return address;

  },



  async insertAgm(values) {
    let address = [];

    const schedule = JSON.parse(localStorage.getItem("labsp/schedule"))

    schedule.address.numero = 0;
    schedule.address.cep = schedule.cep

    let data = {


      "hourInit": (values.hour).replace("T", " "),
      "hourFinish": (values.hour).replace("T", " "),
      "user": values.pac,
      "cep": values.cep,
      "cpf": values.cpf,
      celular: (values.celular).replace(/[^0-9]/g, ""),
      cpf: (values.cpf).replace(/[^0-9]/g, ""),
      date_birth: formatStringData(values.date_birth),
      email: values.email,
      genero: values.genero,
      nome: `${values.name} ${values.lastname}`,
      numero: values.numero,
      rg: values.rg,
      endereco: schedule.address

    }


    await axios
      .post(`${url}/insert-agm`, data)
      .then(function (res) {
        address = res
        console.log(res)
      })
      .catch(function (error) {
        console.log(error);
      });
    return address;

  }



}



export { backEnd };
