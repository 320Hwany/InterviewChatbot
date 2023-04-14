package backend.chat.dto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ChatReceive {

    private String gptMessage;

    private String feedbackMessage;

    @Builder
    public ChatReceive(String gptMessage, String feedbackMessage) {
        this.gptMessage = gptMessage;
        this.feedbackMessage = feedbackMessage;
    }
}
