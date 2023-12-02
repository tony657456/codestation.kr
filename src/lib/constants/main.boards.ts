type TBoard = {
	imageUrl: string;
	title: string;
	description: string;
	a: string;
};

export const Board: TBoard[] = [
	{
		a: '/',
		imageUrl: '/images/flow_icon.png',
		title: '깔끔한 플로우',
		description:
			'다른 곳에는 없는 코드스테이션만의 깔끔한 플로우를 경험하실 수 있습니다. Integer ante non nunc, eget est justo vel ',
	},
	{
		a: '/',
		imageUrl: '/images/design_icon.png',
		title: '고퀄리티 디자인',
		description:
			'6년차 UIUX 디자이너와 함께 진행하는 만큼, 당신의 프로젝트가 더욱 높은 완성도를 가지고 가실 수 있습니다.',
	},
	{
		a: '/clean',
		imageUrl: '/images/clean_code_icon.png',
		title: '클린코드',
		description: 'Integer ante non nunc, eget est justo vel semper nunc. Lacus',
	},
	{
		a: '/',
		imageUrl: '/images/price_icon.png',
		title: '합리적인 가격',
		description: '전문가와 함께 하는 만큼, 속도는 빠르고 가격은 합리적으로 진행합니다.',
	},
	{
		a: '/',
		imageUrl: '/images/stack_icon.png',
		title: '폭넓은 스택',
		description:
			'웹, 앱, 서버, 크롤러, AI 까지 다 가능한 10년차 시니어 개발자와 함께 당신의 아이디어를 실현하세요.',
	},
	{
		a: '/',
		imageUrl: '/images/mvp_icon.png',
		title: '가설 검증',
		description: '합리적인 가격에 MVP를 만들어서 가설검증 가능',
	},
];
