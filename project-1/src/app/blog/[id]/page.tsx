import React from 'react'

const page = async ({params} : {params: Promise <{id : string}> }) => {
    const {id} = await params
  return (
    <div>Dynamic Page {id}</div>
  )
}

export default page