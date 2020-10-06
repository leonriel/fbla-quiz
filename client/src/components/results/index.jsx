import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, Form, FormGroup, Label, Input} from 'reactstrap';

const ResultsIndex = () => {
    let history = useHistory()

    let state = history.location.state;

    const calculateScore = (results) => {
        let resultsList = [results.resultOne, results.resultTwo, results.resultThree, results.resultFour, results.resultFive]
        let score = resultsList.filter(Boolean).length;

        return score
    }

    const displayFeedback = (result, correctAnswer) => {
        if (result === true) {
            return <span><strong style={{color: 'green'}}>Correct!</strong></span>
        } else if (result === false) {
            return <span><strong style={{color: 'red'}}>Incorrect!</strong> The correct answer is <strong>{correctAnswer}</strong>.</span>;
        }
    }

    return (
        <Card>
            <CardBody>
                <CardTitle><h3>{state.name}'s Results!</h3></CardTitle>
                <CardSubtitle><h5><strong>Your score is {calculateScore(state.results)}/5!</strong></h5></CardSubtitle>
                <Form>
                    <FormGroup>
                        <Label for="result-one">{state.questions[0].question}</Label>
                        <Input type="text" style={{backgroundColor: "#ffffff"}} name="result-one" id="result-one" value={state.answerOne} disabled/>
                        <Label for="result-one">{displayFeedback(state.results.resultOne, state.questions[0].answer)}</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="result-two">{state.questions[1].question}</Label>
                        <Input type="text" style={{backgroundColor: "#ffffff"}} name="result-two" id="result-two" value={state.answerTwo} disabled />
                        <Label for="result-two">{displayFeedback(state.results.resultTwo, state.questions[1].answer)}</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="result-three">{state.questions[2].question}</Label>
                        <Input type="text" style={{backgroundColor: "#ffffff"}} name="result-three" id="result-three" value={state.answerThree} disabled />
                        <Label for="result-three">{displayFeedback(state.results.resultThree, state.questions[2].answer)}</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="result-four">{state.questions[3].question}</Label>
                        <Input type="text" style={{backgroundColor: "#ffffff"}} name="result-four" id="result-four" value={state.answerFour} disabled />
                        <Label for="result-four">{displayFeedback(state.results.resultFour, state.questions[3].answer)}</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="result-five">{state.questions[4].question}</Label>
                        <Input type="text" style={{backgroundColor: "#ffffff"}} name="result-five" id="result-five" value={state.answerFive} disabled />
                        <Label for="result-five">{displayFeedback(state.results.resultFive, state.questions[4].answer)}</Label>
                    </FormGroup>
                </Form>
            </CardBody>
        </Card>
    )
}

export default ResultsIndex;