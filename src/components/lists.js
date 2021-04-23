import Link from 'next/link'
import { ListGroup } from 'react-bootstrap'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {logo, list} from './config'

const ListStyles = styled.div`
    display: flex;
    background: var(--idea-color) ;
   

    .list-group{
       align-items: center;
    }

    .list-group-item{
      font-weight: bold;
      color: black;
    }

    .list-group-item:hover{
      text-decoration: none;
      color: white;   
    }
    .list-group-item img:hover{
      color: white;
    }

`

export const Lists = () => {

    return (
        <ListStyles> 
            <ListGroup horizontal className="w-100 mt-2 p-3 justify-content-center "> 
               
                {list.map(({ name, url }, i) => (
                  <motion.div  key={i}  whileHover={{
                    scale: 1.05,
                    transition: {
                        duration: .1
                    }}}>
                  <Link href={url}>
                    <a >
                    <ListGroup.Item 
                    
                    className="d-inline-block  mr-2 rounded btn btn-outline-primary space-between" 
                    >  
                      <img
                        id="list-logo"
                        alt=""
                        src={`${logo.url}`}
                        width="20"
                        height="30"
                        className="d-inline-block text-center mr-2"
                      />{" "} {name}
                    </ListGroup.Item>
                    </a>
                  </Link>
                  </motion.div>
                ))}

              </ListGroup>
             
        </ListStyles>
    )
}


export default Lists