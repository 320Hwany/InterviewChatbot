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

    private String mixMessage;

    @Builder
    public ChatReceive(String gptMessage, String feedbackMessage, String mixMessage) {
        this.gptMessage = gptMessage;
        this.feedbackMessage = feedbackMessage;
        this.mixMessage = mixMessage;
    }
}
