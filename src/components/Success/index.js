import React, { useState, useEffect } from 'react'
import Wrapper from "../Wrapper";
import Title from "../Title";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
// import { Link, Redirect } from "react-router-dom";
// import { Steps } from "../../components/steps";
import './sucesso.css'
import icon from './icon.svg'
import { apiSmart } from '../../services/apiSmart'
import axios from 'axios'
import { ToDoList } from '../ToDoList'

export default () => {
  useEffect(() => {
    apiSmart.confirmSchedule()
  }, [])

  /**useEffect(() => {
    sendEmailToUser();
    sendEmailToAttendence();
  }, []) */

  const [redirect, setRedirect] = useState(false)

 /** async function sendEmailToUser() {
    let schedule = JSON.parse(localStorage.getItem("labsp/schedule"))

    const base = `https://lablaborclinica.com.br`;
    // const base = `http://localhost:8080`;

    const url = `${base}/sendEmail`;
    const request = await axios.post(url, {
      schedule
    });


    const success = request.data.success;

    if (!success) {
      console.log("Falha para enviar email!")
    }
  } */

/**  async function sendEmailToAttendence() {
    let schedule = JSON.parse(localStorage.getItem("labsp/schedule"))

    let agendamentos = JSON.parse(localStorage.getItem("agendamentos"))

    const base = `https://lablaborclinica.com.br`;
    // const base = `http://localhost:8080`;

    const url = `${base}/sendEmailAttendance`;
    const request = await axios.post(url, {
      schedule,
      agendamentos
    });


    const success = request.data.success;

    if (!success) {
      console.log("Falha para enviar email!")
    }
  } */

  const fontText = {
    fontSize: '1.5rem'
  }

  return (
    <>
      <ToDoList />
    </>

  )
}