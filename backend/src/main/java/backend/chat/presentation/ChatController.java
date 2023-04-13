package backend.chat.presentation;

import backend.chat.dto.ChatSend;
import backend.rest_template.application.RestTemplateService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class ChatController {

    private final RestTemplateService restTemplateService;

    @PostMapping("/chat")
    public String chat(@RequestBody ChatSend answer) {
        return restTemplateService.sendGptMessage(answer);
    }

    @PostMapping("/hello")
    public String gptMessage(@RequestBody ChatSend answer) {
        return "gpt message";
    }
}