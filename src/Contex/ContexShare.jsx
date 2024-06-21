import React, { createContext, useState } from 'react'


export const addReciverContex = createContext()
export const logoutResponseContext = createContext()


function ContexShare({children}) {

const [addReciverContext,setReciverContex]=useState({})



const [AuthorToken, setAuthorToken] = useState(true)


  return (


    <>
    <addReciverContex.Provider value={{addReciverContex,setReciverContex}}>
    <logoutResponseContext.Provider value={{AuthorToken,setAuthorToken}}> 
         {children}
         </logoutResponseContext.Provider> 
    </addReciverContex.Provider>
    </>


  )
}

export default ContexShare