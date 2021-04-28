import {
	Box,
	Image,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	useColorModeValue,
} from "@chakra-ui/react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import chakraUILight from "../assets/images/chakra-ui-light.png";
import chakraUIDark from "../assets/images/chakra-ui-dark.png";
function Form() {
	const bgColor = useColorModeValue("gray.200", "gray.700");
	const chakraUI = useColorModeValue(chakraUILight, chakraUIDark);
	return (
		<Box w="100%" p={3} boxShadow="lg" borderRadius="lg" bgColor={bgColor}>
			<Image w="250px" mx="auto" mt="2" mb="6" src={chakraUI} />
			<Tabs isFitted>
				<TabList>
					<Tab _focus={{ boxShadow: "none" }}>注册</Tab>
					<Tab _focus={{ boxShadow: "none" }}>登录</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<SignUp />
					</TabPanel>
					<TabPanel>
						<SignIn />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
}
export default Form;
