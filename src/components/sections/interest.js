import styled from "styled-components";
//import {prices} from '../config'

const Col = styled.div`
  background: transparent;

  .note{
      font-weight: bold;
  }
`;

const interest = () => {
  return (
    <>

      <h2 className="mt-3 titles"><span className="number text-center">6.</span> Claim your interest </h2>
      <Col className="col-lg-12 ">
      
     
        <p>
          To claim the interest accrued to a listing whose social media account
          you own, click 'Verify Ownership' on its Listing page, and send a
          verification tweet as instructed. 
        </p>

        <p className="note">Note: You must verify with a Tweet.
          A reply to another tweet won't work.</p>
      </Col>
    </>
  );
};

export default interest;
