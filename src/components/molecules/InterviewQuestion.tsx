
import * as React from 'react'
import { Card } from '@material-ui/core';

interface InterviewQuestionProps {
    question: String

}

const InterviewQuestion: React.FC<InterviewQuestionProps> = props => {

    return (
        <>
                {props.question}
        </>
    )
}

export default InterviewQuestion