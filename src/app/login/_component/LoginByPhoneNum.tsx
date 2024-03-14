import { Form, Input } from 'antd';

const LoginByPhoneNum = () => {
	const form = Form.useForm();

	return (
		<div>
			<Form form={form}>
				<Form.Item name={`phoneNum`}>
					<Input pla></Input>
				</Form.Item>
				<Form.Item>
					<Input></Input>
				</Form.Item>
			</Form>
		</div>
	);
};

export default LoginByPhoneNum;
