import React, { Component, useState, useEffect } from 'react';
import Wrapper from "../Wrapper";
import { Button, ListItem, FormLabel, List, TextField, Step, useMediaQuery } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Alert, { AlertProps } from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { apiViaCep } from '../../services/apiViaCep'
import { apiSmart } from '../../services/apiSmart'

const useStyles = makeStyles({
  root: {

    minWidth: 15,
    background: "#3f51b5",
    color: "#fff",
    width: 200,
    height: 200,
    cursor: "pointer",
    padding: "20px",
    margin: "20px"
  },
  container: {
    flexGrow: 1
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',

  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 10,
  },

});

export default (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [day, setDay] = useState(JSON.parse(localStorage.getItem("labsp/schedule")) ? new Date(JSON.parse(localStorage.getItem("labsp/schedule")).day) : "")
  const [cep, setCep] = useState(JSON.parse(localStorage.getItem("labsp/schedule")) ? JSON.parse(localStorage.getItem("labsp/schedule")).cep : "")
  const [address, setAddress] = useState("")
  const [type, setType] = useState("")
  const [open, setOpen] = React.useState(false);
  const [openalert, setOpenalert] = React.useState(false);

  useEffect(() => {
    if (cep != "" && JSON.parse(localStorage.getItem("labsp/schedule"))) {
      let e = JSON.parse(localStorage.getItem("labsp/schedule")).address
      setAddress(`${e.logradouro}, ${e.bairro} -${e.localidade} / ${e.uf}`)
      setType(e.tipoAtendimento)

    }

  })
  const [text, setText] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
    setText(true);
  };

  const getAddress = async (cep = "30150270", tipo = "presencial") => {

    if (cep == "" || cep.length != 8) {
      setOpenalert(true)
    }
    else {


      let address = await apiViaCep.getAddress(cep)
      if (!address.erro) {
        setCep(cep)
        let schedule = {}
        schedule.address = {}
        schedule.cep = cep
        schedule.address.tipoAtendimento = tipo
        schedule.address.logradouro = address.logradouro
        schedule.address.bairro = address.bairro
        schedule.address.localidade = address.localidade
        schedule.address.uf = address.uf
        setAddress(`${address.logradouro}, ${address.bairro} -${address.localidade} / ${address.uf}`)
        setType(tipo)
        localStorage.setItem("labsp/schedule", JSON.stringify(schedule))
        // handleClose()
        props.daySelect()

      }
      else {
        setOpenalert(true)
      }



    }
  }



  const onValue = (dateSelect) => {
    let schedule = {}
    //`${e.getDate()}/${e.getMonth() + 1}/${e.getFullYear()}`
    schedule.day = dateSelect
    setDay(dateSelect)
    localStorage.setItem("labsp/schedule", JSON.stringify(schedule))
    props.daySelect()
  }


  return (

    < Wrapper >
      {text ?
        <span style={{ fontSize: "1.5rem" }}>Confirme seu endereço e clique em avançar</span> :
        <span style={{ fontSize: "1.5rem" }}>Para começar, informe o tipo de agendamento desejado</span>
      }

      <Grid container className={classes.container} spacing={2}>
        <Grid item xs={12} >
          <Grid container justify="center" spacing={2}>
            {
              (type == "" || type != "presencial") &&
              <Grid>
                <Card className={classes.root} onClick={handleClickOpen}>
                  <CardContent>
                    <br />
                    <Typography variant="h6" component="h2">
                      Agendamento Domiciliar
                    </Typography>
                    <br />
                    {address != "" &&
                      <Typography variant="h7" component="h5">
                        Localidade: {address}
                      </Typography>
                    }
                  </CardContent>
                </Card>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                  <DialogTitle id="form-dialog-title">Localização</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Insira seu cep abaixo, iremos verificar a disponibilidade de nossos colhedores para sua região!
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      variant="outlined"
                      label="CEP"
                      type="text"
                      onBlur={(e) => getAddress(e.target.value, "domiciliar")}
                      onKeyUp={(e) => {
                        if (e.key == "Enter" || e.key == "Tab") {
                          getAddress(e.target.value, "domiciliar")
                        }
                      }}
                      fullWidth
                    />
                    {/* <TextField
                                  
                                  margin="dense"
                                  id="name"
                                  variant="outlined"
                                  label="Número"
                                  type="text"
                                  onBlur={(e) => getAddress(e.target.value, "domiciliar")}                                  
                                  onKeyUp={ (e) => {
                                    if(e.key == "Enter" || e.key == "Tab"){
                                      getAddress(e.target.value, "domiciliar")
                                    }
                                  } }
                                  fullWidth
                                /> */}
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Confirmar
                    </Button>
                  </DialogActions>
                </Dialog>
                <Snackbar open={openalert} autoHideDuration={1} >
                  <Alert severity="error">
                    Cep inválido!
                  </Alert>
                </Snackbar>
              </Grid>
            }
            {
              open != true &&
              (type == "" || type == "presencial") &&

              <Grid>
                <Card className={classes.root} onClick={() => getAddress()}>
                  <CardContent>
                    <br />
                    <Typography variant="h6" component="h2">
                      Agendamento Presencial
                    </Typography>
                    <br />
                    {address != "" &&
                      <Typography variant="h7" component="h5">
                        Localidade: {address}
                      </Typography>
                    }
                  </CardContent>
                </Card>
              </Grid>
            }
          </Grid>
        </Grid>
      </Grid>

    </Wrapper >

  )



}
