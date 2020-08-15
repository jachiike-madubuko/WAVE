import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const options  = [
    { name: 'color', value: 'red', label: 'Red' },
    { name: 'color', value: 'blue', label: 'Blue' },
    { name: 'color', value: 'yellow', label: 'Yellow' },
    { name: 'color', value: 'green', label: 'Green' },
    { name: 'color', value: 'black', label: 'Black' },
];

interface InterviewResponseProp {

    question: String
}

const InterviewResponse: React.FC<InterviewResponseProp> = props => {

    const {question} = props
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{question}</FormLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="0">
                <FormControlLabel
                    value="+3"
                    control={<Radio color="primary" />}
                    label="Agree"
                    labelPlacement="start"
                    />
                <FormControlLabel
                    value="+2"
                    label=""
                    labelPlacement="bottom"
                    control={<Radio color="primary" />}
                    />
                <FormControlLabel
                    value="+1"
                    label=""
                    labelPlacement="bottom"
                    control={<Radio color="primary" />}
                    />
                <FormControlLabel
                    value="0"
                    label=""
                    labelPlacement="bottom"
                    control={<Radio color="primary" />}
                    />
                <FormControlLabel
                    value="-1"
                    control={<Radio color="primary" />}
                    labelPlacement="bottom"
                    label=""
                    />
                <FormControlLabel
                    value="-2"
                    control={<Radio color="primary" />}
                    label=""
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="-3"
                    control={<Radio color="primary" />}
                    label="Disagree"
                    labelPlacement="end"
                />
            </RadioGroup>
        </FormControl>
    );
}


export  default InterviewResponse