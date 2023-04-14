package backend.chat.application;

import backend.chat.domain.Chat;
import backend.chat.dto.ChatReceive;
import backend.chat.dto.ChatRecord;
import backend.chat.dto.ChatSend;
import backend.chat.repository.ChatRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class ChatService {

    private final ChatRepository chatRepository;

    @Transactional
    public void save(ChatSend chatSend, ChatReceive chatReceive) {
        ChatRecord chatRecord = ChatRecord.builder()
                .userMessage(chatSend.getUserMessage())
                .gptMessage(chatReceive.getGptMessage())
                .feedbackMessage(chatReceive.getFeedbackMessage())
                .build();

        chatRepository.save(chatRecord.toEntity());
    }
}
