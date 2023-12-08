type TPrice = {
	index: string;
	title: string;
	subtitle: string;
	descriptions: string[];
};

export const PriceBoard: TPrice[] = [
	{
		index: '1',
		title: '웹 MVP 제작',
		subtitle: '700만원 ~',
		descriptions: ['기획, 디자인, 개발 및 출시 모두 포함', '20 페이지 내외'],
	},
	{
		index: '2',
		title: '앱 MVP 제작',
		subtitle: '2000만원 ~',
		descriptions: ['기획, 디자인, 개발 및 출시 모두 포함', '20 페이지 내외'],
	},
];
