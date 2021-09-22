import React, { Component, useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import Steps from "../Steps";
import Wrapper from "../Wrapper";
import NewUser from "../NewUser"
import { Button, ListItem, FormLabel, List, TextField, Step, useMediaQuery } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Alert, { AlertProps } from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { apiSmart } from '../../services/apiSmart'
import { backEnd } from '../../services/apiCheckCpf'
import CircularProgress from '@material-ui/core/CircularProgress';
import './calendar_origin.css';
import './person.css';


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
  const [teste, setTeste] = useState(false);
  const classes = useStyles();
  const [day, setDay] = useState(JSON.parse(localStorage.getItem("labsp/schedule")) && JSON.parse(localStorage.getItem("labsp/schedule")).day ? new Date(JSON.parse(localStorage.getItem("labsp/schedule")).day) : "")
  const [cep, setCep] = useState(JSON.parse(localStorage.getItem("labsp/schedule")).cep)
  const [address, setAddress] = useState("Rua lagoa da prata / Salgado Filho - BH")
  const [open, setOpen] = React.useState(false);
  const [openalert, setOpenalert] = React.useState(false);
  let available = useRef(new Array)
  const [mark, setMark] = useState([
    '04-03-2020',
    '03-03-2020',
    '2021-04-29'
  ])
  const [availableDays, setAvailableDays] = useState(new Array());

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getAddress = (cep) => {
    if (cep == "" || cep.length != 8) {
      setOpenalert(true)
    }
    else {
      setCep(cep)
      handleClose()
    }
  }


  useEffect(() => {
    if (cep) {
      (async function execute() {
        const date = new Date();
        const dateMore30 = date.addDays(89);
        var lastDay = `${dateMore30.getFullYear()}-${dateMore30.getMonth() + 1}-${dateMore30.getDate()}`
        let day = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        let dayAndHour = await backEnd.getDateHour(cep, day, lastDay, false);

        const hoursFree = dayAndHour ? dayAndHour && dayAndHour.data && dayAndHour.data.HorariosLivre || [] : [];

        if (hoursFree.length > 0) {
          for (let hour of dayAndHour.data.HorariosLivre) {
            const format = hour.DataHoraIni.substring(0, 10);
            available.current.push(format)
          }
          setAvailableDays(available.current)
        } else {
          alert("Não foi encontrado para o respectivo CEP")
          setAvailableDays([])
        }




      })()
    }

  }, [cep])


  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }
  const onValue = (dateSelect) => {
    let schedule = JSON.parse(localStorage.getItem("labsp/schedule"))

    schedule.day = dateSelect
    delete schedule.hour
    setDay(dateSelect)

    localStorage.setItem("labsp/schedule", JSON.stringify(schedule))
    props.daySelect()
  }

  const [loadingCalendar, setLoadingCalendar] = useState(true)

  useEffect(() => {
    const loading = available.current.length > 0 ? false : true;
    setLoadingCalendar(loading)

  }, [available.current.length])

  /**
   * 
   */

  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 700 }}>
      <Wrapper>
        {<span style={{ fontSize: "1.5rem" }}>Informe o dia em que deseja realizar o atendimento.</span>}
        <Grid container spacing={2} direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={5} style={useMediaQuery('(min-width:600px)') ?
            {
              'flex-grow': '0',
              'max-width': '100%',
              'max-heigth': '100%',
              'flex-basis': '80%'
            } :
            { 'width': '100%' }}  >
            {loadingCalendar && <CircularProgress />}
            {!loadingCalendar && <Calendar
              onChange={(e) => onValue(e)}
              value={day}
              // style={useMediaQuery('(max-width:600px)') ? { 'width': '100%' } : { 'width': '500px' }}
              tileClassName={({ date, view }) => {
                const dateFormat = new Date(date).toISOString().slice(0, 10);

                if (availableDays.find(x => x === dateFormat)) {
                  return 'availableDay'
                } else {
                  return 'notAvailableDay'
                }
              }}
            />}
          </Grid>
        </ Grid>
      </Wrapper>
      <div style={{ display: "grid" }}>
        {loadingCalendar ? <div style={{ display: "flex", width: 100 }} /> :
          <>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <div style={{ background: "#2ed573", width: 18, height: 18 }} />
              </div>
              <div>
                <span style={{ fontSize: 12 }}>Horários disponíveis</span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <div style={{ background: "#ff3333b8", width: 18, height: 18, marginRight: 5 }} />
              </div>
              <div>
                <span style={{ fontSize: 12 }}>Horários não disponíveis</span>
              </div>
            </div>
          </>}
      </div>
    </div>
  )



}
