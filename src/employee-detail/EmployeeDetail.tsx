import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Employee } from '../shared/models/employee';
import { GrGroup, GrMailOption, GrPhone } from "react-icons/gr";
import { CgGenderMale, CgGenderFemale, CgNametag } from "react-icons/cg";

import useGet from './../shared/hooks/useGet';
import { Link } from 'react-router-dom';
import { RouteParams } from '../shared/models/route-params';


const EmployeeDetail = () => {
    const { id } = useParams<RouteParams>();
    const url = `http://localhost:3001/employees/${id}`
    const { data } = useGet(url);
    let employee = data as unknown as Employee;
    console.log({ data });

    return (
        <div className="card-container">
            <div className="card-detail">
                <img src={employee?.image?.large} alt="" />
                <div className="card-detail-content">
                    <p className="card-item"><CgNametag /><span>{employee?.name}</span></p>
                    <p className="card-item"><GrPhone /><span>{employee?.jobTitle}</span></p>
                    <p className="card-item">
                        {employee?.gender?.toLowerCase() === 'male' && <CgGenderMale />}
                        {employee?.gender?.toLowerCase() === 'female' && <CgGenderFemale />}
                        <span>{employee?.gender}</span></p>
                    <a className="card-item" href="tel:+employee?.phone"><GrPhone /><span>{employee?.phone}</span></a>
                    <a className="card-item" href="mailto:employee?.email"><GrMailOption /><span>{employee?.email}</span></a>
                </div>
            </div>
            <div className="button-container">
                <button className="secondary" type="button">Delete</button>
              <Link to={`/edit/${employee?.id}`}>  <button className="primary" type="button">Edit</button></Link>
            </div>
        </div>
    )
}

export default EmployeeDetail
