import axios from 'axios'




const apiViaCep= {
  async getAddress(cep) {
    let address = [];
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    await axios
      .get(url)
      .then(function (res) {
        address = res.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    return address;
  },

};

export { apiViaCep };
