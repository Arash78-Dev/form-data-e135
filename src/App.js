import './App.css';
import Userform from './component/userform/userform/userform';
import { createTheme, MuiThemeProvider } from '@material-ui/core';



const theme =createTheme({
  palette:{
      secondary:{
          main:'#00AEAE'
      },
      primary:{
          main:'#1f2833'
      },
      typography:{
        fontFamily:'Quicksand',
        
      }
      
  }
})


function App() {
  return (<MuiThemeProvider theme={theme}>
    <Userform/>
    </MuiThemeProvider>
  )
}

export default App;
