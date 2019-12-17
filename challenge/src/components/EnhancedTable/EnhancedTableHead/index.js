import React from 'react';
import PropTypes from 'prop-types';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import classes from './styled'
function EnhancedTableHead({ numSelected, rowCount}) {  
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
    rowCount: PropTypes.number.isRequired,
  };

  export default EnhancedTableHead