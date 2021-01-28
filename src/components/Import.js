import React, { useState } from 'react'
import {Button} from "@material-ui/core"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer  from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { MoreVert } from '@material-ui/icons'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const Import = (props) => {
    // fill out this component
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [removedItem, setRemovedItem] = useState(null)
    

    const handleClick = (index) => (event) => {
    setAnchorEl(event.currentTarget);
    setRemovedItem(index)
    };

    const handleClose = () => {
    setAnchorEl(null);
    };


    return (
        <div>

        <Button variant='contained' color='primary' onClick={props.fetchMakes}>Import</Button>
        <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
        >
                    
                    <DeleteIcon
                                // add onClick method here
                                onClick={(index) => props.deleteMake(removedItem, index)}
                                
                                className="icon text-red" />
        </Menu>
        <h2>Rows {props.makes.length}</h2>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Make</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((row, index) => (
              
            
            <TableRow key={row.MakeId}>
              <TableCell align="right">{row.MakeId}</TableCell>
              <TableCell align="right">{row.MakeName}</TableCell>
              <TableCell align="right">
                  <MoreVert aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick(index)}/>
                  
               </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


        </div>
    )
}

export default Import


