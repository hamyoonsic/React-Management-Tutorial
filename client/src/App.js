import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import { Paper } from '@material-ui/core';
import { Table } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minwidth: 1080
  }
})

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '함윤식',
  'birthday': '960205',
  'gender':'남자',
  'job': '개발자'  
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '최미영',
  'birthday': '961224',
  'gender':'여자',
  'job': '개발자'  
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '엄영순',
  'birthday': '611012',
  'gender':'여자',
  'job': '자영업자'  
}
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          { customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);}) }
          </TableBody>
        </Table>      
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
