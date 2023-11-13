import React from "react";
import { Link } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css?inline";

import Nav from 'react-bootstrap/Nav';

export default function Navbar() {
  return (
    <Nav defaultActiveKey="/home" as="ul" className="fixed-top top-0 d-flex justify-content-center" style={{ fontFamily: 'Pacifico',padding: '10px', borderBottom: '1px solid black', width: '75%', margin: 'auto', backgroundColor: 'beige'}}>
      <Nav.Item as="li">
        <Nav.Link href="/scarlet" style={{ fontSize: '24px', color: 'black' }}>Scarlet</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/nellie" style={{ marginLeft: '50px', fontSize: '24px', color: 'black' }}>Nellie</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="luna" style={{ marginLeft: '50px', fontSize: '24px', color: 'black' }}>Luna</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
