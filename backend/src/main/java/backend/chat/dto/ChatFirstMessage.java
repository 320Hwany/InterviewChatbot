package backend.chat.dto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ChatFirstMessage {

    private String firstMessage;

    @Builder
    public ChatFirstMessage(String firstMessage) {
        this.firstMessage = firstMessage;
    }
}
