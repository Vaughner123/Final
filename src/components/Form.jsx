import { Button } from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'
import { useState } from "react";

function BasicExample() 
    const [emailAdress, setEmailAdress] = useState('');
    const elements = [
        {label: 'Email Adress', type: 'email'},
        {label: 'First Name', type: 'text'},
        {label: 'Password', type: 'password'},
    ];


    return(
   <Form>
    {elements.map((elem) => {
        return(
            <Form.Group className="mb-3" controlId ="formBasicEmail">
            <Form.Label>{elem.label}</Form.Label> 
            <Form.Control> type={elem.label} placeholder ="Enter Email" /</Form.Control>
            </Form.Group>
        );
    })}
<Button variant="primary" type="submit">
    Submit
</Button>
<h3>Hi {emailAdress}</h3>
<h3>Your Firstname is {emailAdress}</h3>
<h3>Your Password is {emailAdress}</h3>
 </Form>
    );

export default BasicExample;