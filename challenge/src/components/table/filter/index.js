import React from 'react';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './style_filter';

function CustomizedInputBase({rows, onChange}) {
  const search = (value) => {
    const newRows = rows.filter((item) => item['user'].toLowerCase().includes(value))
    onChange(newRows)
  }

  return (
    <Paper component="form" className={useStyles.root}>
      <IconButton className={useStyles.iconButton} aria-label="menu">
      </IconButton>
      <InputBase
        className={useStyles.input}
        placeholder="Pesquisar..."
        inputProps={{ 'aria-label': 'search google maps', 'fonte-style':'italic' }}
        onChange={(e) => search(e.target.value.toLowerCase())}
      />
      <IconButton type="submit" className={useStyles.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default CustomizedInputBase;