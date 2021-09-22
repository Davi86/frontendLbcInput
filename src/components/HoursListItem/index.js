import React from 'react'
import { Grid, Button, ListItem, FormLabel, List, TextField, Step, useMediaQuery } from '@material-ui/core'
import './style.css'

export const MorningHours = ({ onClick, matches, key, hour, hoursfree }) => {
    return (
        <>
            <div className="hourMorning">

                <Button className="buttonHours1" variant="contained" key={hoursfree.DataHoraIni}
                    style={matches}
                    color={hour == hoursfree.DataHoraIni ? "primary" : "default"}
                    onClick={() => onClick()} >
                    {hoursfree.DataHoraIni.substring(11, 20)}<br />
                </Button>

            </div>
        </>
    )
}



export const EveningHours = ({ onClick, matches, key, hour, hoursfree }) => {
    return (
        <>
            <div className="hourEvening">

                <Button className="buttonHours1" variant="contained" key={hoursfree.DataHoraIni}
                    style={matches}
                    color={hour == hoursfree.DataHoraIni ? "primary" : "default"}
                    onClick={() => onClick()} >
                    {hoursfree.DataHoraIni.substring(11, 20)}<br />
                </Button>

            </div>
        </>
    )
}