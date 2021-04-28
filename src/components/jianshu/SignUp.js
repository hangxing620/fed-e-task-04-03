import {
	Box,
	InputGroup,
	useColorModeValue,
	InputLeftAddon,
	Input,
	Flex,
	Text,
	Button,
	useToast,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signUp } from "../../service/user";

/**
 * @typedef ToastOptions
 * @property {String} title
 * @property {String} status
 * @property {Boolean} isClosable
 *
 */

/**
 *
 * @param {ToastOptions} props
 */
function ToastError(props) {
	
}

const validationSchema = () =>
	Yup.object({
		name: Yup.string().required("昵称不能为空"),
		email: Yup.string().email("请输入正确邮箱").required("邮箱地址不能为空"),
		password: Yup.string().required("密码不能为空"),
	});

function SignUp() {
	const toast = useToast();
	
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
		},
		validationSchema,
		onSubmit: (values) => {
			signUp({
				user: {
					username: values.name,
					email: values.email,
					password: values.password,
				},
			}).then((res) => {
				console.log(res);
				if (res.data.user !== "undefined") {
					toast({
						title: "SignUp success",
						status: "success",
						isClosable: true,
					});
				} else {
					toast({
						title: "SignUp fail",
						status: "error",
						isClosable: true,
					});
				}
			}).catch(error => {
				console.dir(error)
				toast({
					title: "SignUp fail",
					status: "error",
					isClosable: true,
				});
			});;
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
							placeholder="你的昵称"
							{...formik.getFieldProps("name")}
						/>
					</InputGroup>
					<InputGroup
						h={50}
						bgColor={textColor}
						alignItems="center"
						borderBottom="1px solid"
						borderBottomColor={borderColor}
					>
						<InputLeftAddon
							children={<AiOutlineMail />}
							border="none"
							borderRadius="none"
							bgColor={textColor}
						/>
						<Input
							p="0"
							type="text"
							_focus={{ border: "none" }}
							bgColor={textColor}
							borderRadius="none"
							border="none"
							placeholder="邮箱"
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
							placeholder="设置密码"
							{...formik.getFieldProps("password")}
						/>
					</InputGroup>
				</Flex>
				<Button
					mt={4}
					w="100%"
					borderRadius="full"
					colorScheme="green"
					type="submit"
				>
					注册
				</Button>
				<Flex
					direction="column"
					textAlign="center"
					color="gray.500"
					mt={4}
					fontSize="sm"
				>
					<Text>点击 “注册” 即表示您同意并愿意遵守简书</Text>
					<Text>
						<Text as="a" href="#" color="blue.500">
							用户协议
						</Text>
						&nbsp;和&nbsp;
						<Text as="a" href="#" color="blue.500">
							隐私政策 。
						</Text>
					</Text>
				</Flex>
				{formik.touched.name && formik.errors.name && formik.errors.name}<br/>
				{formik.touched.email && formik.errors.email && formik.errors.email}<br/>
				{formik.touched.password &&
					formik.errors.password &&
					formik.errors.password}
			</form>
		</Box>
	);
}
export default SignUp;
