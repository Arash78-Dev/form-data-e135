import { AppBar, Button, IconButton,TextField, Toolbar, Typography,ButtonGroup } from '@material-ui/core';
import { Menu , Person} from '@material-ui/icons';
import React from 'react'
import { makeStyles } from '@material-ui/core';


const usestyle = makeStyles({
    btn:{
        width:'150px',
        fontSize:'18px',
        margin:'10px 10px ',
        display:'block',
        transition:'0.5s',
        padding:'5px 10px',
        color:'#1f2833',
        textTransform:'capitalize',
        "&:hover":{
            backgroundColor:'primary',
        },
        },
    
    group:{
        width:'100%',
        justifyContent:'center',
    },
    tiporin:{
        margin:'auto',
        display:'block',
            },
    appbar:{
        borderRadius:'5px',
    },
    texti:{
        margin:'20px auto',
        display:'flex',
        width:'500px',
        fontSize:'40px',
    },

})
export const Seconddata = (props) => {
    const classes = usestyle();


    const Continue = (e)=>{
        e.preventDefault();
        props.nextstep();
        }
    
    const Back = (e)=>{
            e.preventDefault();
            props.prevstep();
            }


    return (
            <React.Fragment>
              <AppBar className={classes.appbar} position='relative' color='secondary'>
                  <Toolbar >
                      <IconButton color='inherit' size='large'>
                          <Menu fontSize='large' color='primary'/>
                      </IconButton>
                      <Typography className={classes.tiporin} align='center' variant='h5' color='primary'>Enter Personal Detail</Typography>
                      <IconButton color='inherit' size='large'>
                          <Person fontSize='large' color='primary'/>
                      </IconButton>
                  </Toolbar>
              </AppBar>


      
        <TextField value={props.value.occupation} onChange={props.handlechange('occupation')} variant='standard' label='Occupation'  className={classes.texti} placeholder='Occupation' color='secondary'/>
        <TextField value={props.value.city} onChange={props.handlechange('city')} variant='standard' label='City'  className={classes.texti} placeholder='City' color='secondary'/>
        <TextField value={props.value.bio} onChange={props.handlechange('bio')} variant='standard' label='Bio' multiline row='2'  className={classes.texti} placeholder='Bio' color='secondary'/>

            <ButtonGroup className={classes.group}>
                  <Button onClick={Continue} className={classes.btn} variant='contained' color='secondary'>Continue</Button>
                  <Button onClick={Back} className={classes.btn} variant='contained' color='secondary'>Back</Button>
            </ButtonGroup>  
            </React.Fragment>
    )
}
