import React from 'react';
import { useHistory } from 'react-router-dom';

const ResultsIndex = () => {
    let history = useHistory()

    console.log(history.location.state);

    const calculateScore = (results) => {
        let resultsList = [results.resultOne, results.resultTwo, results.resultThree, results.resultFour, results.resultFive]
        let score = resultsList.filter(Boolean).length;

        return score
    }

    return <h1>{calculateScore(history.location.state)}/5</h1>
}

export default ResultsIndex;