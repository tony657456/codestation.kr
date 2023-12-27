import axios from 'axios';

export class SlackMessageModule {
	// curl -X POST -H 'Content-type: application/json' --data '{"text":"Hello, World!"}' https://hooks.slack.com/services/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
	sendSlackMessage(message: string) {
		return axios.post(
			'https://hooks.slack.com/services/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',
			{
				text: message,
			},
		);
	}

	sendNewContactMessage(
		name: string,
		clientName: string,
		clientPhoneNumber: string,
		clientEmail: string,
		clientCompany: string,
		type: string,
		purpose: string,
		budget: string,
		additional_information: string | null,
		file_url: string,
	) {
		const message = `
      *새로운 문의가 들어왔습니다!*
      *이름:* ${name}
      *고객 이름:* ${clientName}
      *고객 전화번호:* ${clientPhoneNumber}
      *고객 이메일:* ${clientEmail}
      *고객 회사:* ${clientCompany}
      *개발 유형:* ${type}
      *개발 목적:* ${purpose}
      *예산:* ${budget}
			*추가 정보:* ${additional_information}
			*파일:* ${file_url}
    `;
		return this.sendSlackMessage(message);
	}
}
