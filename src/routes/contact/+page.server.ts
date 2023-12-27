import { SECRET_SUPABASE_API_KEY, SECRET_SUPABASE_URL } from '$env/static/private';
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
		const additionalInformation = data.get('additionalInformation');
		const file = data.get('file');
		let fileUrl = '';
		// upload file
		if (file) {
			const today = new Date();
			const extension = (file as File).name.split('.').pop();
			const { data: fileData, error: fileError } = await supabase.storage
				.from('codestation-bucket')
				.upload(`${today.getTime()}/${clientCompany}.${extension}`, file);
			if (fileError) {
				console.log('file-error', fileError);
				return fail(500, { message: 'file upload error' });
			}
			fileUrl =
				('https://mqtswjgwbqobgmwcngww.supabase.co/storage/v1/object/public/codestation-bucket' +
					fileData?.path) as string;
		}

		try {
			await supabase.from('contact').insert({
				name,
				client_name: clientName,
				client_phone_number: clientPhoneNumber,
				client_email: clientEmail,
				client_company: clientCompany,
				type,
				purpose,
				budget,
				additional_information: additionalInformation,
				file_url: fileUrl,
			});
		} catch (error) {
			return fail(500, { message: 'database error' });
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
			additionalInformation as string | null,
			fileUrl as string,
		);
		throw redirect(303, '/contact/success');
	},
} satisfies Actions;
