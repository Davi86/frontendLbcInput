import React, { Component, useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import Steps from "../Steps";
import Wrapper from "../Wrapper";
import NewUser from "../NewUser"
import { Grid, Button, ListItem, FormLabel, List, TextField, Step, useMediaQuery } from '@material-ui/core'
import { MorningHours, EveningHours } from '../HoursListItem/index'

import './hours.css'
import { apiSmart } from '../../services/apiSmart'
import { backEnd } from '../../services/apiCheckCpf'
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  }
}));
export default (props) => {
  const classes = useStyles();
  const schedule = JSON.parse(localStorage.getItem("labsp/schedule"))
  const date = new Date(schedule.day)
  const dateSelect = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  const [day, setDay] = useState(dateSelect)
  const [hoursfree, setHoursfree] = useState([])
  const [loading, setLoading] = useState(false)

  const [hour, setHour] = useState((schedule.hour ? schedule.hour : ""))


  const matches = useMediaQuery('(max-width:600px)') ? { 'width': '100%' } : { 'width': '20%' }

  useEffect(() => {
    if (schedule.cep) {

      async function getDayAndHour() {
        setLoading(true)
        const dateMore30 = date.addDays(89);

        var lastDay = `${dateMore30.getFullYear()}-${dateMore30.getMonth() + 1}-${dateMore30.getDate()}`
        let day = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

        // let dayAndHour =  await apiSmart.getAddress(schedule.cep, day)
        let dayAndHour = await backEnd.getDateHour(schedule.cep, day, lastDay, true)

        if (dayAndHour) {
          setHoursfree(dayAndHour.data || [])
        }
        else {
          setHoursfree({ HorariosLivre: false } || [])
        }
        setLoading(false)
      }

      getDayAndHour()
    }

  }, [])


  Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}


  const getHours = () => {

    let dayAndHour = JSON.parse(localStorage.getItem("labsp/dayAndHours"))


    return ["08:00", "09:00", "10:00", "11:00"]
  }

  const postHour = (hour) => {
    let schedule = JSON.parse(localStorage.getItem("labsp/schedule"))
    schedule.hour = hour
    localStorage.setItem("labsp/schedule", JSON.stringify(schedule))
    setHour(hour)
    props.daySelect()

  }


  return (
   <></>

  )

}

