import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from './styled'
import { EnhancedTableToolbar, EnhancedTableHead } from '../../components'

function createData(id, check, user, email, date_in, date_del, rule, status, action) {
  return { id, check, user, email, date_in, date_del, rule, status, action};
}

const initialRows = [
  createData(1, false,'ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData(2, false, 'CCHANG', 'ciro.chang@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData(3, false, 'TMARCAL', 'thiago.marcal@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData(4, false, 'ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData(5, false, 'ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData(6, false, 'ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData(7, false, 'ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData(8, false, 'ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData(9, false, 'ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData(10, false, 'ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData(11, false, 'ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData(12, false, 'ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData(13, false, 'ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData(14, false, 'ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'),
  createData(15, false, 'ANPINA', 'antonio.pina@tvglobo.com.br', '28/05/2019', '30/05/2019', "01", 'ATIVO', '...'), 
];

function EnhancedTable() {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState(initialRows);
  const [reloadData, setReloadData] = useState(false);

//   const handleSelectAllClick = event => {
//     if (event.target.checked) {
//       const newSelecteds = rows.map(n => n.name);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   };

  const handleClick = (event, id) => {
    let newRows = rows;
    newRows.map((item) => {
        if(item.id == id) {
            item.check = !item.check
            return item
        } 
        return item
    })

    console.log(newRows)

    setRows(newRows)
    setReloadData(!reloadData)

    // console.log(user)
    // const selectedIndex = rows.indexOf(user);
    // let newSelected = [];

    // if (selectedIndex === -1) {
    //   newSelected = newSelected.concat(selected, user);
    // } else if (selectedIndex === 0) {
    //   newSelected = newSelected.concat(selected.slice(1));
    // } else if (selectedIndex === selected.length - 1) {
    //   newSelected = newSelected.concat(selected.slice(0, -1));
    // } else if (selectedIndex > 0) {
    //   newSelected = newSelected.concat(
    //     selected.slice(0, selectedIndex),
    //     selected.slice(selectedIndex + 1),
    //   );
    // }

    // setRows(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = user => selected.indexOf(user) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const setRowsData = (data) => {
    setRows(data)
  }

  return (
    <div className={classes.root}>
        
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} rows={initialRows} onChange={(data) => setRowsData(data)}/>
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              rowCount={rows.length}
            />
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.user);
                  const labelId = `enhanced-table-checkbox-${index}`;
                    
                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={`${row.id}`}
                      selected={isItemSelected}
                      style={{backgroundColor: index % 2 == 0 ? '#e9e9e9':'#f5f5f5' }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={row.check}
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
                <TableRow>
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

export default EnhancedTable