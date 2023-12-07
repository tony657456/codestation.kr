import { supabase } from '$lib/supabaseCilient';
import { redirect, type Actions } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		console.log(data);
		const name = data.get('name') as string;
		const information = data.get('information') as string;
		try {
			const { error } = await supabase.from('contact').insert({
				budget: 100,
				name: name,
				type: 'test',
				purpose: 'test',
				information: 'test',
			});
			console.log(error);
		} catch (error) {
			console.log(error);
		}
		throw redirect(303, '/');
	},
} satisfies Actions;
