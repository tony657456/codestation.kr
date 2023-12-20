type TClean = {
	index: string;
	imageUrl: string;
	title: string;
	description: string;
};

export const CleanCodeBoard: TClean[] = [
	{
		index: '1',
		imageUrl: '/images/sveltekit-icon.webp',
		title: 'SvelteKit',
		description: '혁신적인 풀스텍 웹 개발\n프레임워크\n압도적인 성능과 직관적 구조',
	},
	{
		index: '2',
		imageUrl: '/images/nextjs-icon.webp',
		title: 'NextJS',
		description: 'React 기반\nSSR 프레임워크',
	},
	{
		index: '3',
		imageUrl: '/images/nest-icon.webp',
		title: 'NestJS',
		description: '뛰어난 확장성의\n백엔드 프레임워크',
	},
	{
		index: '4',
		imageUrl: '/images/supabase-icon.webp',
		title: 'Supabase',
		description: '획기적인\n클라우드 데이터베이스\n파일 스토리지 솔루션',
	},
	{
		index: '5',
		imageUrl: '/images/pytorch-icon.webp',
		title: 'PyTorch',
		description: 'AI, ML, DL을 위한\n파이썬 기반 프레임워크',
	},
];
