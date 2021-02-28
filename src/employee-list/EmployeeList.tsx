import React from 'react'
import { Employee } from '../shared/models/employee';
import useGet from './../shared/hooks/useGet';
import EmployeeCard from './../shared/components/EmployeeCard';

const EmployeeList = () => {
    const url = `http://localhost:3001/employees`;
    const { data } = useGet(url);
    let employees = data as unknown as Employee[]
    console.log({ data });
    let content = null

    if (employees) {
        content = employees.map((employee: Employee) => (<EmployeeCard key={employee.id} employee={employee} />))
    }
    return (
        <div>{content}</div>
    )

}

export default EmployeeList
