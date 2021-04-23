import NavBar from '../components/Nav'
import {Tutorial} from '../components'
import {Container, Row } from 'react-bootstrap'
import {motion} from 'framer-motion'

const Index = (  ) => {
    
    return(   
      <>
          <NavBar/>
          <motion.div  initial="pageInitial" animate="pageAnimate" variants={{
                  pageInitial: {
                    opacity: 0,
                  },
                  pageAnimate: {
                    opacity: 1,
                  },
                }}> 
           <Container className="mt-2 h-100 ">
             <Row>
                <Tutorial/>   
             </Row>       
          </Container>
          </motion.div>
      </>
  )
};
  
  export default Index;
  