type TBoard = {
	imageUrl: string;
	title: string;
	description: string;
};

export const Board: TBoard[] = [
	{
		imageUrl: '/images/flow-icon.png',
		title: '깔끔한 플로우',
		description:
			'다른 곳에는 없는 코드스테이션만의 깔끔한 플로우를 경험하실 수 있습니다. 더 이상 비효율에 시간을 낭비하지 마세요.',
	},
	{
		imageUrl: '/images/design-icon.png',
		title: '고퀄리티 디자인',
		description:
			'실력있는 UI/UX 디자이너와 함께 진행하는 만큼, 검증된 디자인으로 최고의 프로덕트를 만들어 드립니다.',
	},
	{
		imageUrl: '/images/clean-code-icon.png',
		title: '클린 코드',
		description:
			'유지보수 및 확장성을 고려한 클린 코드로 개발합니다. 10년차 시니어 개발자가 프로덕트의 코드 퀄리티를 보장합니다.',
	},
	{
		imageUrl: '/images/price-icon.png',
		title: '합리적인 가격',
		description: '효율적인 플로우로 합리적인 가격과 짧은 개발 기간으로 프로젝트를 진행합니다.',
	},
	{
		imageUrl: '/images/stack-icon.png',
		title: '폭넓은 스택',
		description:
			'웹, 앱, 서버, 크롤러, AI 까지 모두 가능한 코드스테이션 개발팀과 함께 당신의 아이디어를 실현하세요.',
	},
	{
		imageUrl: '/images/mvp-icon.png',
		title: '오직, 가설 검증',
		description: 'MVP를 통해 가설을 검증하고, 피드백을 통해 프로덕트를 발전시킵니다.',
	},
];
