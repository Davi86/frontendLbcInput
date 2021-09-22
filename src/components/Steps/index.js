import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import Wrapper from "../Wrapper";
import { Grid, Button, ListItem, FormLabel, List, TextField } from '@material-ui/core'
import Day from '../Day';
import Hours from '../Hours';
import User from '../User';
import Location from '../Location';
import Success from '../Success'
import { backEnd } from '../../services/apiCheckCpf'
import { ToDoList } from '../ToDoList'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['', ''];
}

function getStepContent(step, daySelect) {
  switch (step) {
    case 0:
      // return <User  daySelect = {daySelect}  />
      return <User daySelect={daySelect} />
    case 1:
      return <Success />;
    // case 2:
    //   return <Success daySelect={daySelect} />;
    // case 3:
    //   return <User daySelect={daySelect} />;
    // case 4: {
    //   return <Success />;
    // }

    default:
      return 'Unknown step';
  }
}

function searchExams(props) {

}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const [cep, setCep] = React.useState("")
  const [day, setDay] = React.useState("")
  const [hour, setHour] = React.useState("")
  const [user, setUser] = React.useState("")
  const [cpf, setCpf] = React.useState("")
  const [count, setCount] = useState(0)


  useEffect(() => {
    setInterval(() => {
      setCpf(JSON.parse(localStorage.getItem('labsp/schedule')).cpf)
    }, 1000)
  }, []);

  const isStepOptional = (step) => {
    return step === 10;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const buttonStyle = {
    border: 'none',
    width: '8rem',
    height: '3rem',
    borderRadius: '0.5rem',
    background: '#2ecc71',
    fontSize: '1.2rem',
    cursor: 'pointer',
    color: '#fff',
    marginRight: 20
  }


  const handleNext = async () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    localStorage.setItem('cpf', JSON.stringify(""))
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("Você precisa preencher as informação para conseguir avançar");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleInit = () => {
    localStorage.clear();
    clear()
    daySelect()
    document.location.reload(true)
  };

  const clear = () => {
    setCep("")
    setDay("")
    setHour("")
  }
  const daySelect = () => {
    if (localStorage.getItem("labsp/schedule")) {

      let schedule = JSON.parse(localStorage.getItem("labsp/schedule"))


      if (schedule.cep) {
        setCep(schedule.cep)
        setDay("")
        setHour("")
      }
      if (schedule.day) {
        setDay(schedule.day)
        setHour("")
      }
      if (schedule.hour)
        setHour(schedule.hour)
      if (schedule.pac)
        setUser(schedule.pac)

    }
  };

  const finishSchedule = async () => {
    let schedule = await JSON.parse(localStorage.getItem("labsp/schedule"))
    if (schedule.isUnimed) {
      await updateUnimedNumber(schedule);
    }
    await backEnd.insertAgm(schedule)
    handleNext()
  }

  const updateUnimedNumber = async (schedule) => {
    try {

      await backEnd.updateUnimedNumber(schedule);

      return;
    } catch (e) {
      console.log("updateUnimedNubmer error : ", e);
      return;
    }
  }

  return (
    <>
      {<div className={classes.root}>
        <Stepper activeStep={activeStep} style={{ backgroundColor: "transparent" }}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">Optional</Typography>;
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                Agendamento realizado com sucesso!
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Inicio
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep, () => daySelect())}</Typography>
              <div>
                {/*activeStep !== 0 && activeStep !== 4 &&
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Voltar
                  </Button>*/}
                {activeStep === 0 && cep != "" &&
                  <Button onClick={handleInit} className={classes.button}>
                    Recomeçar
                  </Button>}
                {isStepOptional(activeStep) && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSkip}
                    className={classes.button}
                  >
                    Skip
                  </Button>
                )}

                {/* {Butão para o passo 1} */}
                {
                  activeStep === 0 &&
                  cep != "" &&

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Concluir' : 'Avançar'}
                  </Button>
                }


                {/* {Butão para o passo 2} */}
                {
                  activeStep === 1 &&
                  day != "" &&

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}

                  >
                    {activeStep === steps.length - 1 ? 'Concluir' : 'Avançar'}
                  </Button>
                }
                {
                  activeStep === 0 && cpf.length > 5 &&


                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}

                  >
                    {activeStep === steps.length - 1 ? 'Concluir' : 'Avançar'}
                  </Button>
                }
                {
                  activeStep === 3 &&
                  day != "" &&
                  hour != "" &&
                  user != "" &&
                  cpf != "" &&

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={finishSchedule}
                    className={classes.button}

                  >
                    {'Concluir'}
                  </Button>
                }
                {activeStep === 4 &&
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <a href="https://saopaulopatologia.com.br/pague-online" target="_blanck">
                      <button style={buttonStyle}>Pague online</button>
                    </a>
                    <Button onClick={handleInit} variant="contained" color="primary" className={classes.button}>
                      Novo Agendamento
                    </Button>
                  </div>}
              </div>
            </div>
          )}
        </div>
      </div>}
    </>
  );
}
