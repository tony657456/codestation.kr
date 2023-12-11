export type TBudgetStep = {
	number: string;
	value: string;
};

export const BudgetContents: TBudgetStep[] = [
	{
		number: 'A',
		value: '700만원 미만',
	},
	{
		number: 'B',
		value: '700만원 ~ 1천만원',
	},
	{
		number: 'C',
		value: '1천만원 ~ 2000만원',
	},
	{
		number: 'D',
		value: '2천만원 ~ 3천만원',
	},
	{
		number: 'E',
		value: '3천만원 ~ 5천만원',
	},
	{
		number: 'F',
		value: '5천만원 ~ 1억원',
	},
	{
		number: 'G',
		value: '1억원 ~ 3억원',
	},
	{
		number: 'H',
		value: '3억원 이상',
	},
];
