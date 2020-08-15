
import * as React from 'react'
import { Paper, Card } from '@material-ui/core';
import InterviewQuestion from './../molecules/InterviewQuestion';
import InterviewResponse from './../molecules/InterviewResponse';

interface InterviewSectionProps {
    questions: String[]

}

const InterviewSection: React.FC<InterviewSectionProps> = props => {

    return (
        <Paper>
            {props.questions.map( question => (
                <>
                <Card>
                    {/* <InterviewQuestion  /> */}
                    <InterviewResponse question={question}/>
                    </Card>
                    <br/>
                </>
            ))}

        </Paper>
    )
}

export default InterviewSection