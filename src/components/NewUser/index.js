import React, { Component, useState } from "react";
import Wrapper from "../Wrapper";
import Title from "../Title";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
// import 
//     DatePicker,
//     TimePicker,
//     DateTimePicker,
//     MuiPickersUtilsProvider,
//   from '@material-ui/pickers';

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

class NewUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {}
        }
    }
    render(){
    return( 
        <Wrapper>
            
            <Title text="Sobre" bold="você" />
            <p>
            Não indentificamos seu cadastro
            </p>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <TextField
                    value={
                        this.state.user.nome
                    }
                    id="nome"
                    name="nome"
                    label="Nome Completo"
                    placeholder="Nome Completo"
                    fullWidth
                    margin="20px"
                    //   onChange={handleChange}
                    //   onBlur={this.handleChange}
                    //   helperText={touched.cpf ? errors.cpf : ""}
                    //   error={touched.cpf && Boolean(errors.cpf)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        inputComponent: textMaskCpf,
                    }}
                    />
                     <TextField
                    value={
                        this.state.user.nome
                    }
                    id="rg"
                    name="rg"
                    label="Documento Identidade"
                    placeholder="Identidade"
                    fullWidth
                    margin="20px"
                    //   onChange={handleChange}
                    //   onBlur={this.handleChange}
                    //   helperText={touched.cpf ? errors.cpf : ""}
                    //   error={touched.cpf && Boolean(errors.cpf)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        inputComponent: textMaskCpf,
                    }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>

                    {/* <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={this.state.user.nascimento}
                        // onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        /> */}
                </Grid>
                
                </Grid>
        </Wrapper>
      )}
}

export default NewUser