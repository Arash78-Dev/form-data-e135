import { AppBar, Button, IconButton,TextField, Toolbar, Typography } from '@material-ui/core';
import { Menu,Person} from '@material-ui/icons';
import React from 'react'
import NavigateNextOutlined from '@material-ui/icons/NavigateNextOutlined';
import { makeStyles } from '@material-ui/core';


const usestyle = makeStyles({
    btn:{
        fontSize:'18px',
        margin:'10px auto',
        display:'block',
        transition:'0.5s',
        padding:'5px 10px',
        color:'#1f2833',
        "&:hover":{
            boxShadow:'0px 0px 5px 1px black',
            letterSpace:'2px'
        },
        },
    tiporin:{
        margin:'auto',
        display:'block',
            },
    iconi:{
        verticalAlign:'-4px',
    },
    appbar:{
        borderRadius:'5px',
    },
    texti:{
        margin:'20px auto',
        display:'flex',
        width:'500px',
    },

})
export const Firstdata = (props) => {
    const classes = usestyle();
    const Continue = (e)=>{
        e.preventDefault();
        props.nextstep();
        
        }
    return (
            <React.Fragment>
              <AppBar className={classes.appbar} position='relative' color='secondary'>
                  <Toolbar >
                      <IconButton color='inherit' size='large'>
                          <Menu fontSize='large' color='primary'/>
                      </IconButton>
                      <Typography className={classes.tiporin} align='center' variant='h5' color='primary'>Enter User Detail</Typography>
                      <IconButton color='inherit' size='large'>
                          <Person fontSize='large' color='primary'/>
                      </IconButton>
                  </Toolbar>
              </AppBar>


      
        <TextField value={props.value.firstname} onChange={props.handlechange('firstname')} required variant='standard' label='First Name'  className={classes.texti} placeholder='First Name' color='secondary'/>
        <TextField value={props.value.lastname} onChange={props.handlechange('lastname')} required variant='standard' label='Last Name'  className={classes.texti} placeholder='Last Name' color='secondary'/>
        <TextField  value={props.value.email} onChange={props.handlechange('email')} required variant='standard' label='Email'  className={classes.texti} placeholder='Email' color='secondary'/>


              <Button onClick={Continue} className={classes.btn} variant='contained' color='secondary'>Continue  <NavigateNextOutlined
              className={classes.iconi} fontSize='small'/> </Button>
            </React.Fragment>
    )
}
