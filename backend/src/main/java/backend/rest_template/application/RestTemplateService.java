package backend.rest_template.application;

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

    public String sendGptMessage(ChatSend chatSend) {
        String url = "http://localhost:8080/hello";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<ChatSend> request = new HttpEntity<>(chatSend, headers);
        ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);
        return response.getBody();
    }
}
