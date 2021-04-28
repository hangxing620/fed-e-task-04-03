import {
	Box,
	Text,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	useColorModeValue,
} from "@chakra-ui/react";
import SignIn from "./jianshu/SignIn";
import SignUp from "./jianshu/SignUp";



function Home() {
	const bgColor = useColorModeValue("gray.50", "gray.900");
	return (
		<Box bg={bgColor} pt={50} pb={30}>
			<Tabs>
				<TabList w={200} mx="auto" justifyContent="space-around" border="none" color="gray.500" position="relative">
					<Text as="b" position="absolute" top="50%" transform="translateY(-50%)">·</Text>
          <Tab
						_active={{
							bgColor: "none",
						}}
						_selected={{
							color: "orange.400",
							borderColor: "orange.400",
						}}
						_focus={{
							boxShadow: "none",
						}}
						fontWeight="bold"
					>
						登录
					</Tab>
					<Tab
						_active={{
							bgColor: "none",
						}}
						_selected={{
							color: "orange.400",
							borderColor: "orange.400",
						}}
						_focus={{
							boxShadow: "none",
						}}
						fontWeight="bold"
					>
						注册
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<SignIn />
					</TabPanel>
					<TabPanel>
						<SignUp />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
}
export default Home;
