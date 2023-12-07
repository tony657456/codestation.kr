export type TDevelopmentType = {
	name: string;
	number: string;
	value: string;
};

export const DevelopmentTypes: TDevelopmentType[] = [
	{
		name: 'landing',
		number: 'A',
		value: '랜딩페이지',
	},
	{
		name: 'web',
		number: 'B',
		value: 'Web 서비스',
	},
	{
		name: 'app',
		number: 'C',
		value: 'APP 서비스',
	},
	{
		name: 'admin',
		number: 'D',
		value: '관리자 커스텀(대시보드)',
	},
];
