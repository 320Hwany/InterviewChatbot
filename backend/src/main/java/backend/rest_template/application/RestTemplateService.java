package backend.rest_template.application;

import backend.chat.dto.ChatReceive;
import backend.chat.dto.ChatSend;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@RequiredArgsConstructor
@Service
public class RestTemplateService {

    private final RestTemplate restTemplate;

    public ChatReceive sendUserMessage(ChatSend chatSend) {
        String url = "http://localhost:8080/ML-server";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<ChatSend> request = new HttpEntity<>(chatSend, headers);
        ResponseEntity<ChatReceive> response = restTemplate.postForEntity(url, request, ChatReceive.class);
        return response.getBody();
    }
}
