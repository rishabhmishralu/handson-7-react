import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { editData } from './dataSlice';


function Edit() {
   const location = useLocation(); // returns the location object 
   const navigate = useNavigate();
   const index = (location.state.data);
   const dispatch = useDispatch();
   const array = useSelector((state)=>state.dataKey); // 

    // array of objects : context.entries
    // function         : context.updateFunction


    // the object in which the changes will be done 
    const newObj = {
        name : array[index].name,
        id : array[index].id,
        age : array[index].age,
        course : array[index].course,
        batch : array[index].batch
    }
    
    console.log("Index : " + index)
    const handleChange = (event) =>
    {
        newObj[event.target.name] = event.target.value;
       // console.log(newObj);     
    }

   const handleUpdate = (event) =>{
       // console.log(context.entries[index])
       dispatch(editData({newObj,index}));
       // payload : parameter passed with the action 
    //    context.updateFunction(
    //     (prevObj)=>{
    //         prevObj[index] = newObj;
    //         return (prevObj) //  updated prevObj is the new state 
    //     }
    //    );
       navigate('/');
    }


   return (
    <>
 
         <div id='form-head'>
            
            <div className='form'>
            <form>
            <label htmlFor="name">Name</label><br />
            <input className='form-box' onChange={handleChange} name='name' placeholder= {array[index].name}></input><br />
            <label htmlFor="age">Age</label><br />
            <input className='form-box' onChange={handleChange} name='age'   placeholder= {array[index].age}></input><br />
            <label htmlFor="course">Course</label><br />
            <input className='form-box' onChange={handleChange} name='course'   placeholder= {array[index].course}></input><br />
            <label htmlFor="batch">Batch</label><br />
            <input className='form-box' onChange={handleChange} name='batch'   placeholder= {array[index].batch}></input><br />
            <br/>
            <button className='btn' onClick={handleUpdate}>Update</button>
            </form></div>
            </div>
    </>
  )
}

export default Edit;