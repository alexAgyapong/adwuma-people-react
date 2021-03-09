import React from 'react'
import { useParams } from 'react-router-dom';
import { RouteParams } from './../shared/models/route-params';
import { Formik, Field, Form } from "formik";
import { Department } from '../shared/models/department';

interface MyFormValues {
    firstName: string;
}
const EmployeeEdit: React.FC<{}> = () => {
    const { id } = useParams<RouteParams>()
    let res = localStorage.getItem('departments') as string;
    const depts = JSON.parse(res) as Department[];
    const initialValues: MyFormValues = { firstName: '' };
    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={(values, actions) => {
                console.log({ values, actions });
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
            }}>
                <Form className="form" autoComplete="off">
                    <label htmlFor="firstName">First Name</label>
                    <Field className="field" id="firstName" name="firstName" placeholder="First Name" />
                    <label htmlFor="lastName">Last Name</label>
                    <Field className="field" id="lastName" name="lastName" placeholder="Last Name" />
                    <label htmlFor="gender">Gender</label>
                    <Field className="field" as="select" name="gender" id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </Field>
                    <label htmlFor="age">Age</label>
                    <Field className="field" type="number" min="18" max="65" id="age" name="age" placeholder="Age" />
                    <label htmlFor="phone">Phone</label>
                    <Field className="field" type="text" id="phone" name="phone" placeholder="Phone" />
                    <label htmlFor="phone">Email</label>
                    <Field className="field" type="email" id="email" name="email" placeholder="Email" />
                    <label htmlFor="department">Department</label>
                    <Field className="field" as="select" name="department" id="department">
                        <option selected value="">Select Department</option>
                        {depts.map(d => <option value={d.id}>{d.name}</option>)}
                    </Field>
                    <label htmlFor="jobTitle">Job Title</label>
                    <Field className="field" id="jobTitle" name="jobTitle" placeholder="Job Title" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default EmployeeEdit
