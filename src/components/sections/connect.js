import { useRef, useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import { demoMetamask } from "../config";


const Col = styled.div`
  background: transparent;
  transform: var(--transition);
`;


const images = {
  
}


const connect = () => {

  

  useEffect(() => {
   
   // sr.reveal(revealContainer.current, srConfig());
  }, [])


  return (
    <> 
      <Col className="col-lg-7 mt-3 p-3 ">
        <Card.Body className="justify-content-center shadow ">
          <h2>To Use Metamask with Ideamarket</h2>
          <ol className="mt-3">
            <li>Select the connect button on this page</li>
            <li>Authorize metamask to connect Ideamarket</li>
          </ol>
        
            <img src={`${demoMetamask.url}`} alt="" className="img-fluid"/>{" "}
     
        </Card.Body>
      </Col>
      <Col className="justify-items-right col-lg-5 mt-5">
        <Card.Body>
        <h2 className="mt-3 titles"><span className="number">1.</span> Connect Wallet </h2>


          <img src="" alt="" />
          {""}

          <p>Please confirm in your extension window</p>

          <Button variant="primary" size="lg">
            Connect Wallet
          </Button>
        </Card.Body>
      </Col>
    </>
  );
};

export default connect;
