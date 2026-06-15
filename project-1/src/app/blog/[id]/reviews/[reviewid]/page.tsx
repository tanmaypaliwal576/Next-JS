import React from 'react'
import { notFound } from 'next/navigation'
const page = async ({params} : {params : Promise<{ reviewid : string , id : string}>}) => {
    const {reviewid , id}  = await params

    if (parseInt(reviewid) > 1000)
  {
     return (
    <div>Review not found for page: {id} and review {reviewid}</div>
  )
  }
  return (
    <div>page {id} review : {reviewid} </div>
  )
}

export default page