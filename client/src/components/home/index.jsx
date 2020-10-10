import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardTitle,CardSubtitle, Button, Form, FormGroup, Label, Input} from 'reactstrap';

const HomeIndex = () => {
    const [name, setName] = useState("");
    const history = useHistory();

    const onSubmitInformation = async (e) => {
        e.preventDefault();
        try {
            const body = { name };
            const response = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            console.log(response);
            history.replace({
                pathname: "/quiz", 
                state: {
                    name: name
                }
            });
        } catch (error) {
            console.error(error.message)
        }
    };

    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle><h1>FBLA Quiz Generator</h1></CardTitle>
                    <CardSubtitle className="mt-2">Welcome to the FBLA Quiz Generator! You are about to take a 5-question quiz. The questions are randomly selected from a pool of 50 questions. Good luck!</CardSubtitle>
                    <Form className="mt-4" onSubmit={onSubmitInformation}>
                        <FormGroup>
                            <Label for="name">Enter Your Name</Label>
                            <Input type="text" name="name" id="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                        </FormGroup>
                        <Button color="primary">Next</Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
};

export default HomeIndex;