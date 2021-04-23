
import { Row } from "react-bootstrap";
import styled from "styled-components";
import { buy } from "../config";
import {motion} from 'framer-motion'


const Col = styled.div`
  background: transparent; 
  transition: var(--transition);

`;

const buyandsell = ( props ) => { 
  return (
    <>
      <h2 className="mt-3 titles"><span className="number mx-auto rounded-circle">2.</span> Buy, sell and lock</h2>
      <Row className="mt-3 "> 
        <Col className="col-md-6 align-items-center back-trans">
          <h3 className="mt-5 border-blue">Buy and Sell Tokens</h3>
          <p className="mt-3">
            The first 1,000 tokens for each listing cost $0.10 each. Token price
            automatically increases by $0.01 for each 100 tokens bought
            afterward, managed by a bonding curve algorithm. You can list
            anyone's account (even @elonmusk), as long as it's not already
            listed. If you add an account owned by someone else, interest will
            begin to accrue to their wallet immediately after a purchase is
            made, and they can claim it anytime. 
          </p>
        </Col>
        <Col className="col-md-6 shadow text-center">
          <motion.div whileHover={{
              scale: 1.2,
              transition: {
                  duration: .2
              }}}> 
            <img src={`${buy.url}`} alt="" className="img-fluid"/>{" "}
          </motion.div>
        </Col>
      </Row>
      <Row className=" mt-5 back-trans"> 
        
        <Col className="col-md-6 text-center shadow ">
            <motion.div whileHover={{
                scale: 1.2,
                transition: {
                    duration: .2
                }}}> 
              <img src={`${buy.url2}`} alt="" className="img-fluid"/>
            </motion.div>
        </Col>
        <Col className="col-md-6 back-trans">
          <h3 className="border-blue mt-5 text-right">Own an upvoted listing (passive income)</h3>
          <p className="mt-3 text-right">
            The listing owner is the person who owns the account represented
            by a token. For the Twitter listing "@naval," the listing owner is
            Naval Ravikant. After you verify ownership of your account, you'll
            be able to claim all of the interest generated by purchases of
            your account token, forever.
          </p>
        </Col> 
      </Row>

      <Row className="mt-5 mb-5">
        <Col className="col-md-6 back-trans">
          <h3 className="border-blue mt-5">How it works</h3>

          <p className="mt-3">
            Money spent on tokens is held in compound.finance, a decentralized
            lending protocol. Compound lends these deposits to borrowers, who
            pay interest (usually 1-10% annually).
          </p>
          </Col>
          <Col className="col-md-6 text-center shadow">
          <motion.div whileHover={{
              scale: 1.2,
              transition: {
                  duration: .2
              }}}> 
          <img src={`${buy.url3}`} alt=""  className="img-fluid" />
          </motion.div>
           </Col>
      </Row>
    </>
  );
};

export default buyandsell;