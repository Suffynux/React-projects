import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'
function Profile() {
    const {user} = useContext(UserContext);

    if(!user) return <div>Please Login</div> 

    return <div>Welcome {user.username}to the site</div>
}

export default Profile