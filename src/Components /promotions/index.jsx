import { Slide } from '@mui/material'
import { Box } from '@mui/system'
import React, {useEffect, useState, useRef } from 'react'
import { PromotionContainer, MessageText } from '../../styles/promotions'


const messages = [
    "Get 20% 0ff on your first booking",
    "Book 4 days and abve, get 1 day free from Us", 
    "SUbscribe to our email newsletter and get first hand offers"
]

const Promotions = () => {
    const  containerRef = useRef()
    const [messageIndex, setMessageIndex] = useState(0)
    const [show, setShow] = useState(true)

    useEffect (() => {
        setTimeout(() => {
            setShow(false);
        }, 3000)
        const intervalId = setInterval(() => {
            setMessageIndex((i) => (i + 1) % messages.length)
             
            setShow(true);

            setTimeout(() => {
                setShow(false);
            }, 3000)

           
        }, 4000);
        return () => {
            clearInterval(intervalId);
        }
    }, [])
  return (
      <PromotionContainer ref={containerRef} overflow='hidden'>
          <Slide direction={show ? "left" : "right"} in={show}
              timeout={{
                  enter:500, 
                  out :300
          }}>
          <Box display={"flex"} justifyContent="center" alignItems={"center"} >
          <MessageText>
              {messages[messageIndex]}
              </MessageText>
              </Box>
          </Slide>
       
     </PromotionContainer>
  )
}

export default Promotions