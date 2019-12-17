import { lighten, makeStyles } from '@material-ui/core/styles';

const useToolbarStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(0)
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '1 1 100%',
    },
    headerStyle: {
      backgroundColor: '#e9e9e9', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', padding: theme.spacing(2)
    },
    headerStyleLeft: {
        display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#e9e9e9'
    },
    headerStyleLeftIndicator: {
        backgroundColor:"white", marginRight:"80px", marginLeft:"15px"
    },
    headerStyleLeftSecurity: {
        backgroundColor:"white", height:"50px"
    },
    headerStyleLeftPerson: {
        backgroundColor:"#ff3b0f", height:"50px",border:"1px", marginRight:"15px"
    },
    
}));

export default useToolbarStyles;