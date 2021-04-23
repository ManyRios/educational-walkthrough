import {Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import NavBar from './Nav'
import Lists from './lists'
import {motion} from 'framer-motion'

const TutorialStyle = styled.section`

  height: 100%;
  background: transparent;

    #lists{
        text-align: center;
    }

  .container {
    height: 100%;
    color: var(--black);
  }


`


const Layout = ( props, router ) => {

    
    return (
        <>

            <NavBar/>
            <Lists/>
            <TutorialStyle>
            <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
                  pageInitial: {
                    opacity: 0,
                  },
                  pageAnimate: {
                    opacity: 1,
                  },
                }}>  
                    <Container className="mt-2 h-100 ">
                        <Row >
                            {props.children}
                        </Row>   
                    </Container>
              </motion.div>
                
            </TutorialStyle>
        </>
    )
}

export default Layout;