export type TBudgetStep = {
	number: string;
	value: string;
};

export const BudgetContents: TBudgetStep[] = [
	{
		number: 'A',
		value: '3천만원 미만',
	},
	{
		number: 'B',
		value: '3000만원 ~ 5000만원',
	},
	{
		number: 'C',
		value: '5000만원 ~ 7000만원',
	},
	{
		number: 'D',
		value: '7000만원 ~ 1억원',
	},
	{
		number: 'E',
		value: '1억원 ~ 1억 5천만원',
	},
	{
		number: 'F',
		value: '1억 5천만원 ~ 2억원',
	},
	{
		number: 'G',
		value: '2억원 ~ 3억원',
	},
	{
		number: 'H',
		value: '3억원 이상',
	},
];
