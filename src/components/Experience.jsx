import { useState } from 'react'

function Experience() {
    const [companyName, setCompanyName] = useState('');
    const [position, setPosition] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [desc, setDesc] = useState('');
    const [submit, setSubmit] = useState(null);
    const [edit, setEdit] = useState(true);

    function handleCompany(e) {
        setCompanyName(e.target.value);
    }

    function handlePosition(e) {
        setPosition(e.target.value);
    }

    function handleStartDate(e) {
        setStartDate(e.target.value);
    }

    function handleEndDate(e) {
        setEndDate(e.target.value);
    }

    function handleDesc(e) {
        setDesc(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            companyName,
            position,
            startDate,
            endDate,
            desc
        }
        setSubmit(formData);
        setEdit(false);
    }

    function handleEdit() {
        setEdit(true);
    }

    function handleCancelEdit() {
        setEdit(false);
    }

    return (
        <>
            {edit ? (
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Company name"
                        value={companyName}
                        onChange={handleCompany}
                    />
                    <input 
                        placeholder="Position"
                        value={position}
                        onChange={handlePosition}
                    />
                    <input
                        placeholder="Start Date"
                        value={startDate}
                        onChange={handleStartDate}
                    />
                    <input
                        placeholder="End Date"
                        value={endDate}
                        onChange={handleEndDate}
                    />
                    <input
                        placeholder="Description"
                        value={desc}
                        onChange={handleDesc}
                    />
                    <button type='submit'>Submit</button>
                    {submit && (
                        <button type='button' onClick={handleCancelEdit}>Cancel Edit</button>
                    )}
                </form>
            ) : (
                <>
                    {submit && (
                        <div>
                            <p>Company Name: {submit.companyName}</p>
                            <p>Position: {submit.position}</p>
                            <p>Start Date: {submit.startDate}</p>
                            <p>End Date: {submit.endDate}</p>
                            <p>Desc: {submit.desc}</p>
                        </div>
                    )}
                    <button onClick={handleEdit}>Edit</button>
                </>
            )}
        </>
    )
}

export default Experience;