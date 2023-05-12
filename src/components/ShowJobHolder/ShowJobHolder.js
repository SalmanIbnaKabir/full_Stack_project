import React, { useEffect, useState } from 'react'
import ShowData from './ShowData'
import { Link } from 'react-router-dom'

function ShowJobHolder() {

  const [datas, setDatas] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/sik1359')
      .then(res => res.json())
      .then(data => setDatas(data))
  }, [])

  // console.log(datas)

  return (
    <div>
      <Link to='/' className='navigation'>Go Home</Link>
      {
        datas.map(data => <ShowData key={data._id} data={data}></ShowData>)
      }
    </div>
  )
}

export default ShowJobHolder