package backend.chat.dto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ChatSend {

    private String userMessage;

    @Builder
    public ChatSend(String userMessage) {
        this.userMessage = userMessage;
    }
}