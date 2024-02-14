import { useState } from 'react'

function Education() {
    const [school, setSchool] = useState('');
    const [degree, setDegree] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endYear, setEndYear] = useState('');
    const [submit, setSubmit] = useState(null);
    const [edit, setEdit] = useState(true);

    function handleSchool(e) {
        setSchool(e.target.value);
    }

    function handleDegree(e) {
        setDegree(e.target.value);
    }
    
    function handleStartYear(e) {
        setStartYear(e.target.value);
    }

    function handleEndYear(e) {
        setEndYear(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            school,
            degree,
            startYear,
            endYear
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
                        placeholder="School"
                        value={school}
                        onChange={handleSchool}
                    />
                    <input 
                        placeholder="Degree"
                        value={degree}
                        onChange={handleDegree}
                    />
                    <input
                        placeholder="Start Year"
                        value={startYear}
                        onChange={handleStartYear}
                    />
                    <input
                        placeholder="End Year"
                        value={endYear}
                        onChange={handleEndYear}
                    />
                    <button type='submit'>Submit</button>
                    {submit && (
                        <button type='button' onClick={handleCancelEdit}>Cancel Edit</button>
                    )}
                </form>
            ) : (
                <>
                    {submit && (
                        <>
                            <p>{submit.school}</p>
                            <p>{submit.degree}</p>
                            <p>{submit.startYear}</p>
                            <p>{submit.endYear}</p>
                        </>
                    )}
                    <button onClick={handleEdit}>Edit</button>
                </>
                )
            }
        </>
    )
}

export default Education;