import Link from 'next/link'
import React from 'react'

const page = () => {
  const data = [
    {
      id:'234',
      title:'meow',
      desc:'this is meow'
    },
    {
      id:'234sef4',
      title:'meow999999999',
      desc:'this is meow'
    },
    {
      id:'sfdsfdkr',
      title:'dngdmgo',
      desc:'this is rgrgmeow'
    }
  ]
  return (
    <div>
     { data.map((d) =>{
        return  <div>
          <Link href={`/services/${d.id}`}>
          <p>{d.title}</p>
          </Link>
        </div>
      })}
    </div>
  )
}

export default page