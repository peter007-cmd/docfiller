import { useState } from "react";
import axios from 'axios'
import React from 'react'
import Fields from "../components/Fields";
const Form = () => {
    const [data,setData] = useState({
        name1:'',
        name2:'',
        name3:'',
        name4:'',
        name5:'',
        name6:'',
        name7:'',
        name8:'',
        name9:'',
        name10:'',
        name11:'',
        name12:'',
        name13:'',
        name14:'',
    })
    const fillUser = async (e) => {
        const {name1,name2,name3,name4,name5,name6,name7,name8,name9,name10,name11,name12,name13,name14} = data
        e.preventDefault();
        try {
          await axios.post('http://localhost:4000/fill', {
            name1,name2,name3,name4,name5,name6,name7,name8,name9,name10,name11,name12,name13,name14
          })
          alert("Document created successfully")
        } catch (error) {
          alert('Creation failed')
          console.log(error)
        }
    
      }
    
  return (
    <div className="App">
      <h1>LegiSpeak</h1>
      <Fields data={data} setData={setData}/>
    <button onClick={(e)=>{
        alert("Submitted")
        fillUser(e)
        console.log(data)

    }}>Submit</button>
    </div>
  )
}

export default Form
