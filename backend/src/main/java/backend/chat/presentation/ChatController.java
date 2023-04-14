package backend.chat.presentation;

import backend.chat.application.ChatService;
import backend.chat.dto.ChatReceive;
import backend.chat.dto.ChatSend;
import backend.rest_template.application.RestTemplateService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class ChatController {

    private final ChatService chatService;
    private final RestTemplateService restTemplateService;

    @PostMapping("/chat")
    public ChatReceive chat(@RequestBody ChatSend chatSend) {
        ChatReceive chatReceive = restTemplateService.sendUserMessage(chatSend);
        chatService.save(chatSend, chatReceive);
        return restTemplateService.sendUserMessage(chatSend);
    }

    @PostMapping("/ML-server")
    public ChatReceive gptMessage(@RequestBody ChatSend chatSend) {
        return ChatReceive.builder()
                .gptMessage("gpt message")
                .feedbackMessage("feedback message")
                .build();
    }
}