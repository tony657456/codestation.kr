export type TPurposeStep = {
	number: string;
	value: string;
};

export const PurposeContents: TPurposeStep[] = [
	{
		number: 'A',
		value: '시장 검증을 위한 테스트 (MVP)',
	},
	{
		number: 'B',
		value: '시장 검증이 완료된 제품 출시 (Product)',
	},
	{
		number: 'C',
		value: '이미 존재하는 제품 또는 MVP 버전 고도화',
	},
	{
		number: 'D',
		value: '기타',
	},
];
