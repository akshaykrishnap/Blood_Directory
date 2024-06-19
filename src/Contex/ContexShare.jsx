import React, { createContext, useState } from 'react'


export const addReciverContex = createContext()



function ContexShare({children}) {

const [addReciverContext,setReciverContex]=useState({})




  return (


    <>
    <addReciverContex.Provider value={{addReciverContex,setReciverContex}}>
        {children}
    </addReciverContex.Provider>
    </>


  )
}

export default ContexShare