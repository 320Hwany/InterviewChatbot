package backend.chat.dto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ChatSend {

    private String gptMessage;

    @Builder
    public ChatSend(String gptMessage) {
        this.gptMessage = gptMessage;
    }
}