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
            <Link to="/"><img src={employee.image.medium} alt="Employee" /></Link>
            <p> {employee.name}</p>
            <p> {employee.jobTitle}</p>
            {/* <hr/> */}
            <div className="other-card-info">
                <p className="card-item"><GrGroup /> <span>{employee.departmentId}</span></p>
                {/* <p className="card-item"><GrGroup /> <span>{employee.departmentId}</span></p> */}
                {/* <p className="card-item" ><GrGroup /> <span>{employee.departmentId}</span></p> */}
                <a className="card-item" href="tel:+employee.phone"><GrPhone /><span>{employee.phone}</span></a>
                <a className="card-item" href="mailto:employee.email"><GrMailOption /><span>{employee.email}</span></a>
            </div>
        </div>
    )
}

export default EmployeeCard
