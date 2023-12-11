type TInformation = {
	name: string;
	title: string;
	placeholder: string;
};

export const InformationInput: TInformation[] = [
	{
		name: 'clientName',
		title: '*이름',
		placeholder: '이름',
	},
	{
		name: 'clientPhoneNumber',
		title: '*전화번호',
		placeholder: '010-****-****',
	},
	{
		name: 'clientEmail',
		title: '*이메일',
		placeholder: 'codestation@gmail.com',
	},
	{
		name: 'clientCompany',
		title: '*회사',
		placeholder: 'codestation',
	},
];
