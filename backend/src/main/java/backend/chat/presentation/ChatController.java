package backend.chat.presentation;

import backend.chat.application.ChatService;
import backend.chat.dto.*;
import backend.rest_template.application.RestTemplateService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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
        return chatReceive;
    }

    @GetMapping("/feedback")
    public List<ChatFeedback> feedback() {
        return chatService.findAllFeedback();
    }

    @PostMapping("/ML-server")
    public ChatReceive gptMessage(@RequestBody ChatSend chatSend) {
        return ChatReceive.builder()
                .gptQuestion("next question")
                .gptMessage("gpt message")
                .feedbackMessage("feedback message")
                .mixMessage("mix message")
                .build();
    }

    @PostMapping("/setting")
    public ChatFirstMessage firstMessage(@RequestPart("chatSetting") ChatSetting chatSetting,
                                         @RequestParam("image") MultipartFile image) {
        return new ChatFirstMessage("first message");
    }
}