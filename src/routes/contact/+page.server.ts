import { supabase } from '$lib/supabaseCilient';
import { redirect, type Actions } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const projectName = data.get('projectName') as string;
		try {
			const { error } = await supabase.from('contact').insert({
				project_name: projectName,
			});
			console.log(error);
		} catch (error) {
			console.log(error);
		}
		throw redirect(302, '/');
	},
} satisfies Actions;
