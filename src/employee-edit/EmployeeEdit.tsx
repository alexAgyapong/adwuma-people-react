import React from 'react'
import { useParams } from 'react-router-dom';
import { RouteParams } from './../shared/models/route-params';

const EmployeeEdit = () => {
    const { id } = useParams<RouteParams>()
    return (
        <div>
            <h2>Edit Employee here ... {id}</h2>
        </div>
    )
}

export default EmployeeEdit
