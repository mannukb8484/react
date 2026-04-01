import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    //user coz fetching data using context
    const { user } = useContext(UserContext) 

    if(!user) return <div>Please Login</div>
    else return <div>Welcome {user.username}</div>
}

export default Profile