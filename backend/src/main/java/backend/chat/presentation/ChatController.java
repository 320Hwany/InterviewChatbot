package backend.chat.presentation;

import backend.chat.application.ChatService;
import backend.chat.dto.ChatFeedback;
import backend.chat.dto.ChatReceive;
import backend.chat.dto.ChatSend;
import backend.rest_template.application.RestTemplateService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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

    @GetMapping("/feedback")
    public List<ChatFeedback> feedback() {
        return chatService.findAllFeedback();
    }

    @PostMapping("/ML-server")
    public ChatReceive gptMessage(@RequestBody ChatSend chatSend) {
        return ChatReceive.builder()
                .gptMessage("gpt message")
                .feedbackMessage("feedback message")
                .build();
    }
}