import { Box } from '@mui/system'
import React, {useState } from 'react'
import { PromotionContainer, MessageText } from '../../styles/promotions'


const messages = [
    "Get 20% 0ff on your first booking",
    "Book 4 days and abve, get 1 day free from Us"
]

const Promotions = () => {
    const [messageIndex, setMessageIndex] = useState(0)
  return (
      <PromotionContainer>
          <Box display={"flex"} justifyContent="center" alignItems={"center"} />
          <MessageText>
              {messages[messageIndex]}
          </MessageText>
     </PromotionContainer>
  )
}

export default Promotions