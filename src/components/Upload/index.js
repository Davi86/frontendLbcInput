import React, { useEffect } from 'react';
import { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import FileBase64 from 'react-file-base64';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons(props) {
  const classes = useStyles();
  const filesElement = useRef(null);
  const url = "http://localhost:3333/upload";
  // const url = "http://localhost:8080/upload"
  const sendFile = async () => {
    const dataForm = new FormData();
    for (const file of filesElement.current.files) {
      dataForm.append('file', file);
    }
    const res = await fetch(url, {
      method: 'POST',
      body: dataForm,
    });
    const data = await res.json();
    if (data.files) {
      let schedule = await JSON.parse(localStorage.getItem("labsp/schedule"));
      schedule.attachment = data.files[0].filename;
      localStorage.setItem("labsp/schedule", JSON.stringify(schedule));
    }
  };

  return (
    <div className={classes.root}>
      <input type="file" multiple ref={filesElement} onChange={sendFile} />
      {/* <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label> */}
    </div>
  );
}