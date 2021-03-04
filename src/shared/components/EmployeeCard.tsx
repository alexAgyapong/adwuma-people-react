import React, { FC } from 'react'
import { Employee } from '../models/employee'
import { Link } from 'react-router-dom';
import { GrGroup, GrMailOption, GrPhone } from "react-icons/gr";
interface EmployeeProp {
    employee: Employee
}
const EmployeeCard: FC<EmployeeProp> = ({ employee }) => {

    return (
        <div className="card">
            <Link to={`/detail/${employee.id}`}>
                <img src={employee.image.medium} alt="Employee" />
                <p className="card-title"> {employee.name}</p>
                <p> {employee.jobTitle}</p>
            </Link>
            <div className="other-card-info">
                <p className="card-item"><GrGroup /> <span>{employee.department}</span></p>
                {/* <p className="card-item"><GrGroup /> <span>{employee.departmentId}</span></p> */}
                {/* <p className="card-item" ><GrGroup /> <span>{employee.departmentId}</span></p> */}
                <a className="card-item" href="tel:+employee.phone"><GrPhone /><span>{employee.phone}</span></a>
                <a className="card-item" href="mailto:employee.email"><GrMailOption /><span>{employee.email}</span></a>
            </div>
        </div>
    )
}

export default EmployeeCard
