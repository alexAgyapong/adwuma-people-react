import React, { useEffect, useState } from 'react'
import { Employee } from '../shared/models/employee';
import useGet from './../shared/hooks/useGet';
import EmployeeCard from './../shared/components/EmployeeCard';
import { Department } from './../shared/models/department';

const EmployeeList = () => {
    const url = `http://localhost:3001/employees`;
    const { data } = useGet(url);
    const [departments, setDepartments] = useState<Department[]>();
    let content = null
    let employees = data as unknown as Employee[]
    let res = localStorage.getItem('departments') as string;
    const depts = JSON.parse(res) as Department[];
    if (depts?.length) {
        depts?.forEach(dept => {
            employees?.forEach(emp => { if (+dept.id === +emp.departmentId) { emp.department = dept.name } });
        })
    }

    if (employees) {
        content = employees.map((employee: Employee) => (<EmployeeCard key={employee.id} employee={employee} />))
    }

    return (
        <div className="cards">{content}</div>
    )

}

export default EmployeeList
