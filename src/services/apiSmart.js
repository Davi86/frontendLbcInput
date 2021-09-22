import axios from 'axios'

const base = "https://cors-anywhere.herokuapp.com/http://labspseg.ddns.net:27088/AgendaSmart"


const apiSmart = {


    async getKey(login = "APIAGENDAM", senha = "P@ssApi202!", force = false, app = "smartweb") {
        const url = `${base}/api/Sessao`
        let token = JSON.parse(localStorage.getItem('schedule/token'))
        if (token && force == false) {
            axios.defaults.headers.common['X-AUTH-TOKEN'] = token
        }
        else {
            await axios
                .post(url, {
                    "Login": login,
                    "Senha": senha,
                    "App": app
                })
                .then(function (res) {
                    if (res) {
                        localStorage.setItem('schedule/token', JSON.stringify(res.data.Token))
                        axios.defaults.headers.common['X-AUTH-TOKEN'] = res.data.Token


                    }
                })
                .catch(function (err) {
                    console.log(err)
                })
        }

    },

    async getAddress(cep, day) {
        //PARAMETROS cep, dias = 15
        let dayAndHour = [];
        const url = `${base}/api/Agenda`;

        // let day = new Date()
        // let day15Now = new Date(day.getTime() + (dias * 24 * 60 * 60 * 1000));
        // let dayNow = `${day.getFullYear()}-${day.getMonth()+1}-${day.getDate()}`
        // let day15 = `${day15Now.getFullYear()}-${day15Now.getMonth()+1}-${day15Now.getDate()}`



        await this.getKey()
        await axios
            .post(url, {
                "DataIni": `${day}T00:00:00.000Z`,
                "DataFim": `${day}T00:00:00.000Z`,
                "PacCep": cep,
                "ListaProcedimento": [
                    {
                        "ProcedimentoId": "COLETA",
                        "ConvenioId": "PAR",
                        "PlanoId": "",
                        "UnidadeId": "1",
                        "ProfissionalExecutanteId": "",
                        "ProfissionalSolicitanteId": ""
                    }
                ]
            })
            .then(function (res) {
                if (res) {
                    dayAndHour = res.data[0]
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        return dayAndHour;
    },

    async postUser(user) {
        const url = `${base}/api/Usuario`

        await axios
            .post(url, {
                "Email": user.email,
                "Senha": "123456",
                "Nome": user.nome,
                "NomeSocial": user.nome,
                "Nascimento": "1991-12-21T00:00:00.000Z",
                "Sexo": user.genero,
                "CPF": user.cpf.replace(/[^0-9]/g, ""),
                "RG": user.rg.replace(/[^0-9]/g, ""),
                "Endereco": {
                    "Bairro": user.endereco.bairro,
                    "CEP": user.cep,
                    "Cidade": "belo",
                    "Complemento": user.endereco.complemento,
                    "Logradouro": user.endereco.logradouro,
                    "Estado": user.endereco.uf,
                    "Numero": user.endereco.numero
                },
                "Telefone": user.celular,
                "Celular": user.celular,
                "Whatsapp": "S",
                "ConvenioId": "001",
                "PlanoId": "1",
                "MatriculaId": "1"
            })
            .then(function (res) {
                if (res) {
                    console.log(res)

                }
            })
            .catch(function (err) {
                console.log(err)
            })
    },

    async sendFile(data) {
        const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        const urr = 'http://laboratoriolaborclinica.ddns.net:3333/fileUpload';
        axios.post(urr, data, config)
            .then((res) => console.log("retorno : ", res))
            .catch((e) => console.log("error: ", e))
    },
    async postFile(file) {
        const url = `${base}/api/Arquivo`
        console.log(file)
        await axios
            .post(url, {
                NomeArquivo: file.name.substr(0, file.name.indexOf('.')),
                TipoArquivo: file.name.substr(file.name.indexOf('.') + 1),
                Arquivo: file.base64.substr(file.base64.indexOf("base64") + 7)
            })
            .then(function (res) {
                if (res) {
                    console.log(res)

                }
            })
            .catch(function (err) {
                console.log(err)
            })
    },

    async confirmSchedule() {
        const url = `${base}/api/agenda/confirmar`
        const schedule = JSON.parse(localStorage.getItem("labsp/schedule"))


        let date = new Date(schedule.hour)

        let day = (date.getDate() < 10 ? `0${date.getDate()}` : date.getDate())
        let month = (date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1)
        let hour = (date.getHours() < 10 ? `0${date.getHours()}` : date.getHours())
        let minutes = (date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes())
        let minutesFinish = ((parseInt(date.getMinutes()) + 5) < 10 ? `0${(parseInt(date.getMinutes()) + 5)}` : (parseInt(date.getMinutes()) + 5))
        let seconds = (date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds())
        let miliseconds = (date.getMilliseconds())

        let scheduleDateIni = `${date.getFullYear()}-${month}-${day}T${hour}:${minutes}:${seconds}.839Z`
        let scheduleDateFinish = `${date.getFullYear()}-${month}-${day}T${hour}:${minutesFinish}:${seconds}.839Z`

        var data = {
            "ConvenioId": "PAR",
            "PlanoId": "1",
            "MatriculaId": "1",
            "DtmarcacaoIni": scheduleDateIni,
            "DtmarcacaoFim": scheduleDateIni,
            "PacCep": schedule.cep,
            "UnidadeId": 1,
            "ProcedimentoId": "COLETA",
            "ProfissionalExecutanteId": "",
            "ProfissionalSolicitanteId": "",
            "Observacao": "ENVIADO PELO AGENDAMENTO",
            "EnderecoColetaDomiciliar": ""
        }

        await axios
            .post(url, data)
            .then(function (res) {
                if (res) {
                    console.log(res)

                }
            })
            .catch(function (err) {
                console.log(err)
            })
    }

};

export { apiSmart };
