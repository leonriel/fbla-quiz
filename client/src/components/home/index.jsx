import React, {useState} from 'react';
import { Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input} from 'reactstrap';

const HomeIndex = () => {
    const [name, setName] = useState("");

    const onSubmitInformation = async (e) => {
        e.preventDefault();
        try {
            const body = { name };
            const response = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            console.log(response)
        } catch (error) {
            console.error(error.message)
        }
    };

    return (
        <div>
            <h1>FBLA Quiz Generator</h1>
            <Card>
                <CardBody>
                    <CardTitle>Enter Your Information</CardTitle>
                    <Form onSubmit={onSubmitInformation}>
                        <FormGroup>
                            <Label for="name">Enter Your Name</Label>
                            <Input type="text" name="name" id="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
};

export default HomeIndex;