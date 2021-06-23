// import React from 'react';
// import './Styles.css';
// import { Link } from 'react-router-dom';

// export default function Header() {
//     return (
//         <div>
//             <ul>
//                 <Link to="/">
//                     <li>Upload</li>
//                 </Link>
//                 <Link to="/delete">
//                     <li>Delete</li>
//                 </Link>
//                 <Link to="/submit">
//                     <li>Submit</li>
//                 </Link>
//                 <Link to="/mark">
//                     <li>Mark</li>
//                 </Link>
//             </ul>
//         </div>
//     )
// }

import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <div>
            <div style={{ paddingBottom: "70px", backgroundColor: "#0047b3" }}></div>

            <Navbar style={{ paddingLeft: "12%", fontSize: "18px" }} bg="light" expand="lg">
                <Navbar.Brand style={{ fontSize: "30px" }}>
                    {/* <SiAddthis style={{ width:"10px",height:"10px",paddingRight: "10px", paddingBottom: "9px" }} /> */}
                    <Link
                        to="/"
                    >
                        LMS Assignment
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link> 
                        <Link
                            to="/upload"
                        >
                            Upload Assignment
                        </Link>
                        </Nav.Link>
                        <Nav.Link>
                        <Link
                            to="/submit"
                        >
                            Submit Assignment
                        </Link>
                        </Nav.Link>
                        <Nav.Link>
                        <Link
                            to="/mark"
                        >
                            Mark Assignment
                        </Link>
                        </Nav.Link>
                        <Nav.Link>
                        <Link
                            to="/delete"
                        >
                            Delete Assignment
                        </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}