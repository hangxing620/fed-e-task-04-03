import { Button, FormControl, FormHelperText, Input, InputGroup, InputLeftAddon, InputRightAddon, RadioGroup, Radio, Stack, Select, Switch, FormLabel, Flex } from '@chakra-ui/react'
import { FaUserAlt, FaLock, FaCheck } from "react-icons/fa";

function SignUp() {
  return (
    <form>
      <Stack spacing="2">
        <FormControl isDisabled isInvalid>
          <InputGroup>
            <InputLeftAddon children={<FaUserAlt />} />
            <Input placeholder="请输入用户名" />
          </InputGroup>
          <FormHelperText>用户名是必填项</FormHelperText>
        </FormControl>
        <InputGroup>
          <InputLeftAddon children={<FaLock />} />
          <Input type="password" placeholder="请输入密码"/>
          <InputRightAddon children={<FaCheck />} />
        </InputGroup>
        <RadioGroup defaultValue="0">
          <Stack direction="row" spacing="4">
            <Radio value="0">男</Radio>
            <Radio value="1">女</Radio>
          </Stack>
        </RadioGroup>
        <Select placeholder="请选择学科">
          <option value="Java">Java</option>
          <option value="Css">Css</option>
        </Select>
        <FormControl display="flex" alignItems="center">
          <Switch id="deal-with" mr="3"/>
          <FormLabel htmlFor="deal-with">是否同意协议</FormLabel>
        </FormControl>
        <Button _hover={{ bgColor: "tomato" }} w="100%" colorScheme="teal">注册</Button>
      </Stack>
    </form>
  )
}
export default SignUp