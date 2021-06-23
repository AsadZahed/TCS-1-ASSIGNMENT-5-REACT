import React from "react";
import Header from "./header"
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Header />
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
                        <div>
                            <h2 style={{ borderBottom: "2px solid black", textAlign: "center" }}>This is an assignment of Topic in CS-1. In this assignment we have to implement different routes along with front end in react. You can upload, delete, submit and mark assignment. The navbar and buttons can navigate you to these 4 different pages</h2>
                            <div style={{ paddingTop: "1%", marginLeft:"40%" }}>
                                <Button variant="warning">
                                    <Link
                                        to="/upload"
                                    >
                                        Upload Assignment
                                    </Link>
                                </Button>
                            </div>
                            <div style={{ paddingTop: "2%", marginLeft:"40%" }}>
                                <Button variant="warning" >
                                    <Link
                                        to="/delete"
                                    >
                                        Delete Assignment
                                    </Link>
                                </Button>
                            </div>
                            <div style={{ paddingTop: "2%", marginLeft:"40%" }}>
                                <Button variant="warning">
                                    <Link
                                        to="/submit"
                                    >
                                        Submit Assignment
                                    </Link>
                                </Button>
                            </div>
                            <div style={{ paddingTop: "2%", marginLeft:"40%" }}>
                                <Button variant="warning"> <Link
                                    to="/mark"
                                >
                                    Mark Assignment
                                </Link></Button>{' '}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}