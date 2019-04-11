import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class TablePane extends Component{

    render(){
        const rows = this.props.rows;

        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Word</TableCell>
                        <TableCell align="right">Count</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row,i)=>(
                        <TableRow key={i}>
                            <TableCell>{row.word}</TableCell>
                            <TableCell align="right">{row.count}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }
}

export default TablePane;