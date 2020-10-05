import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';

// TODO(gabriel) Switch to class component because I need to keep track of state
const QuizIndex = () => {
    const [questions, setQuestions] = useState([]);
    const [answerOne, setAnswerOne] = useState("");
    const [answerTwo, setAnswerTwo] = useState("");
    const [answerThree, setAnswerThree] = useState("");
    const [answerFour, setAnswerFour] = useState("");
    const [answerFive, setAnswerFive] = useState("");

    const history = useHistory();

    const onSubmitQuiz = async (e) => {
        e.preventDefault();
        try {
            history.push({
                pathname: "/results", 
                state: {
                    // questions: questions,
                    // answerOne: answerOne,
                    // answerTwo: answerTwo,
                    // answerThree: answerThree,
                    // answerFour: answerFour,
                    // answerFive: answerFive,
                    resultOne: answerOne.replace(/[,.']/g, "").toLowerCase().includes(questions[0].comparison),
                    resultTwo: answerTwo.replace(/[,.']/g, "").toLowerCase().includes(questions[1].comparison),
                    resultThree: answerThree.replace(/[,.']/g, "").toLowerCase().includes(questions[2].comparison),
                    resultFour: answerFour.replace(/[,.']/g, "").toLowerCase().includes(questions[3].comparison),
                    resultFive: answerFive.replace(/[,.']/g, "").toLowerCase().includes(questions[4].comparison)
                }
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    const getQuestions = async () => {
        try {
            const response = await fetch("http://localhost:5000/questions");
            const jsonData = await response.json();

            setQuestions(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getQuestions();
    }, []);

    if (questions.length === 0) {
        return <h1>Loading...</h1>
    } else {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>FBLA Quiz</CardTitle>
                        <Form onSubmit={onSubmitQuiz}>
                            <FormGroup>
                                <Label for="answer-one">{questions[0].question}</Label>
                                <Input type="text" name="answer-one" id="answer-one" placeholder="Answer" value={answerOne} onChange={e => setAnswerOne(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="question-two">{questions[1].question}</Label>
                                <Input type="text" name="answer-two" id="answer-two" placeholder="Answer" value={answerTwo} onChange={e => setAnswerTwo(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="question-three">{questions[2].question}</Label>
                                <Input type="text" name="answer-three" id="answer-three" placeholder="Answer" value={answerThree} onChange={e => setAnswerThree(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="question-four">{questions[3].question}</Label>
                                <Input type="text" name="answer-four" id="answer-four" placeholder="Answer" value={answerFour} onChange={e => setAnswerFour(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="question-five">{questions[4].question}</Label>
                                <Input type="text" name="answer-five" id="answer-five" placeholder="Answer" value={answerFive} onChange={e => setAnswerFive(e.target.value)} />
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        );
    };
};

export default QuizIndex;