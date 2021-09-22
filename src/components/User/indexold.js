import React, { Component, useState, Fragment, useEffect } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Wrapper from "../Wrapper";
import NewUser from "../NewUser"
import { Grid, Button, ListItem, FormLabel, List, TextField, Step, MenuItem, Select, InputLabel, FormControl } from '@material-ui/core'
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
import {apiCheckCpf} from '../../services/apiCheckCpf'
import {apiSmart} from '../../services/apiSmart'
import useForm from '../UseForm'

import './user.css'

const useStyles = makeStyles((theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

export default () => {
  const [cpf, setCpf] = useState("")
  const [cpfValid, setCpfValid] = useState(undefined)
  const [selectedDate, handleDateChange] = useState(new Date());
  const [selectedFile, setSelectedFile] = useState("")
  const [{ values, loading }, handleChange, handleSubmit] = useForm();



  // const onSubmit = async data => {
  //   // data.preventDefault()
  //   if(cpf != "" && cpfValid == true && data.length > 1)
  //   {
  //     console.log(data)
  //   await apiSmart.postUser(data)
  //  }
  // } 
  // const { register, handleSubmit, watch, errors, control } =useForm({
  //   mode: "onBlur"
  // } )
  // const [form, setState] = useState({
  //   nome: '',
  //   nascimento: '',
  //   sexo: '',
  //   cpf: '',
  //   rg: '',
  //   endereco: [],
  //   telefone: '',
  //   celular: '',
  //   whatsapp: '',
  //   convenioId:'',
  //   planoId:'',
  //   genero: '',
  //   email: ''

  // })

  const classes = useStyles();

useEffect(() => {
  // setState({
  //   ...form,
  //    endereco: JSON.parse(localStorage.getItem('labsp/schedule')).address
  // })
  
}, [])
 
  const changeHandler = e => {
    // setState( {...form, [e.target.name]: e.target.value} );
  };


// const checkCpf = () =>{
//   if(cpf == ""){
    
//   }
      
// }

// const onFileChange = (event) =>{
//   console.log(event)
//   const formData = new FormData()
//   setSelectedFile(event)
//   // formData.append( 
//   //   "myFile", 
//   //   selectedFile, 
//   //   selectedFile.name 
//   // ); 
//   console.log(selectedFile); 
//   apiSmart.postFile(event)

// }

 const  validaCpfCadastrado = async (cpfValue) =>{
    
    if (cpfValue != "" )
    {
      cpfValue = cpfValue.replace(/[^0-9]/g, "")
      if(cpfValue.length  == 11)
      {
       let res = await apiCheckCpf.postCheckCpf(cpfValue)
     
       localStorage.setItem(JSON.stringify("labsp/schedule", res.data))
        if(res && res.data && res.data.recordset && res.data.recordset.length > 0)
        {

          setCpf(cpfValue)
          setState( {...form, cpf: cpfValue} );
          setCpfValid(true)
          console.log(res.data.recordset[0].login)
          await  apiSmart.getKey(res.data.recordset[0].login, res.data.recordset[0].senha, true, 'web_laudos')
        }

        else{
          setCpf(cpfValue)
          setState( {...form, cpf: cpfValue} );
          setCpfValid(false)
          // alert("Informe um cpf válido")
        }
      }

    }
    else{

    }
    
      
  }

  const enviarPaciente = () => {
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
    return (
      <form onSubmit={handleSubmit(enviarPaciente)}>
      <Wrapper>
      <Grid container spacing={2}   direction="row"
        justify="center"
        alignItems="center">
          
          <Grid item xs={12} sm={5} >
        
          <Controller
            control={control}
            name="cpf"
            defaultValue=""
            render={props => 
                <TextField
                    value={form.cpf}
                    required
                    id="cpf"
                    name="cpf"
                    label="CPF (*)"
                    variant="outlined"
                    fullWidth
                    className={classes.margin}
                    InputProps={{
                      inputComponent: textMaskCpf,
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon onClick={() => checkCpf() } style={{cursor: "pointer"}} />
                        </InputAdornment>
                      ),
                      name:"cpf"
                    }}
                    onBlur={(e) => 
                            {
                               validaCpfCadastrado(e.target.value) 
                               props.onBlur(e.target.value)
                               props.onChange(e.target.value)
                            }
                            }    
                    InputLabelProps={{
                      shrink: true,
                      autocomplete: 'off'
                    }}
                  />}
                  />
                 
          </Grid>
         
        </ Grid>



{ cpfValid == false &&
  
        <Grid container spacing={2}   direction="row"
        justify="center"
        alignItems="center">
          <Grid item xs={12} sm={5} >
          <TextField
                    value={
                      form.nome 
                    }
                    id="nome"
                    name="nome"
                    label="Nome Completo (*)"
                    placeholder="João da Silva"
                    fullWidth
                    autoFocus
                    margin="20px"
                    onChange={changeHandler}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputRef={register({ required: true })}
                 
                  />
                 
          </Grid>
          <Grid item xs={12} sm={5} >
          <TextField
                    value={
                      form.email 
                    }
                    id="email"
                    name="email"
                    label="Email (*)"
                    placeholder="joao.silva@gmail.com"
                    fullWidth
                    type="email"
                    margin="20px"
                    onChange={changeHandler}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputRef={register({ required: true })}
                 
                  />
                 
          </Grid>
          <Grid item xs={12} sm={5} >
          <TextField
                    value={
                      form.rg 
                    }
                    id="rg"
                    name="rg"
                    type="number"
                    label="RG (*)"
                    placeholder=""
                    fullWidth
                    margin="20px"
                    onChange={changeHandler}
                    inputRef={register({ required: true })}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
            {errors.exampleRequired && <span>This field is required</span>}
          </Grid>
          
          <Grid item xs={12} sm={5} >
          <Controller
          control={control}
          defaultValue=""
          name="date_birth"
          onChange={([event]) => event.target.value}
          as = {<TextField
            id="date"
            fullWidth
            label="Data de Nascimento (*)"
            type="date"
            inputRef={register({ required: true })}
            onChange={changeHandler}
            InputLabelProps={{
              shrink: true,
            }}
          />}
          />
          </Grid>
          
          <Grid item xs={12} sm={5} >
          <FormControl fullWidth >
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
             Gênero (*)
             </InputLabel>        
            <Controller 
            control={control}
            defaultValue=''
            onChange={([event]) => event.target.value}
            as ={ <Select
                    labelId="genero"
                    id="genero"
                    name="genero"
                    value={form.genero}
                    onChange={changeHandler}
                  >
                  <MenuItem value="" disabled>
                          Selecione
                        </MenuItem>
                  <MenuItem value="M">Masculino</MenuItem>
                  <MenuItem value="F">Feminino</MenuItem>
                  </Select>
            }
            name="genero"
            />
            </FormControl>       
          </Grid>
          <Grid item xs={12} sm={5} >
          <Controller
          control={control}
          defaultValue=""
          name="celular"
          onChange={([event]) => event.target.value}
          as = {<TextField
                    value={
                      form.celular 
                    }
                    id="celular"
                    name="celular"
                    label="Celular (*)"
                    placeholder="(xx) 9 xxxx - xxxx"
                    fullWidth
                    inputRef={register({ required: true })}
                    margin="20px"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={changeHandler}
                    InputProps={{
                      inputComponent: textMaskPhone,
                    }}
                  />}
                  />
                 
          </Grid>
         
          
          <Grid item xs={12} sm={5} >
            
          <TextField
                    value={
                      form.endereco.logradouro 
                    }
                    id="endereco.logradouro"
                    name="endereco.logradouro"
                    label="Endereço (*)"
                    fullWidth
                    margin="20px"
                   
                    onChange={changeHandler}
                    inputRef={register({ required: true })}
                    InputLabelProps={{
                      shrink: true,
                      readOnly: true
                    }}
                  />
                 
          </Grid>
          <Grid item xs={12} sm={5} >
          <TextField
                    value={
                      form.endereco.bairro 
                    }
                    id="endereco.bairro"
                    name="endereco.bairro"
                    label="Bairro (*)"
                    fullWidth
                    margin="20px"
                    inputRef={register({ required: true })}
                    InputLabelProps={{
                      shrink: true,
                      readOnly: true
                    }}
                   
                  />
                 
          </Grid>
          <Grid item xs={12} sm={5} >
          <TextField
                    value={
                      form.endereco.localidade 
                    }
                    id="endereco.localidade"
                    label="Cidade (*)"
                    name="endereco.localidade"
                    fullWidth
                    margin="20px"
                    inputRef={register({ required: true })}
                    InputLabelProps={{
                      shrink: true,
                      readOnly: true
                    }}
                   
                  />
                 
          </Grid>
          <Grid item xs={12} sm={5} >
          
          <TextField
                    value={
                      form.endereco.uf 
                    }
                    id="endereco.uf"
                    name="endereco.uf"
                    label="Estado (*)"
                    onChange={changeHandler}
                    defaultValue={form.endereco.uf }
                    fullWidth
                    margin="20px"
                    inputRef={register({ required: true })}
                    InputLabelProps={{
                      shrink: true,
                      readOnly: true
                    }}
                   
                 
                  />
                 
          </Grid>
          <Grid item xs={12} sm={5} >
          <TextField
                    value={
                      form.endereco.numero 
                    }
                    id="endereco.numero"
                    name="endereco.numero"
                    label="Número (*)"
                    fullWidth
                    margin="20px"
                    onChange={changeHandler}
                    inputRef={register({ required: true })}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    type="number"
                   
                  />
                 
          </Grid>
          <Grid item xs={12} sm={5} >
          <TextField
                    value={
                      form.endereco.complemento 
                    }
                    id="endereco.complemento"
                    name="endereco.complemento"
                    label="Complemento"
                    fullWidth
                    margin="20px"
                    onChange={changeHandler}
                    inputRef={register({ required: false })}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    
                  />
                 
          </Grid>
          
          
          
          <input type="submit" value="Registrar"/>
        </ Grid>
       
}

        {
          cpfValid &&
          <UploadButtons onChange={onFileChange} />

        }
            </Wrapper>
         </form>
    )
}