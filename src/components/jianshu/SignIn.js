import {
	Box,
	InputGroup,
	useColorModeValue,
	InputLeftAddon,
	Input,
	Checkbox,
	Flex,
	Text,
	Button,
	useToast,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signIn } from "../../service/user";

// email: "934752907@11.com"
// name: "度假胜地"
// password: "98766789"

const validationSchema = () =>
	Yup.object({
		email: Yup.string().required("手机号码或邮箱地址不能为空"),
		password: Yup.string().required("密码不能为空"),
	});

function SignIn() {
	const toast = useToast();
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema,
		onSubmit: (values) => {
			signIn({
				user: {
					email: values.email,
					password: values.password,
				},
			}).then((res) => {
				console.log(res);
				if (res.data.user !== "undefined") {
					toast({
						title: "login success",
						status: "success",
						isClosable: true,
					});
				} else {
					toast({
						title: "login fail",
						status: "error",
						isClosable: true,
					});
				}
			}).catch(error => {
				console.dir(error)
				toast({
					title: "login fail",
					status: "error",
					isClosable: true,
				});
			});
		},
	});
	const bgColor = useColorModeValue("gray.50", "gray.900");
	const textColor = useColorModeValue("gray.200", "gray.700");
	const borderColor = useColorModeValue("gray.300", "gray.500");
	return (
		<Box bgColor={bgColor} w="400px" px={50} pt={50} pb={30}>
			<form onSubmit={formik.handleSubmit}>
				<Flex direction="column" border="1px solid" borderColor={borderColor}>
					<InputGroup
						h={50}
						bgColor={textColor}
						alignItems="center"
						borderBottom="1px solid"
						borderBottomColor={borderColor}
					>
						<InputLeftAddon
							children={<FaUserAlt />}
							border="none"
							borderRadius="none"
							bgColor={textColor}
						/>
						<Input
							p="0"
							_focus={{ border: "none" }}
							bgColor={textColor}
							border="none"
							borderRadius="none"
							placeholder="手机号或邮箱"
							{...formik.getFieldProps("email")}
						/>
					</InputGroup>
					<InputGroup h={50} bgColor={textColor} alignItems="center">
						<InputLeftAddon
							children={<FaLock />}
							border="none"
							borderRadius="none"
							bgColor={textColor}
						/>
						<Input
							p="0"
							_focus={{ border: "none" }}
							bgColor={textColor}
							borderRadius="none"
							border="none"
							type="password"
							placeholder="密码"
							{...formik.getFieldProps("password")}
						/>
					</InputGroup>
				</Flex>
				<Flex justifyContent="space-between" color="gray.500" mt={4}>
					<Checkbox>记住我</Checkbox>
					<Text as="a" href="#">
						登录遇到问题？
					</Text>
				</Flex>
				<Button
					mt={4}
					w="100%"
					borderRadius="full"
					colorScheme="blue"
					type="submit"
				>
					登录
				</Button>
				{formik.touched.email &&
					formik.errors.email &&
					formik.errors.email}
				<br />
				{formik.touched.password &&
					formik.errors.password &&
					formik.errors.password}
			</form>
		</Box>
	);
}
export default SignIn;
