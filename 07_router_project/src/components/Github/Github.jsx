import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    return (
        <div className='bg-gray-600 text-center p-4 text-white text-3xl'>
            Github Followers:{data.followers}
            <img src={data.avatar_url} alt="git profile pic" width={200} />
        </div>
    )
}

export default Github

export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/mannukb8484')
    return response.json();
}