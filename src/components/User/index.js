import React, { Component, useState, Fragment, useEffect, useRef } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Checkbox } from '@material-ui/core';
import Wrapper from "../Wrapper";
import NewUser from "../NewUser"
import axios from 'axios'
import { Grid, ListItem, FormLabel, List, TextField, Step, MenuItem, Select, InputLabel, FormControl } from '@material-ui/core'
import { Button, ChakraProvider } from '@chakra-ui/react'
import {
  textMaskPhone,
  textMaskNumber,
  textMaskCpf,
  textMaskCEP,
  onlyNumbers,
  CheckCPF,
  onlyLetters,
  nameField,
} from "../../helpers/user";
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputTest from '../InputTest'
import UploadButtons from '../Upload'
import InputMask from 'react-input-mask';
import { backEnd } from '../../services/apiCheckCpf'
import { apiSmart } from '../../services/apiSmart'
import useForm from '../UseForm'
import CircularProgress from '@material-ui/core/CircularProgress';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import './user.css'

const crypto = require('crypto');

const useStyles = makeStyles((theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

export default (props) => {
  const [cpf, setCpf] = useState("")
  const [cpfValid, setCpfValid] = useState(undefined)
  const [loadingForm, setLoadingForm] = useState(false)
  const [selectedDate, handleDateChange] = useState(new Date());
  const [endereco, setEndereco] = useState("")
  const [{ values, loading }, handleChange, handleSubmit] = useForm();
  const [selectedFile, setSelectedFile] = useState("")
  const [currentUserName, setCurrentUserName] = useState("")
  const [checked, setChecked] = useState(false);
  const [checkedPayment, setCheckedPayment] = useState(false);
  const [schedule, setSchedule] = useState({cpf:"00"})
  const unimedNumber = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    localStorage.setItem("labsp/schedule", JSON.stringify(schedule));
    setChecked(false)
    setCheckedPayment(false)

  }, [])

  const onFileChange = e => {
    // console.log("minha data : ", e)
    let data = new FormData();
    data.append("file", e);
    // setSelectedFile('aaqui: ', event)
    // data.append( 
    //   "file", 
    //   event,
    // ); 

    // const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    const urr = 'http://localhost:3333/fileUpload';

    axios.post(urr, {
      file: data
    }, {})
      .then((res) => console.log("retorno : ", res))
      .catch((e) => console.log("error: ", e))
    // console.log('ra :', e);
    // apiSmart.sendFile(data)

  }
  const formatStringData = (data) => {
    var dia = data.split("/")[0];
    var mes = data.split("/")[1];
    var ano = data.split("/")[2];

    return ano + '-' + ("0" + mes).slice(-2) + '-' + ("0" + dia).slice(-2);
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
  }



  const validadata = (data) => {
    data = data.replace(/\//g, "-"); // substitui eventuais barras (ex. IE) "/" por hífen "-"
    var data_array = data.split("-"); // quebra a data em array

    // para o IE onde será inserido no formato dd/MM/yyyy
    if (data_array[0].length != 4) {
      data = data_array[2] + "-" + data_array[1] + "-" + data_array[0]; // remonto a data no formato yyyy/MM/dd
    }

    // comparo as datas e calculo a idade
    var hoje = new Date();
    var nasc = new Date(data);
    var idade = hoje.getFullYear() - nasc.getFullYear();
    var m = hoje.getMonth() - nasc.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;


    if (idade >= 0 && idade <= 110) {
      return true;
    }

    // se for maior que 60 não vai acontecer nada!
    return false;
  }

  const validaCpfCadastrado = async (cpfValue) => {

    if (cpfValue != "") {
      setLoadingForm(true)

      cpfValue = cpfValue.replace(/[^0-9]/g, "")
      if (cpfValue.length == 11) {
        let res = await backEnd.postCheckCpf(cpfValue)
      
        if (res && res.data && res.data.length > 0) {

          let formatName = res.data[0].PACIENTE_NAME;

          let objUser = {
            cidade: res.data[0].CIDADE || "",
            codigo_lis: res.data[0].CODIGO_LIS || "",
            endereco: res.data[0].ENDERECO || "",
            estado: res.data[0].ESTADO || "",
            celular: res.data[0].PACIENTE_CEL || "",
            cep: res.data[0].PACIENTE_CEP || "",
            cpf: res.data[0].PACIENTE_CPF || "",
            datanasc: res.data[0].PACIENTE_DTNASC || "",
            sexo: res.data[0].PACIENTE_GENDER || "",
            nome: res.data[0].PACIENTE_NAME || "",
            rg: res.data[0].RG || "",
            email: res.data[0].USER_EMAIL || "",
          }

          localStorage.setItem("labsp/schedule", JSON.stringify(objUser))
          function nameMask(name) {
            var maskedName = name.replace(/([^ \.])/g, "*").split('');
            var previous = "";
            for (let i = 0; i < maskedName.length; i++) {
              if (i <= 1 || previous == " ") {
                maskedName[i] = name[i];
              }
              previous = name[i];
            }
            return maskedName.join('');
          }

          setCurrentUserName(formatName)
          setCpf(cpfValue)
          setSchedule(cpfValue)
          //   setState( {...form, cpf: cpfValue} );
          setCpfValid(true)
          setLoadingForm(false)
          let schedule = await JSON.parse(localStorage.getItem("labsp/schedule"))
          schedule.cpf = (cpfValue).replace(/[^0-9]/g, "")

          schedule.email = res.data[0].USER_EMAIL || "";
          schedule.pacient_name = res.data[0].PACIENTE_NAME;
          console.log("res.data", res.data)
          localStorage.setItem("labsp/schedule", JSON.stringify(schedule))
          setLoadingForm(false)
        } else {
          setCpf(cpfValue)
          //   setState( {...form, cpf: cpfValue} );
          setCpfValid(false)
          //alert("Informe um cpf válido")
        }
      }
    }

  }

  function descrypt(value) {
    const mykey = crypto.createDecipher('aes-128-cbc', 'mypassword');
    let mystr = mykey.update(value, 'hex', 'utf8')
    mystr += mykey.final('utf8');

    return mystr;
  }

  const enviarPaciente = async () => {
    await backEnd.insertPac(values)
    await validaCpfCadastrado(values.cpf)
    console.log(values);
    // if(validadata(values.date_birth))
    // {
    //     let date_birth = formatStringData(values.date_birth)
    //     if(values.cpf &&
    //        values.date_birth &&
    //        values.name &&
    //        values.nf_cpf &&
    //        values.nf_name 
    //      ){


    //          console.log(values);
    //          checkToNextStage()
    //      }
    // }
    // else{
    //     values.date_birth = ""
    // }

  };

  const [cpfApproved, setCpfApproved] = useState({
    cpfUndefined: false,
    cpfApproved: false,
    cpfDisapproved: true,
  })
  useEffect(() => {
    const cpfApproved = cpfValid === true ? true : false;
    const cpfUndefined = cpfValid === undefined || false ? true : false;
    const cpfDisapproved = cpfValid === false || undefined ? true : false;

    setCpfApproved({
      cpfUndefined: cpfUndefined,
      cpfApproved: cpfApproved,
      cpfDisapproved: cpfDisapproved,
    })

  }, [cpfValid, cpfApproved.cpfDisapproved])

  const handleChangeUnimed = async (value) => {
    let schedule = await JSON.parse(localStorage.getItem("labsp/schedule"))
    schedule.unimedNum = value
    localStorage.setItem("labsp/schedule", JSON.stringify(schedule));
  }

  const handleChangeCheckbox = async () => {
    let schedule = await JSON.parse(localStorage.getItem("labsp/schedule"));
    schedule.isUnimed = !checked;
    localStorage.setItem("labsp/schedule", JSON.stringify(schedule));

    setChecked(!checked)
  }

  const handleChangePaymentCheckbox = async () => {
    let schedule = await JSON.parse(localStorage.getItem("labsp/schedule"));
    schedule.onlinePayment = !checkedPayment;
    localStorage.setItem("labsp/schedule", JSON.stringify(schedule));

    setCheckedPayment(!checkedPayment)
  }


  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit(enviarPaciente)}>
        {cpfApproved.cpfUndefined &&
          <p> Olá, insira abaixo o cpf do beneficiário <strong>FCA</strong> para verificarmos o seu cadastro em nossa base de dados
          </p>
        }
        {cpfApproved.cpfDisapproved && <p>O cpf informado não possui cadastro em nosso sistema, precisamos que informe os seus dados pessoais para prosseguir com o agendamento.</p>}
        <Wrapper>
          <Grid container spacing={2} direction="row"
            justify="center"
            alignItems="center">
            {/*cpfValid == false && ` Precisamos coletar alguns dados para finalizar o agendamento!`*/}
            <Grid item xs={12} sm={cpfValid == undefined || cpfValid == true ? 10 : 6} >
              <InputMask mask="999.999.999-99" onChange={handleChange}
                onKeyUp={async (e) =>
                  (e.target.value).replace(/[^0-9]/g, "").length == 11 ?
                    await validaCpfCadastrado((e.target.value).replace(/[^0-9]/g, ""))
                    : ""}
                autoFocus={true}>

                {(inputProps) => <TextField  {...inputProps} type="tel"
                  required
                  id="cpf"
                  name="cpf"
                  label="CPF"
                  InputProps={{
                    inputProps: { min: 14 },
                    endAdornment: (
                      <InputAdornment position="end">
                        {loadingForm && <CircularProgress size={24} />}
                        {cpfValid == true && <DoneAllIcon style={{ color: 'green' }} />}
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  autoComplete="cpf"
                  variant="outlined"
                  style={{ fontSize: 55 }}
                />}

              </InputMask>


            </Grid>
            {cpfApproved.cpfApproved &&
              <p> Verificamos que o cpf informado se encontra cadastrado em nossos sistemas, por favor, confirme o nome completo do beneficiário
                FCA abaixo e clique em avançar para prosseguir com os exames:
              </p>
            }
            <strong> {currentUserName}</strong>
            {
              cpfValid &&
              <>
                <Grid item xs={12} sm={12} >

                </Grid>
                <Grid item xs={12} sm={12} >



                </Grid>
                <Grid item xs={12} sm={12} >

                </Grid>
                <Grid item xs={12} sm={12} >

                </Grid>
              </>
            }
            {cpfValid == false &&
              <>
                <Grid item xs={12} sm={6} >
                  <TextField type="tel"
                    required
                    id="rg"
                    name="rg"
                    label="RG"
                    InputProps={{ inputProps: { min: 6 } }}
                    fullWidth
                    autoComplete="rg"
                    onChange={handleChange}
                    variant="outlined"
                    style={{ fontSize: 55 }}
                  />


                </Grid>
                {/* {NOME} */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="name"
                    name="name"
                    onChange={handleChange}
                    label="Nome"
                    autoComplete="off"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                {/* {SOBRENOME} */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastname"
                    name="lastname"
                    onChange={handleChange}
                    label="Sobrenome"
                    autoComplete="off"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                {/* {DATE_BIRTH} */}
                <Grid item xs={12} sm={6}>
                  <InputMask mask="99/99/9999" onChange={handleChange} >
                    {(inputProps) => <TextField {...inputProps} type="tel"
                      id="date_birth"
                      name="date_birth"
                      label="Data de Nascimento"
                      required
                      placeholder="dd/mm/aaaa"
                      variant="outlined"
                      fullWidth
                    />}
                  </InputMask>
                </Grid>

                {/* {GENERO} */}
                <Grid item xs={12} sm={6}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel id="genero">Gênero</InputLabel>
                    <Select
                      labelId="dgenero"
                      id="genero"
                      name="genero"
                      onChange={handleChange}
                      label="Data de Nascimento"
                    >
                      <MenuItem value={'F'}>Feminino</MenuItem>
                      <MenuItem value={'M'}>Masculino</MenuItem>
                      <MenuItem value={'O'}>Outro</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                {/* {EMAIL} */}
                <Grid item xs={12} sm={6}>
                  <TextField type="email"
                    id="email"
                    name="email"
                    label="Email"
                    required
                    placeholder="joao@corporate.com"
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                {/* {CELULAR} */}
                <Grid item xs={12} sm={6}>
                  <InputMask mask="(99) 9 9999-9999" onChange={handleChange} >
                    {(inputProps) => <TextField {...inputProps} type="tel"
                      id="celular"
                      name="celular"
                      label="Celular"
                      required
                      placeholder="(99) 9 9999-9999"
                      variant="outlined"
                      fullWidth
                    />}
                  </InputMask>
                </Grid>
                {/* {ENDERECO} */}

                {/* {NUMERO CASA} */}
                <Grid item xs={12} sm={6}>

                  <TextField type="tel"
                    id="numero"
                    name="numero"
                    label="Número Casa"
                    onChange={handleChange}
                    required
                    placeholder="123"
                    variant="outlined"
                    fullWidth
                  />

                </Grid>
                {/* {COMPLEMENTO} */}
                <Grid item xs={12} sm={6}>

                  <TextField type="text"
                    id="complemento"
                    name="complemento"
                    label="Complemento"
                    onChange={handleChange}
                    placeholder="CASA 2A"
                    variant="outlined"
                    fullWidth
                  />

                </Grid>

                <Grid item xs={12} sm={12}>

                  <Button type="submit" color="primary">
                    Registrar
                  </Button>
                </Grid>
              </>
            }
            {/* { FINALIZA O CPFVALID } */}

          </ Grid>


        </Wrapper>
      </form>
    </ChakraProvider>
  )
}