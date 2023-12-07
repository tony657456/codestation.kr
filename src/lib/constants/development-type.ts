type TDevelopmentType = {
	name: string;
	number: string;
	subtitle: string;
};

export const DevelopmentType: TDevelopmentType[] = [
	{
		name: 'landing',
		number: 'A',
		subtitle: '랜딩페이지',
	},
	{
		name: 'web',
		number: 'B',
		subtitle: 'Web 서비스',
	},
	{
		name: 'app',
		number: 'C',
		subtitle: 'APP 서비스',
	},
	{
		name: 'admin',
		number: 'D',
		subtitle: '관리자 커스텀(대시보드)',
	},
];
