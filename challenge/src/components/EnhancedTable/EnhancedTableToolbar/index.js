
import React from 'react';
import PropTypes from 'prop-types';
import useToolbarStyles from './styled'
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import WavesRoundedIcon from '@material-ui/icons/WavesRounded';
import SecurityIcon from '@material-ui/icons/Security';
import PersonIcon from '@material-ui/icons/Person';
import { CustomizedInputBase } from '../../../components'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import TuneIcon from '@material-ui/icons/Tune';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';

function EnhancedTableToolbar({ numSelected, rows, onChange }) {
    const classes = useToolbarStyles();
    return (
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        {numSelected > 0 ? (
          <Typography className={classes.title} color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <div className={classes.headerStyle}>
            <div  className={classes.headerStyleLeft}>
                <Button className={classes.headerStyleLeftIndicator}>
                    <WavesRoundedIcon style={{color:"#292929"}}></WavesRoundedIcon>
                </Button>
                <Button className={classes.headerStyleLeftSecurity}>
                    <SecurityIcon style={{color:"#292929",}}></SecurityIcon>
                </Button>
                <Button className={classes.headerStyleLeftPerson}>
                    <PersonIcon style={{color:"white"}}></PersonIcon>
                </Button>
                <CustomizedInputBase rows={rows} onChange={onChange}></CustomizedInputBase>
            </div>
            <div style={{backgroundColor: '#e9e9e9', display: 'flex', flexDirection: 'row', alignItems: 'center'}}> 
              <Button className="styleButton" style={{backgroundColor:"#fff"}}>
                <TuneIcon style={{color:"#7f7f7f", margin:"10px"}}></TuneIcon>
              </Button>
              <Button style={{backgroundColor:"#d83366"}}>
                <Typography className={classes.title} variant="span" id="tableTitle" style={{color:'#fff', margin:"10px"}}>INCLUIR USUÁRIO</Typography>          
                <PersonIcon style={{color:"#fff", textAlign:"left"}} />
              </Button>
              <Button style={{backgroundColor:"#e9e9e9"}}>
                <Typography className={classes.title} variant="span" id="tableTitle" style={{color:'#fff'}}>
                    <HomeIcon style={{color:"#7f7f7f", margin:"10px"}} /> 
                </Typography>
              </Button>
              <Button style={{backgroundColor:"#e9e9e9"}}>
                <Typography className={classes.title} variant="span" id="tableTitle" style={{color:'#fff'}}>
                    <SettingsIcon style={{color:"#7f7f7f", margin:"10px"}} /> 
                </Typography>
              </Button>
              <Button style={{backgroundColor:"#e9e9e9"}}>
                <Typography className={classes.title} variant="span" id="tableTitle" style={{color:'#fff'}}>
                    <PowerSettingsNewIcon style={{color:"#7f7f7f", textAlign:"right", margin:"20px 10px"}} /> 
                </Typography>
              </Button>
            </div>
          </div>
        )}
                              
      </Toolbar>
    );
}

// const EnhancedTableToolbar = props => {
//     const classes = useToolbarStyles();
//     const { numSelected } = props;
  
//     return (
//       <Toolbar
//         className={clsx(classes.root, {
//           [classes.highlight]: numSelected > 0,
//         })}
//       >
//         {numSelected > 0 ? (
//           <Typography className={classes.title} color="inherit" variant="subtitle1">
//             {numSelected} selected
//           </Typography>
//         ) : (
//           <div className={classes.headerStyle}>
//             <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#e9e9e9'}}>
//             <Button style={{backgroundColor:"white", marginRight:"80px", marginLeft:"15px"}}>
//               <WavesRoundedIcon style={{color:"#292929"}}></WavesRoundedIcon>
//               </Button>
//             <Button style={{backgroundColor:"white", height:"50px"}}>
//               <SecurityIcon style={{color:"#292929",}}></SecurityIcon>
//               </Button>
//               <Button style={{backgroundColor:"#ff3b0f", height:"50px",border:"1px", marginRight:"15px"}}>
//               <PersonIcon style={{color:"white"}}></PersonIcon>
//               </Button>
//               <CustomizedInputBase rows={rows} onChange={(data)=> console.log("Dado inputado", data)}></CustomizedInputBase>
//             </div>
//             <div style={{backgroundColor: '#e9e9e9', display: 'flex', flexDirection: 'row', alignItems: 'center'}}> 
//               <Button className="styleButton" style={{backgroundColor:"#fff"}}>
//               <TuneIcon style={{color:"#7f7f7f", margin:"10px"}}></TuneIcon>
//               </Button>
//               <Button style={{backgroundColor:"#d83366"}}>
//               <Typography className={classes.title} variant="span" id="tableTitle" style={{color:'#fff', margin:"10px"}}>INCLUIR USUÁRIO</Typography>          
//               <PersonIcon style={{color:"#fff", textAlign:"left"}}>
//               </PersonIcon>
//               </Button>
//               <Button style={{backgroundColor:"#e9e9e9"}}>
//               <Typography className={classes.title} variant="span" id="tableTitle" style={{color:'#fff'}}>
//               <HomeIcon style={{color:"#7f7f7f", margin:"10px"}}></HomeIcon>
//               </Typography>
//               </Button>
//               <Button style={{backgroundColor:"#e9e9e9"}}>
//               <Typography className={classes.title} variant="span" id="tableTitle" style={{color:'#fff'}}>
//               <SettingsIcon style={{color:"#7f7f7f", margin:"10px"}}></SettingsIcon> 
//               </Typography>
//               </Button>
//               <Button style={{backgroundColor:"#e9e9e9"}}>
//               <Typography className={classes.title} variant="span" id="tableTitle" style={{color:'#fff'}}>
//               <PowerSettingsNewIcon style={{color:"#7f7f7f", textAlign:"right", margin:"20px 10px"}}></PowerSettingsNewIcon> 
//               </Typography>
//               </Button>
//             </div>
//           </div>
//         )}
                              
//       </Toolbar>
//     );
//   };
  
  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };

  export default EnhancedTableToolbar;