import { AppBar, Button, IconButton,Toolbar, Typography,ButtonGroup, List, ListItem } from '@material-ui/core';
import { Menu, Person} from '@material-ui/icons';
import React from 'react'
import { makeStyles,ListItemText } from '@material-ui/core';
import axios from 'axios';


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
    list:{
        display:'flex',
        width:'80%',
        margin:'30px auto',
        justifyContent:'center',
        flexDirection:'column',
        boxShadow:'0px 0px 10px 1px black',
        backgroundColor:'#00aeae',
    },

    li:{
        width:'100%',
        textAlign:'center',
        color:'#1f2833',
    },


})
export const Confirm = (props) => {
    const classes = usestyle();


    const Continue = (e)=>{
        e.preventDefault();
        
        axios.post('https://form-data-e123-default-rtdb.firebaseio.com/login.json',props.value).then((response)=>{
            props.nextstep();
        }).catch((err)=>{
            console.log(err)
        })
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
                      <Typography className={classes.tiporin} align='center' variant='h5' color='primary'>Confirm</Typography>
                      <IconButton color='inherit' size='large'>
                          <Person fontSize='large' color='primary'/>
                      </IconButton>
                  </Toolbar>
              </AppBar>

              <List className={classes.list}>
                  <ListItem className={classes.li}><ListItemText primary="First Name" secondary={props.value.firstname}/></ListItem>
                  <ListItem className={classes.li}><ListItemText primary="Last Name" secondary={props.value.lastname}/></ListItem>
                  <ListItem className={classes.li}><ListItemText primary="Email" secondary={props.value.email}/></ListItem>
                  <ListItem className={classes.li}><ListItemText primary="City" secondary={props.value.city}/></ListItem>
                  <ListItem className={classes.li}><ListItemText primary="Occupation" secondary={props.value.occupation}/></ListItem>
                  <ListItem className={classes.li}><ListItemText primary="Bio" secondary={props.value.bio}/></ListItem>
              </List>

            <ButtonGroup className={classes.group}>
                  <Button onClick={Continue} className={classes.btn} variant='contained' color='secondary'>Confirm</Button>
                  <Button onClick={Back} className={classes.btn} variant='contained' color='secondary'>Back</Button>
            </ButtonGroup>  
            </React.Fragment>
    )
}




