import React from 'react'

const Fields = ({data,setData}) => {
  return (
    <div>
      <label>Name1</label>
    <div><input type="text" onChange={(e)=>setData({...data,name1:e.target.value})} value={data.name1} /></div>
    <label>Name2</label>
    <div><input type="text" onChange={(e)=>setData({...data,name2:e.target.value})} value={data.name2} /></div>
    <label>Name1</label>
    <div><input type="text" onChange={(e)=>setData({...data,name3:e.target.value})} value={data.name3} /></div>
    <label>Name1</label>
    <div><input type="text" onChange={(e)=>setData({...data,name4:e.target.value})} value={data.name4} /></div>
    <label>Name1</label>
    <div><input type="text" onChange={(e)=>setData({...data,name5:e.target.value})} value={data.name5} /></div>
    <label>Name1</label>
    <div><input type="text" onChange={(e)=>setData({...data,name6:e.target.value})} value={data.name6} /></div>
    <label>Name1</label>
    <div><input type="text" onChange={(e)=>setData({...data,name7:e.target.value})} value={data.name7} /></div>
    <label>Name1</label>
    <div><input type="text" onChange={(e)=>setData({...data,name8:e.target.value})} value={data.name8} /></div>
    <label>Name1</label>
    <div><input type="text" onChange={(e)=>setData({...data,name9:e.target.value})} value={data.name9} /></div>
    <label>Name1</label>
    <div><input type="text" onChange={(e)=>setData({...data,name10:e.target.value})} value={data.name10} /></div>
    <label>Name1</label>
    <div><input type="text" onChange={(e)=>setData({...data,name11:e.target.value})} value={data.name11} /></div>
    <label>Name1</label>
    <div><input type="text" onChange={(e)=>setData({...data,name12:e.target.value})} value={data.name12} /></div>
    <label>Name1</label>
    <div><input type="text" onChange={(e)=>setData({...data,name13:e.target.value})} value={data.name13} /></div>
    <label>Name1</label>
    <div><input type="text" onChange={(e)=>setData({...data,name14:e.target.value})} value={data.name14} /></div>
    

    </div>
  )
}

export default Fields
