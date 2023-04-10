import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

function UserDetails() {
    const params=useParams()
    const [searchParams, setSearchParams]=useSearchParams();

    const check=searchParams.get("filter")==="active";

  return (
    <>
        <div>UserDetails</div>
        <h3>Details about user with id: {params.id}</h3>

        <button onClick={()=>{setSearchParams({filter:"active"})}}>Active Users</button>
        <button onClick={()=>{setSearchParams({})}}>Clear Filter</button>

        {check ? <h3>Active users only</h3> : <h3>All Users</h3>}
    </>
  )
}

export default UserDetails