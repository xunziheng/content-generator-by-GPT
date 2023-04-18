import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class ChatGPTService {
  private openai: OpenAIApi;

  constructor() {
    const configuration = new Configuration({
      apiKey: process.env.CHATGPT_API_KEY,
    });
    this.openai = new OpenAIApi(configuration);
  }

  public async sendMessage(message: string): Promise<any> {
    console.log('message', message);
    const response = await this.openai.createCompletion({
      model: 'text-davinci-003',
      prompt: message,
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ['\n'],
    });
    console.log('res', response);
    return response;
  }
}
