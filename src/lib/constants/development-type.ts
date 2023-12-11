export type TDevelopmentType = {
	name: string;
	number: string;
	value: string;
};

export const DevelopmentTypes: TDevelopmentType[] = [
	{
		name: 'web',
		number: 'A',
		value: 'WEB',
	},
	{
		name: 'app',
		number: 'B',
		value: '크로스플랫폼 APP',
	},
	{
		name: 'admin',
		number: 'C',
		value: '관리자 페이지(대시보드)',
	},
];
