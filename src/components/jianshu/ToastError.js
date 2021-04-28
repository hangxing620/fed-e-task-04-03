import { useToast } from '@chakra-ui/react'

function ToastError(props) {
  const toast = useToast()
  toast({
    title: props.content,
    status: props.status || 'error',
    isClosable: props.isClosable || true
  })
}

export default ToastError