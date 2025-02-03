import React from 'react'

const page = ({params}) => {
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
      const singleData = data.find(d => d.id == params.id)
      if(singleData){
        return (
          <div>
              <h1>Service Detail page</h1>
              <p>ID: {params.id}</p>
              <p>{singleData.title}</p>
              <p>{singleData.desc}</p>
          </div>
        )
      }
      else{
        return <p>404 ID NOT FOUND</p>
      }
 
}

export default page