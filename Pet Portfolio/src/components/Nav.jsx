import React from "react";
import { Link } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css?inline";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" />

import Nav from 'react-bootstrap/Nav';

export default function Navbar() {
  return (
    <Nav defaultActiveKey="/home" as="ul" className="fixed-top top-0 d-flex justify-content-center" style={{ fontFamily: 'Dancing Script, cursive',padding: '10px', border: '1px solid black'}}>
      <Nav.Item as="li">
        <Nav.Link href="/home" style={{ marinRight: '20px'}}>Scarlet</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1" style={{ marinRight: '20px'}}>Nellie</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Luna</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
