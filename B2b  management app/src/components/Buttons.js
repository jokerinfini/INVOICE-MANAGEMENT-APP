import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import {Close} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import SubIcon from '@material-ui/icons/Remove';
import Add from '../components/Add.js'
import Edit from '../components/Edit.js'
import DeleteDialogBox from '../components/Delete.js'
import { InputBase, TextField, OutlinedInput, Button,Dialog, DialogTitle, DialogContent } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: '1vw',
    paddingRight: '1vw',
  },
  editHeader: {
    backgroundColor: '#2A3E4C',
    color: '#FFFFFF',
    borderTopLeftRadius: '6px',
    borderTopRightRadius: '6px',
    borderBottomColor: '10px solid #283A46',
    boxShadow: '0px 8px 24px #00000029',
    border: '2px solid purple',
    width: '40vw'
    },
  editContent:{
    backgroundColor: '#2A3E4C',
    color: '#FFFFFF',
    borderBottomLeftRadius: '6px',
    borderBottomRightRadius: '6px',
    boxShadow: '0px 8px 24px #00000029',
    border: '2px solid yellow',
  },
  searchBtnStarted: {
    marginTop: '0vh',
    minWidth: '5vw',
    minHeight: '2.188vw',
    fontSize: '0.95vw',
    border: 'solid 0.75px #3B617C',
    // marginRight: '0.5rem',
    // alignSelf: 'center',
    color: '#5DAAE0',
    '&:hover': {
      backgroundColor: '#5daae0',
      color: 'white',
    },
  },
  nameInput: {
    fontSize: '1vw',
    color: '#FFFFFF',
  },
  searchBtnDisabled: {
    minWidth: '5vw',
    minHeight: '2.188vw',
    fontSize: '0.95vw',
    border: 'solid 0.75px #3B617C',
    // marginRight: '0.5rem',
    // alignSelf: 'center',
    color: 'white !important',
    background: '#FFFFFFa5',
    '&:hover': {
      cursor: 'default',
      backgroundColor: '#FFFFFFa5',
    },
  },
  searchBtn: {
    marginTop: '0vh',
    minWidth: '5vw',
    minHeight: '2.188vw',
    fontSize: '0.95vw',
    border: 'solid 0.75px #3B617C',
    // marginRight: '0.5rem',
    alignSelf: 'center',
    color: '#5DAAE0',
    '&:hover': {
      backgroundColor: '#5daae0',
      color: 'white',
    },
  },
}));
const Buttons = (props) => {
  const classes = useStyles();
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd,setOpenAdd] = useState(false);
  const [openDelete,setOpenDelete] = useState(false);
  const handleEditClosed = () =>{
    setOpenEdit(false)
  };
  const handleEditOpen = () => {
     setOpenEdit(true)
  };
  const handleAddClosed = () =>{
    setOpenAdd(false)
  }
  const handleAddOpen = () => {
     setOpenAdd(true)
  };
  const handleDeleteClosed = () => {
    setOpenDelete(false)
  };
  const handleDeleteOpen = () => {
    setOpenDelete(true)
  };
  return (
    <Grid container
      direction="row"
      style={{
        width: '100%',
        maxHeight: '45px',
        height: '100%',
        marginTop: '10px',
        marginLeft: '30px',
        marginRight: '30px',
      }}
    >
      <Grid container
        style={{
          width: '45%',
          height: '100%',
          flexWrap: 'nowrap'
        }}
      >
        <Button variant="contained"
          className={classes.searchBtn}
          style={{
            backgroundColor: "#14AFF1",
            color: "white",
            maxHeight: "45px",
            borderRadius: "10px",
            textTransform: "none",
          }}
        >
          Predict
                </Button>
        <Button variant="outlined"
          className={classes.searchBtn}
          style={{
            marginLeft: "20px",
            border: "1px solid #14AFF1",
            color: "white",
            maxHeight: "45px",
            borderRadius: "10px",
            textTransform: "none",
          }}
        >
          View Correspondence
                </Button>
      </Grid>

      <Grid container
        style={{
          width: '55%',
          height: '100%',
          flexWrap: 'nowrap',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Button variant="outlined"
          className={classes.searchBtn}
          onClick={handleAddOpen}
          style={{
            marginLeft: "0px",
            border: "1px solid #14AFF1",
            textTransform: "none",
            color: "white",
            maxHeight: "45px",
            borderRadius: "10px",
          }}
        >
          <AddIcon style={{
            color: "white",
            marginLeft: "0px",
            marginRight: "5px",
            width: "14px",
            height: "14px",
          }}
          />
                    Add
                </Button>
                <Add open={openAdd} handleClose={handleAddClosed}/>
        <Button variant="outlined"
          className={classes.searchBtn}
          onClick={handleEditOpen}
          style={{
            marginLeft: "0px",
            border: "1px solid #97A1A9",
            textTransform: "none",
            color: "#97A1A9",
            maxHeight: "45px",
            borderRadius: "10px",
          }}
        >
          <EditIcon style={{
            color: "#97A1A9",
            marginLeft: "0px",
            marginRight: "5px",
            width: "14px",
            height: "14px",
          }}
          />
                    Edit
                </Button>
                <Edit open={openEdit} handleClose={handleEditClosed} />
        <Button variant="outlined"
          className={classes.searchBtn}
          onClick = {handleDeleteOpen}
          style={{
            marginLeft: "0px",
            border: "1px solid #14AFF1",
            textTransform: "none",
            color: "white",
            maxHeight: "45px",
            borderRadius: "10px",
          }}
        >
          <SubIcon style={{
            color: "white",
            marginLeft: "0px",
            marginRight: "5px",
            width: "14px",
            height: "14px",
          }}
          />
                     Delete
                </Button>
            <DeleteDialogBox open={openDelete} handleClose = {handleDeleteClosed} />
        <Grid container
          style={{
            marginLeft: '0px',
            borderRadius: '10px',
            maxHeight: '45px',
            maxWidth: '340px',
            width: '100%',
            backgroundColor: '#283A46',
            borderColor: '#356680',
          }}
        >
          <TextField
            placeholder="Search by Invoice Number"
            style={{
              width: '100%',
              color: 'white',
              marginLeft: '10px',
            }}
            InputProps={{
              disableUnderline: "true",
              classes: {
                input: classes.nameInput,
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon style={{ color: "#97A1A9" }} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Grid>

      </Grid>
    </Grid>
  );
};
export default Buttons;