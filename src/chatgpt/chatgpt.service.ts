import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';

@Injectable()
export class ChatGPTService {
  private readonly endpoint: string = 'https://api.openai.com/v1';
  private readonly apiKey: string =
    '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';

  public async sendMessage(message: string): Promise<string> {
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: `${this.endpoint}/engines/davinci-codex/completions`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
      data: {
        prompt: message,
        max_tokens: 1024,
        temperature: 0.5,
        top_p: 1,
        n: 1,
        stream: false,
        stop: '\n',
      },
    };

    const response = await axios.request(requestConfig);
    return response.data.choices[0].text;
  }
}
