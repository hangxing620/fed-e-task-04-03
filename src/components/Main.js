import { Box } from '@chakra-ui/react'
import { Route } from 'react-router-dom'
import Card from './Card'
import Form from './Form'
import Home from './Home'
function Main() {
  return (
    <Box w="50%" mx="auto" mt="100px" d="flex" justifyContent="center">
      <Route path="/home" component={Home}></Route>
      <Route path="/form" component={Form}></Route>
      <Route path="/card" component={Card}></Route>
    </Box>
  )
  
}
export default Main