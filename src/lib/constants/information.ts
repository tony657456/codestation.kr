type TInformation = {
	name: string;
	title: string;
	placeholder: string;
};

export const InformationInput: TInformation[] = [
	{
		name: 'name',
		title: '*이름',
		placeholder: '이름',
	},
	{
		name: 'phoneNumber',
		title: '*전화번호',
		placeholder: '010-****-****',
	},
	{
		name: 'email',
		title: '*이메일',
		placeholder: 'codestation@gmail.com',
	},
	{
		name: 'company',
		title: '*회사',
		placeholder: 'codestation',
	},
];
