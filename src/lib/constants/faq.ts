type TFaq = {
	type: 'question' | 'answer';
	content: string;
};

export const Faq: TFaq[] = [
	{
		type: 'question',
		content: '저는 개발을 잘 모르는데.. 온라인 사업을 할 수 있을까요?',
	},
	{
		type: 'answer',
		content:
			'개발을 모르셔도 괜찮습니다. 코드스테이션에서는 아이디어만으로도 서비스를 완성해드립니다.',
	},
	{
		type: 'question',
		content: '외주 프로젝트 완료까지 얼마나 걸리나요?',
	},
	{
		type: 'answer',
		content:
			'MVP 제작의 경우 2 ~ 3주 정도 소요됩니다. 기획, 디자인, 개발, QA 모든 단게를 포함한 기간입니다.',
	},
	{
		type: 'question',
		content: '제가 외주 프로젝트에 참여할 수 있을까요?',
	},
	{
		type: 'answer',
		content:
			'네, 당연히 가능합니다. 저희는 고객의 요구에 최대한 부합하는 외주 프로젝트를 진행하기 위해 고객의 참여를 환영합니다. 프로젝트의 기획 단계부터 완료까지 고객과 긴밀히 협력하여 의견을 공유하고 피드백을 받습니다.',
	},
	{
		type: 'question',
		content: '외주 비용은 어떻게 책정되나요?',
	},
	{
		type: 'answer',
		content:
			'외주 비용은 프로젝트의 규모, 복잡성, 요구사항 등 여러 요소에 따라 달라집니다. 저희는 프로젝트 요구사항을 정확히 분석하고 작업량을 평가한 후, 공정하고 경제적인 비용 책정을 진행합니다.',
	},
];
