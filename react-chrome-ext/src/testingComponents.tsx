import { useState } from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function TestingComponents() {
    const [change, setChange] = useState(true);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleButtonClick = () => {
        const randomDate = new Date();
        // setSelectedDate(randomDate);
    };


    return (
        <>
            <h1>Hello</h1>
            <input placeholder="HELLO, WORLD!" />

            {/* changes text of question to submit */}
            <button onClick={() => setChange(!change)}>
                Click Here!
            </button>
            {change ?
                (<h1>"original question" </h1>) // if can grab from original form
                : (<h1>"changed question" </h1>
                )}

            {/* generate random date with button */}
            <DatePicker
                label="Select a Date"
            // selected={selectedDate} 
            />

        </>
    )
}

export default TestingComponents;