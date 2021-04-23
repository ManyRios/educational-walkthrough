import { Card } from "react-bootstrap";
import styled from "styled-components";
import {motion} from 'framer-motion'
import { listings } from "../config";

const Col = styled.div`
  background: transparent;
  .borders{
      border-bottom: solid 1px blue;
  }

  .card-body-border{
    border-left: solid 3px blue; 
  }

`;

const listing = () => {
  return (
    <>
      <Col className="col-md-5">
      <h2 className="mt-3 titles"><span className="number mx-auto rounded-circle">3.</span>Add new Listing</h2>
        <Card.Body className="card-body-border">
          <h5 className="mt-4">
            To add a new listing, click "Add Listing" on Ideamarket.io and
            follow the instructions.
          </h5>
            <p>
              You can list any account, even if you don't own it. You could even
              list @elonmusk — as long as it's not already listed. If you add an
              account owned by someone else, interest will begin to accrue to
              their wallet immediately, and they can claim it anytime.
            </p>
          <h5>List & Buy in one transaction</h5>
          
          <p>
              We highly recommend that you List & Buy when listing a new token.
              This is because when you list a new token, it starts at the lowest
              possible price. If you don't List & Buy in the same transaction, you
              might lose the opportunity to buy at the moment of minimum risk and
              maximum potential reward.
          </p>
         
        </Card.Body>
      </Col>
      <Col className="col-md-7 text-center ">
        <Card.Body className="mt-5 ">
          <motion.div whileHover={{
              scale: 1.2,
              transition: {
                  duration: .2
              }}}>
            <img src={`${listings.url}`} alt=""  className="shadow img-fluid"/>
          </motion.div>
        </Card.Body>
      </Col>
    </>
  );
};

export default listing;
