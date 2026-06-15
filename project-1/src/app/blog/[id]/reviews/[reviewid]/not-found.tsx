import React from 'react'

const NotFound = async({params} : {params : Promise<{id:string , reviewid : string}>}) => {
  const {id , reviewid} = await params


  return(
    <div>
        Review not found for page : {id} and review : {reviewid}
    </div>
  )
   
}

export default NotFound