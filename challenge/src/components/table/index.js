import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import TablePagination from '@material-ui/core/TablePagination';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PersonIcon from '@material-ui/icons/Person';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import TuneIcon from '@material-ui/icons/Tune';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import CustomizedInputBase from './filter/index';
import SecurityIcon from '@material-ui/icons/Security';
import WavesRoundedIcon from '@material-ui/icons/WavesRounded';

function createData(user, email, date_in, date_del, rule, status, action) {
  return { user, email, date_in, date_del, rule, status, action};
}

const rows = [
  createData('ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData('CCHANG', 'ciro.chang@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData('TMARCAL', 'thiago.marcal@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData('ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData('ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData('ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData('ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData('ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData('ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData('ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData('ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData('ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData('ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData('ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData('ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
];

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headCells = [

  { id: 'checkbox', numeric: false, disablePadding: true, label: '' },
  { id: 'user', numeric: false, disablePadding: true, label: 'USUÁRIO' },
  { id: 'email', numeric: true, disablePadding: false, label: 'EMAIL' },
  { id: 'date_in', numeric: true, disablePadding: false, label: 'DATA DE INCLUSÃO' },
  { id: 'date_del', numeric: true, disablePadding: false, label: 'DATA DE ALTERAÇÃO' },
  { id: 'rule', numeric: true, disablePadding: false, label: 'REGRAS' },
  { id: 'status', numeric: true, disablePadding: false, label: 'STATUS' },
  { id: 'action', numeric: true, disablePadding: false, label: 'AÇÕES' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={'center'}
            padding={headCell.disablePadding ? 'none' : 'default'}
          >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
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
    backgroundColor: '#e9e9e9', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', padding: '24px 0'
  }
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

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
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#e9e9e9'}}>
          <Button style={{backgroundColor:"white", marginRight:"80px", marginLeft:"15px"}}>
            <WavesRoundedIcon style={{color:"#292929"}}></WavesRoundedIcon>
            </Button>
          <Button style={{backgroundColor:"white", height:"50px"}}>
            <SecurityIcon style={{color:"#292929",}}></SecurityIcon>
            </Button>
            <Button style={{backgroundColor:"#ff3b0f", height:"50px",border:"1px", marginRight:"15px"}}>
            <PersonIcon style={{color:"white"}}></PersonIcon>
            </Button>
            <CustomizedInputBase rows={rows} onChange={(data)=> console.log("Dado inputado", data)}></CustomizedInputBase>
          </div>
          <div style={{backgroundColor: '#e9e9e9', display: 'flex', flexDirection: 'row', alignItems: 'center'}}> 
            <Button className="styleButton" style={{backgroundColor:"#fff"}}>
            <TuneIcon style={{color:"#7f7f7f", margin:"10px"}}></TuneIcon>
            </Button>
            <Button style={{backgroundColor:"#d83366"}}>
            <Typography className={classes.title} variant="span" id="tableTitle" style={{color:'#fff', margin:"10px"}}>INCLUIR USUÁRIO</Typography>          
            <PersonIcon style={{color:"#fff"}}>
            </PersonIcon>
            </Button>
            <Button style={{backgroundColor:"#e9e9e9"}}>
            <Typography className={classes.title} variant="span" id="tableTitle" style={{color:'#fff'}}>
            <HomeIcon style={{color:"#7f7f7f", margin:"10px"}}></HomeIcon>
            </Typography>
            </Button>
            <Button style={{backgroundColor:"#e9e9e9"}}>
            <Typography className={classes.title} variant="span" id="tableTitle" style={{color:'#fff'}}>
            <SettingsIcon style={{color:"#7f7f7f", margin:"10px"}}></SettingsIcon> 
            </Typography>
            </Button>
            <Button style={{backgroundColor:"#e9e9e9"}}>
            <Typography className={classes.title} variant="span" id="tableTitle" style={{color:'#fff'}}>
            <PowerSettingsNewIcon style={{color:"#7f7f7f", textAlign:"right", margin:"20px 10px"}}></PowerSettingsNewIcon> 
            </Typography>
            </Button>
          </div>
        </div>
      )}
                            
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('user');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = event => {
    setDense(event.target.checked);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                      style={{backgroundColor: index % 2 == 0 ? '#e9e9e9':'#f5f5f5' }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.user}</TableCell>
                      <TableCell align="center">{row.email}</TableCell>
                      <TableCell align="center">{row.date_in}</TableCell>
                      <TableCell align="center">{row.date_del}</TableCell>
                      <TableCell align="center">{row.rule}</TableCell>
                      <TableCell align="center" style={{color: 'green'}}>{row.status}</TableCell>
                      <TableCell align="center">{row.action}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          align="center"
        />
      </Paper>
    </div>
  );
}