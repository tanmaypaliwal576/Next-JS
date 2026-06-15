import React from 'react'

const SlugPage = async ({params} : {params : Promise <{slug : string[]}>}) => {
    const {slug} = await params
    const newslug = slug.join(" ")
  return (
    <div>Document for the {newslug}</div>
  )
}

export default SlugPage