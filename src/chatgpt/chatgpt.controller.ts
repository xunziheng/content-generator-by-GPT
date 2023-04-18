import { Controller, Post, Body } from '@nestjs/common';
import { ChatGPTService } from './chatgpt.service';

@Controller()
export class ChatGPTController {
  constructor(private readonly chatGPTService: ChatGPTService) {}

  @Post('/chat')
  async sendMessage(
    @Body() body: { message: string },
  ): Promise<{ response: string }> {
    const response = await this.chatGPTService.sendMessage(body.message);
    return { response };
  }
}
