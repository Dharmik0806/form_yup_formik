import React from 'react';
import { Form, useFormik } from 'formik'
import * as yup from 'yup'
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import { red } from '@mui/material/colors';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

function FormValidation(props) {

    // useFormik 

    let schema = yup.object().shape({
        // name: yup.string().required("name is required"),
        // sname: yup.string().required("secound name is required"),
        // email: yup.string().email("valide email").required("email is required"),
        // password: yup.string().min(5, 'must enter 5 characters').required("password is required"),
        // repassword: yup.string().required("conform password is required").oneOf([yup.ref('password'), null], 'your password do not match'),
        date: yup.date().required(),
        // zender: yup.string().required("zender is required feild"),

        course: yup.array().required("course is required feild")

        // term: yup.boolean().oneOf([true], "You must accept the terms and conditions"),

    })

    const formikObj = useFormik({
        initialValues: {
            // name: "",
            // sname: "",
            // email: "",   
            // password: "",
            // repassword: "",
            date: "",
            // zender: "",

            course: []

            // term: false

        },

        validationSchema: schema,

        onSubmit: values => {
            console.log(values);
        }
    })



    console.log(formikObj.values);
    console.log(formikObj.errors);

    return (
        <div>
            <form onSubmit={formikObj.handleSubmit}>
                <Box sx={{ p: 3, m: "auto", marginTop: 5, borderRadius: 3, border: '1px solid grey', width: 500 }}>
                    <h1>SignUp Form</h1>

                    {/* <div >
                        <TextField
                            id="named"
                            name="name"
                            type="text"
                            label="First Name"
                            fullWidth
                            variant="outlined"
                            onChange={formikObj.handleChange}
                            value={formikObj.values.name}
                            onBlur={formikObj.handleBlur}
                            sx={{ marginTop: 1 }}
                        />
                        {formikObj.errors.name && formikObj.touched.name ? <p>{formikObj.errors.name}</p> : null}
                    </div> */}

                    {/* <div >
                        <TextField
                            id="sname"
                            name="sname"
                            type="text"
                            label="Secound Name"
                            fullWidth
                            variant="outlined"
                            onChange={formikObj.handleChange}
                            value={formikObj.values.sname}
                            onBlur={formikObj.handleBlur}
                            sx={{ marginTop: 1 }}
                        />
                        {formikObj.errors.sname && formikObj.touched.sname ? <p>{formikObj.errors.sname}</p> : null}
                    </div> */}

                    {/* <div >
                        <TextField
                            id="email"
                            name="email"
                            type="text"
                            label="E-Mail id"
                            fullWidth
                            variant="outlined"
                            value={formikObj.values.email}
                            onChange={formikObj.handleChange}
                            onBlur={formikObj.handleBlur}
                            sx={{ marginTop: 1 }}
                        />
                        {formikObj.errors.email && formikObj.touched.email ? <p>{formikObj.errors.email}</p> : null}
                    </div> */}

                    {/* <div >
                        <TextField
                            id="password"
                            name="password"
                            type="password"
                            label="Password"
                            fullWidth
                            variant="outlined"
                            value={formikObj.values.password}
                            onChange={formikObj.handleChange}
                            onBlur={formikObj.handleBlur}
                            sx={{ marginTop: 1 }}
                        />
                        {formikObj.errors.password && formikObj.touched.password ? <p>{formikObj.errors.password}</p> : null}
                    </div> */}

                    {/* <div >
                        <TextField
                            id="repassword"
                            name="repassword"
                            type="password"
                            label="Conform Password"
                            fullWidth
                            variant="outlined"
                            value={formikObj.values.repassword}
                            onChange={formikObj.handleChange}
                            onBlur={formikObj.handleBlur}
                            sx={{ marginTop: 1 }}
                        />
                        {formikObj.errors.repassword && formikObj.touched.repassword ? <p>{formikObj.errors.repassword}</p> : null}

                    </div> */}

                    <div >
                        {/* <InputLabel id="demo-simple-select-label" sx={{ marginTop: 1 }}>D.O.B</InputLabel> */}

                        <TextField
                            id="date"
                            name="date"
                            type="date"
                            fullWidth
                            variant="outlined"
                            value={formikObj.values.date}
                            onChange={formikObj.handleChange}
                            onBlur={formikObj.handleBlur}
                            sx={{ marginTop: 1 }}
                        />
                        {formikObj.errors.date && formikObj.touched.date ? <p>{formikObj.errors.date}</p> : null}
                    </div>

                    {/* <div >
                        <FormControl
                            sx={{ border: '1px solid grey', borderRadius: 1, p: 1.5, width: 474, marginTop: 1 }}

                        >

                            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="zender-radio-btn"
                                onChange={formikObj.handleChange}
                                value={formikObj.values.zender}
                                onBlur={formikObj.handleBlur}


                            >

                                <FormControlLabel
                                    name='zender'
                                    value="male"
                                    control={<Radio />}
                                    label="Male"

                                />

                                <FormControlLabel
                                    name='zender'
                                    value="female"
                                    control={<Radio />}
                                    label="Female"
                                />

                                <FormControlLabel
                                    name='zender'
                                    value="other"
                                    control={<Radio />}
                                    label="Other"
                                />

                            </RadioGroup>
                        </FormControl>
                        {formikObj.errors.zender && formikObj.touched.zender ? <p>{formikObj.errors.zender}</p> : null}

                    </div> */}

                    {/* <div>
                        <FormControl fullWidth sx={{ marginTop: 1 }}>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="course"
                                id="course"
                                label="Course"
                                name='course'
                                onChange={formikObj.handleChange}
                                value={formikObj.values.course}
                                onBlur={formikObj.handleBlur}

                            >

                                <MenuItem
                                    value={"reactjs"}
                                >ReactJS</MenuItem>

                                <MenuItem
                                    value={"javasctipt"}
                                >Javasctipt</MenuItem>

                                <MenuItem
                                    value={"html"}
                                >HTML</MenuItem>
                            </Select>
                        </FormControl>
                        {formikObj.errors.course && formikObj.touched.course ? <p>{formikObj.errors.course}</p> : null}

                    </div> */}

                    <div>
                        <FormGroup
                            sx={{ border: '1px solid grey', borderRadius: 1, p: 1.5, marginTop: 1 }}
                            name="hobby"
                            onChange={formikObj.handleChange}
                            value={formikObj.values.hobby}
                            onBlur={formikObj.handleBlur}
                        >

                            <FormControlLabel
                                control={<Checkbox />}
                                label="cricket"
                                value="cricket"
                                name="cricket"

                            />

                            <FormControlLabel
                                control={<Checkbox />}
                                label="singing"
                                value="singing"
                                name="singing"

                            />

                            <FormControlLabel
                                control={<Checkbox />}
                                label="reading"
                                value="reading"
                                name="reading"

                            />

                        </FormGroup>

                        {formikObj.errors.hobby && formikObj.touched.hobby ? <p>{formikObj.errors.hobby}</p> : null}

                    </div>

                    {/* <div>
                        <FormGroup
                            sx={{ borderRadius: 1, p: 1.5, marginTop: 1 }}
                            onChange={formikObj.handleChange}
                            value={formikObj.values.term}
                            onBlur={formikObj.handleBlur}
                        >
                            <FormControlLabel
                                name='term'
                                control={<Checkbox />}
                                label="I have read and (I) agree with the terms and conditions."
                            />
                        </FormGroup>
                        {formikObj.errors.term && formikObj.touched.term ? <p>{formikObj.errors.term}</p> : null}

                    </div> */}

                    <div>
                        <FormGroup sx={{ marginTop: 3 }}>
                            <Button variant="outlined" type='submit'>Primary</Button>
                        </FormGroup>
                    </div>
                </Box>
            </form>
        </div>
    );
}

export default FormValidation;