import React from 'react'

const Fields = ({data,setData}) => {
  return (
    <div>
      <label className="n1">Name1</label>
    <input type="text" onChange={(e)=>setData({...data,name1:e.target.value})} value={data.name1} />
    <label className='n2'>Name2</label>
    <input type="text" onChange={(e)=>setData({...data,name2:e.target.value})} value={data.name2} />

    </div>
  )
}

export default Fields
