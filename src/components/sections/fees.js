import Link from "next/link";
import {Row} from 'react-bootstrap'
import styled from "styled-components";
import {motion} from 'framer-motion'
import {fee} from '../config'

const Col = styled.div`
  background: transparent;
`;

const fees = () => {
  return (
      <>
      <Row>
        <div className="mb-3">
          <h2 className="mt-3 titles"><span className="number ">4.</span>Reducing Fees</h2>
          <p>by Alexander Schlindwein, CTO</p>
        </div>
    <Col className="col-md-12 mb-3">
  
      <h3 className="border-blue">Tips for reducing transaction fees when using Ideamarket</h3>
      <ul>
        <li>
          If you want to list a new token and buy it, use “Add Listing” and
          choose “List & Buy in the same transaction.” This will ensure that you
          are the first purchaser, and will save you a second transaction.
        </li>
        <li>
          Buy and sell using DAI. While we support many ERC20 tokens, Ideamarket
          works natively with DAI. A purchase with tokens other than DAI will
          require a Uniswap transaction, increasing fees.
        </li>
        <li>
          When buying or selling, click “Advanced Options” and choose “Unlock
          permanent.” This will save you future transactions. Note: There is a
          risk associated with this method which applies to all ERC20 tokens.
          Please make sure you have understood this risk before using this
          option: 
          <Link href=" https://kalis.me/unlimited-erc20-allowances/">
            https://kalis.me/unlimited-erc20-allowances/
          </Link>
        </li>
        <li>
          Set the slippage as high as you are comfortable with. A higher
          slippage will reduce the risk of your transaction failing due to a
          price move, but you might get a worse price.
        </li>
        <li>
          Use a moderately high gas price for your transactions. While this
          might seem counterintuitive, a quickly-executed transaction will
          significantly decrease the risk of your transaction failing due to
          slippage.
        </li>
      </ul>
    </Col>
    </Row>
    <Row>
        <Col className="col-md-6">
            <h3 className="border-blue">A primer on the current fee situation on Ethereum</h3>
            <p>Over the past few months the Ethereum network has seen unprecedented growth. An extensive variety of DeFi applications, like decentralized exchanges and lending protocols, enable its users to interact with and invest in financial instruments built on the network. The permissionless nature of the blockchain allows anyone to participate, no matter their country of origin, age, or credit score.</p>
            <p>Yet there are downsides associated with this explosive growth. Interacting with applications built on Ethereum requires users to submit a transaction to the blockchain, while only a limited amount of transactions can be processed at a time. With immense demand for transactions and limited supply, fees are rising like never before.</p>
        </Col>
        <Col className="col-md-6">
          <motion.div whileHover={{
              scale: 1.2,
              transition: {
                  duration: .2
              }}}>
            <img src={fee} alt="" className="img-fluid"/>
          </motion.div>
        </Col>
    </Row>

    </>
  );
};

export default fees;
