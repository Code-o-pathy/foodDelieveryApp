import React from 'react'
import { createContext } from 'react'

const UserContext =createContext({
    loggedInUser:"defaultAccount"
})

export default UserContext