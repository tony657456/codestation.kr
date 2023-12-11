import { SlackMessageModule } from '$lib/modules/slack-message';
import { supabase } from '$lib/supabaseCilient';
import { redirect, type Actions, fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		if (!name) return fail(400, { message: 'name is required' });
		const clientName = data.get('clientName');
		if (!clientName) return fail(400, { message: 'clientName is required' });
		const clientPhoneNumber = data.get('clientPhoneNumber');
		if (!clientPhoneNumber) return fail(400, { message: 'clientPhoneNumber is required' });
		const clientEmail = data.get('clientEmail');
		if (!clientEmail) return fail(400, { message: 'clientEmail is required' });
		const clientCompany = data.get('clientCompany');
		if (!clientCompany) return fail(400, { message: 'clientCompany is required' });
		const type = data.get('type');
		if (!type) return fail(400, { message: 'type is required' });
		const purpose = data.get('purpose');
		if (!purpose) return fail(400, { message: 'purpose is required' });
		const budget = data.get('budget');
		if (!budget) return fail(400, { message: 'budget is required' });

		try {
			await supabase.from('contact').insert({
				name,
				client_name: clientName,
				client_phone_number: clientPhoneNumber,
				client_email: clientEmail,
				client_company: clientCompany,
				type,
				purpose,
			});
		} catch (error) {
			console.log(error);
		}

		const slackMessageModule = new SlackMessageModule();
		await slackMessageModule.sendNewContactMessage(
			name as string,
			clientName as string,
			clientPhoneNumber as string,
			clientEmail as string,
			clientCompany as string,
			type as string,
			purpose as string,
			budget as string,
		);
		throw redirect(303, '/contact/success');
	},
} satisfies Actions;
