package backend.chat.dto;

import backend.chat.domain.Chat;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ChatRecord {

    private String userMessage;

    private String gptMessage;

    private String feedbackMessage;

    @Builder
    public ChatRecord(String userMessage, String gptMessage, String feedbackMessage) {
        this.userMessage = userMessage;
        this.gptMessage = gptMessage;
        this.feedbackMessage = feedbackMessage;
    }

    public Chat toEntity() {
        return Chat.builder()
                .userMessage(userMessage)
                .gptMessage(gptMessage)
                .feedbackMessage(feedbackMessage)
                .build();
    }
}
