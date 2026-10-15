import React, { useState } from 'react';
import { 
  X, 
  Video, 
  Sparkles, 
  Volume2, 
  Copy, 
  Check, 
  ShieldAlert, 
  Users,
  Settings,
  ArrowRight
} from 'lucide-react';

export default function CreateMeetingModal({ onClose, onStartMeeting }) {
  const [meetingTitle, setMeetingTitle] = useState('김지유님의 수어 번역 화상 회의');
  const [enableAI, setEnableAI] = useState(true);
  const [enableAudioSynthesis, setEnableAudioSynthesis] = useState(true);
  const [requestInterpreter, setRequestInterpreter] = useState(false);
  const [copied, setCopied] = useState(false);

  const mockRoomCode = 'ICSYV-9821-KIM';

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(mockRoomCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCreateAndStart = (e) => {
    e.preventDefault();
    onStartMeeting({
      title: meetingTitle,
      code: mockRoomCode,
      enableAI,
      enableAudioSynthesis,
      requestInterpreter
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="create-modal-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-title-icon icon-blue">
              <Video size={22} />
            </div>
            <div>
              <h2 id="create-modal-title" className="modal-title">새로운 회의 개설</h2>
              <p className="modal-subtitle">실시간 수어 번역이 포함된 화상 통화방을 생성합니다.</p>
            </div>
          </div>
          <button className="btn-icon close-btn" onClick={onClose} aria-label="모달 닫기">
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleCreateAndStart} className="modal-body">
          
          {/* Meeting Title Input */}
          <div className="input-group">
            <label className="input-label" htmlFor="meeting-title-input">
              회의 제목 <span className="required-star">*</span>
            </label>
            <input
              id="meeting-title-input"
              type="text"
              className="input-field"
              value={meetingTitle}
              onChange={(e) => setMeetingTitle(e.target.value)}
              required
            />
          </div>

          {/* Room Code Display & Copy */}
          <div className="room-code-box">
            <div className="code-label">생성된 회의 초대 코드</div>
            <div className="code-value-row">
              <span className="code-value">{mockRoomCode}</span>
              <button 
                type="button" 
                className="btn btn-secondary btn-sm copy-btn"
                onClick={handleCopyCode}
                aria-label="초대 코드 복사하기"
              >
                {copied ? <Check size={16} color="#10B981" /> : <Copy size={16} />}
                <span>{copied ? '복사됨!' : '초대 코드 복사'}</span>
              </button>
            </div>
          </div>

          {/* Accessibility & AI Features Selection */}
          <div className="options-section">
            <div className="options-section-title">
              <Settings size={16} />
              <span>접근성 및 번역 옵션 설정</span>
            </div>

            {/* AI 2-Way Sign Language Option */}
            <label className="checkbox-option-card">
              <input
                type="checkbox"
                checked={enableAI}
                onChange={(e) => setEnableAI(e.target.checked)}
                className="checkbox-input"
              />
              <div className="option-text">
                <div className="option-title">
                  <Sparkles size={16} className="sparkle-blue" />
                  <span>AI 수어 ↔ 음성 2-Way 실시간 자막</span>
                </div>
                <div className="option-desc">
                  카메라로 수어를 인식하여 실시간 텍스트 및 음성으로 자동 번역합니다.
                </div>
              </div>
            </label>

            {/* Audio Synthesis TTS Option */}
            <label className="checkbox-option-card">
              <input
                type="checkbox"
                checked={enableAudioSynthesis}
                onChange={(e) => setEnableAudioSynthesis(e.target.checked)}
                className="checkbox-input"
              />
              <div className="option-text">
                <div className="option-title">
                  <Volume2 size={16} className="sparkle-teal" />
                  <span>음성 합성 (TTS) 음성 출력 지원</span>
                </div>
                <div className="option-desc">
                  번역된 수어 텍스트를 비장애인 참여자에게 자연스러운 음성으로 읽어줍니다.
                </div>
              </div>
            </label>

            {/* Request Human Interpreter Option */}
            <label className="checkbox-option-card">
              <input
                type="checkbox"
                checked={requestInterpreter}
                onChange={(e) => setRequestInterpreter(e.target.checked)}
                className="checkbox-input"
              />
              <div className="option-text">
                <div className="option-title">
                  <Users size={16} className="sparkle-coral" />
                  <span>전문 수어 통역사 우선 요청</span>
                </div>
                <div className="option-desc">
                  중요 법률/의료/비즈니스 회의 시 대기 중인 수어 통역사를 수동 연결합니다.
                </div>
              </div>
            </label>
          </div>

          {/* Submit Action */}
          <div className="modal-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              취소
            </button>
            <button type="submit" className="btn btn-primary btn-lg">
              <span>화상 회의 바로 시작하기</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
