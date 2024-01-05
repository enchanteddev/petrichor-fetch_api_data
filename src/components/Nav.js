import React, { useEffect, useState } from "react";


const Nav = () => {

    const [column, setColumn] = useState([])
    const [events, setEvents] = useState([])
    const [eventIndex, setEventIndex] = useState(0)


    useEffect(() => {
        fetch('https://petrichor-backend.vercel.app/api/events')
            .then(res => res.json())
            .then(data1 => {
                setColumn(data1.data)
                setEvents(data1.events)
            })
    }, [])



    let selected = ""

    const handleChange = event => {
        selected=event?.target.value;
        setEventIndex(events.findIndex(object => {
            return object.name === selected;
        }
        ));

    };



    return (
        <>
            <select style={{marginTop:'2rem',marginLeft:'4.5rem',marginBottom:'1rem'}} id="selected" onChange={(e)=>handleChange(e)}>
                {events?.map(event => (
                    <option keys={event.id}>{event.name}</option>
                ))}
            </select>
            <div className='container'>
                <div>
                    <h1>{events[eventIndex]?.name}</h1>
                    <table className='table'>
                        <thead>
                            <tr>
                                {
                                    column.map((c, i) => (
                                        <th key={i}>{c}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                events[eventIndex]?.participants.map((participants, i) => (
                                    <tr key={i}>
                                        {column.map((c, i) => (
                                            <td key={i}>{participants[c]}</td>
                                        ))
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Nav;
