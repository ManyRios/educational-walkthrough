
import { Card, ListGroup } from "react-bootstrap";
import Link from "next/link";
import styled from "styled-components";
import {motion} from 'framer-motion'
import { logo, list } from "../config";

const Col = styled.div`

  .idea {
    color: blue;
  }

  h1 {
    font-size: 50px;
    font-weight: bold;
  }

  .lists {
    background: var(--white);
  }

  .list-group-item {
    width: 100%;
    color: black;
  }

  .list-group-item:hover{
      text-decoration: none;
      background: blue;
      color: white;
    }
`;

const Tutorial = () => {
  return (
   
    <>
      <Col className="col-md-4 mt-5">
        <Card.Body className="shadow lists">
          <h4>Start Learning</h4>
          <ListGroup className=" mt-2 w-100 ">
            {list.map(({ name, url }, i) => (
              <motion.div  key={i}  whileHover={{
                scale: 1.05,
                transition: {
                    duration: .1
                }}}>
              <Link href={`${url}`}>
                <a>
                  <ListGroup.Item className="d-inline-block mt-2 btn-outline-primary ">
                    <img
                      alt=""
                      src={`${logo.url}`}
                      width="20"
                      height="10%"
                      className="d-inline-block text-center mr-3 img-fluid"
                    />{" "}
                    {name}
                  </ListGroup.Item>
                </a>
              </Link>
              </motion.div>
            ))}
          </ListGroup>
        </Card.Body>
      </Col>
     
        <Col className="col-md-8 justify-content-right mt-5">
          <Card.Body className="text-right">
            <img
              alt=""
              src={`${logo.url}`}
              width="100"
              height="130"
              className="d-inline-block mx-auto mb-2 img-fluid"
            />{" "}
            <h1 className="mt-4 ">
              Welcome to <span className="idea">Ideamarket</span>
            </h1>
            <p className="mt-4 justify-content-end">
              We will teach you how to start trading with us
            </p>
          </Card.Body>
        </Col>
      </>
   
  );
};

export default Tutorial;
