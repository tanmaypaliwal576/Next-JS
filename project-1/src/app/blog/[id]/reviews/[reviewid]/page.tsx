import React from 'react'

const page = async ({params} : {params : Promise<{ reviewid : string , id : string}>}) => {
    const {reviewid , id}  = await params
  return (
    <div>page {id} review : {reviewid} </div>
  )
}

export default page