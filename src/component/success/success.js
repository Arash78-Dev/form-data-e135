import { AppBar, IconButton,Toolbar, Typography } from '@material-ui/core';
import { Menu, Person} from '@material-ui/icons';
import React from 'react'
import { makeStyles } from '@material-ui/core';
import './success.css';
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

export const Success = () => {
    const classes = usestyle();
    return (
        <React.Fragment>
        <AppBar className={classes.appbar} position='relative' color='secondary'>
            <Toolbar >
                <IconButton color='inherit' size='large'>
                    <Menu fontSize='large' color='primary'/>
                </IconButton>
                <Typography className={classes.tiporin} align='center' variant='h5' color='primary'>Successful Submission</Typography>
                <IconButton color='inherit' size='large'>
                    <Person fontSize='large' color='primary'/>
                </IconButton>
            </Toolbar>
        </AppBar>

        <div className="div">
            <h1>Thanks for your submition</h1>
            <p>you successfully signed in , your data is safe</p>
        </div>
        </React.Fragment>
    )
}
