import React from "react"
import { RouteProps } from "../../Routes"
import questions from "../../questions"
import chunk from 'lodash/chunk';
import shuffle from 'lodash/shuffle';
import { Paper } from "@material-ui/core";
import InterviewSection from './../organisms/InterviewSection';
const Interview: React.FC<RouteProps> = props => (
    <div>
        <h2>
            Interview
        </h2>
        {chunk( shuffle(questions), 6 ).map( qz => (
            <>
                <Paper>
                    <InterviewSection questions={qz}/>
                </Paper>
                <br />
            </>
        ) )}
    </div>
)

export default Interview
