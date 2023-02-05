import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./App.css"

const handleAdd = ()=>
{
    console.log("Add called")
}

function Table() {
  const context = useSelector((state)=>state.dataKey); // 

  return (
    <>
      <h1 style={{textAlign:"center"}}>Student Details</h1>
      <br />
      <div id='btn-div'>
      <Link to="/addStudent"><button className='btn addbtn' onClick={handleAdd}>Add New Student</button></Link>
      </div>
           <br />

      <table className='table' border="2px" >
            <tbody>
             <tr  >
                <th className='td'>Name</th>
                <th className='td'>Age</th>
                <th className='td'>course</th>
                <th className='td'>Batch</th>
                <th className='td'>Edit</th>
             </tr>
             
             {
        context.map((item,index) => (

             <tr key={index} > 
               <td>{item.name}</td>
               <td>{item.age}</td>
               <td>{item.course}</td>
               <td>{item.batch}</td>
               <td> <Link to='./editStudent' state={{data:index}}>
                    Edit
                </Link> </td>
             </tr>))}
             </tbody>
           </table>
    </>
  );
}
export default Table