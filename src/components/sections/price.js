import styled from 'styled-components'
import {motion} from 'framer-motion'
import {prices} from '../config'


const Col = styled.div`
    background: transparent;


`;

const price = ()=> {

    return(
        <> 
            <Col className="col-md-8 mt-5">
            <motion.div whileHover={{
              scale: 1.2,
              transition: {
                  duration: .2
              }}}> 
                <img src={prices} alt="" className="img-fluid shadow z-index-1"/>
            </motion.div>
            </Col>
            <Col className="col-md-4 mt-5">
            <h2 className="mt-3 titles"><span className="number">5.</span> Price history and details</h2>
                <p>Click a listing in the table on Ideamarket.io to open its Listing page.</p>
            </Col>
        </>
    )
}

export default price;