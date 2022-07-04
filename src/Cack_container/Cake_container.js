// import React from 'react';
// import {connect }from 'react-redux';
// import {buyCake}from '../redux/Cakes/CakesAction'
//  const CakeContainer=(props)=>{
//     return (
//         <>
//         <h2>num of Cake__{props.numOFcake}</h2>
//         <button onClick={props.buyCake}>Buy Cake</button>
//         </>
//     )
// }

// const mapStateToprops=state=>{
// return {
//     numOFcake:state.numOFcake
// }
// }
// const mapDispatchToProps=dispatch=>{
// return {
//     buyCake:()=>dispatch(buyCake())
// }
// }
// export default connect(mapStateToprops,mapDispatchToProps)(CakeContainer)

import { Button, Table } from 'antd';
import 'antd/dist/antd.css';
 const columns = [
  {
    title: 'Assign',
    dataIndex: 'Assign',
    key: 'Assign',
    render: (text) => <Button>Assign To</Button>,
  },
  {
    title: 'Status',
    dataIndex: 'Status',
    key: 'Status',
    render: (text) => <Button style={{backgroundColor:"#33FFA5"}}>ASSIGNED </Button>,

     
  },
  {
    title: 'submiting time',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Requester name',
    key: 'tags',
    dataIndex: 'tags',
     
  },
  {
    title: 'Merchant Name',
    key: 'tags',
    dataIndex: 'tags',
     
  },
  {
    title: 'Requester city',
    key: 'tags',
    dataIndex: 'tags',
     
  },
  {
    title: 'Requester email',
    key: 'tags',
    dataIndex: 'tags',
     
  },
  {
    title: ' Ticket ID',
    key: 'tags',
    dataIndex: 'tags',
     
  },
  
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const Ttable = () => 
<Table 
columns={columns} dataSource={data} 
pagination={false}/>;
export default Ttable
