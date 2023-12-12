export type TFlowStep = {
	beforeName: string;
	nextName: string;
};

export const FlowStep: TFlowStep[] = [
	{
		beforeName: '성급한 계약',
		nextName: '신중한 계약',
	},
	{
		beforeName: '부족한 기획',
		nextName: '꼼꼼한 기획 회의',
	},
	{
		beforeName: '안티 패턴 디자인',
		nextName: '깔끔한 디자인 작업',
	},
	{
		beforeName: '버그 투성이',
		nextName: '실력있는 개발',
	},
	{
		beforeName: '추가 개발',
		nextName: '완벽한 Q/A',
	},
	{
		beforeName: '기능 누락',
		nextName: '완벽한 Q/A',
	},
];
