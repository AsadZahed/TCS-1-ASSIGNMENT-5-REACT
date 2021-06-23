import React from 'react';
import axios from 'axios';
import './Styles.css';
import Header from './header';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Upload() {
    const [fileName, setfileName] = React.useState('');
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');
    const [file, setFile] = React.useState('');

    const fileUpload = (event) => {
        const afile = event.target.files[0]
        setFile(afile)
        setfileName(file.name)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('file', file);
        data.append('date', "hh");
        data.append('time', "hh");
        axios.post('http://localhost:3001/users/upload', data, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        })

            .then((res) => console.log(res))
            .catch(err => console.log("fgfgfgfgfgfgfgfgfgv"+err))
    }

    return (
        <div>
            <div> <Header /> </div>
            <div style={{ backgroundColor: "#F8F8F8" }}>
                <div
                    style={{
                        paddingLeft: "12%",
                        paddingRight: "12%",
                        paddingTop: "2%",
                        paddingBottom: "5%"
                    }}
                >

                    <div
                        className="float-container"
                        style={{
                            border: "1px solid #DCDCDC",
                            backgroundColor: "#fff",
                            padding: "3%",
                            borderRadius: "5px",
                        }}
                    >
                        <h2 style={{ borderBottom: "2px solid black", textAlign: "center" }}>Upload New Assignments</h2>
                        <label>Upload The Assignment: </label>
                        <input type="file" onChange={fileUpload} />
                        <br />
                        <label>Select a Deadline: </label>
                        <label>Date</label>
                        <input type='date' value={date} onChange={e => setDate(e.target.value)} />
                        <p>
                            Time: <input type="time" value={time} onChange={e => setTime(e.target.value)} />
                        </p>
                        <p>Assignment Name: {fileName || 'No File Uploaded'}</p>
                        <input type="submit" onClick={handleSubmit} href="/" />
                        {/* <div style={{marginLeft:"85%"}}>
                        <Button variant="warning">
                            <Link
                                to="/"
                            >
                                Submit Assignment
                            </Link>
                        </Button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}