import React, { useState } from 'react';
import { 
  X, 
  LogIn, 
  Camera, 
  Mic, 
  CheckCircle, 
  Sparkles, 
  Users, 
  ArrowRight,
  Radio
} from 'lucide-react';
import { ONGOING_MEETINGS } from '../mock/meetingsData';

export default function JoinMeetingModal({ onClose, onJoinMeeting }) {
  const [roomCode, setRoomCode] = useState('');
  const [camEnabled, setCamEnabled] = useState(true);
  const [micEnabled, setMicEnabled] = useState(true);

  const handleJoin = (e) => {
    e.preventDefault();
    const targetCode = roomCode || 'ICSYV-8921';
    const ongoingMatch = ONGOING_MEETINGS.find(m => m.code === targetCode || m.id === targetCode);
    
    onJoinMeeting({
      title: ongoingMatch ? ongoingMatch.title : `회의 (${targetCode})`,
      code: targetCode,
      interpreterName: ongoingMatch ? ongoingMatch.interpreterName : 'AI 수어 번역 엔진 2.0'
    });
  };

  const handleQuickJoinLive = (meeting) => {
    onJoinMeeting({
      title: meeting.title,
      code: meeting.code,
      interpreterName: meeting.interpreterName
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="join-modal-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-title-icon icon-navy">
              <LogIn size={22} />
            </div>
            <div>
              <h2 id="join-modal-title" className="modal-title">진행 중인 회의 참여</h2>
              <p className="modal-subtitle">초대 코드를 입력하거나 진행 중인 라이브 회의에 입장합니다.</p>
            </div>
          </div>
          <button className="btn-icon close-btn" onClick={onClose} aria-label="모달 닫기">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          
          {/* Quick Select Live Meetings */}
          <div className="live-selection-section">
            <div className="section-sub-title">
              <Radio size={16} className="pulse-icon color-teal" />
              <span>현재 활성화된 수어 번역 진행 중 회의</span>
            </div>

            <div className="live-meeting-cards">
              {ONGOING_MEETINGS.map((m) => (
                <div key={m.id} className="live-meeting-item" onClick={() => handleQuickJoinLive(m)}>
                  <div className="live-item-header">
                    <span className="live-badge">LIVE</span>
                    <span className="live-code">{m.code}</span>
                  </div>
                  <div className="live-item-title">{m.title}</div>
                  <div className="live-item-meta">
                    <span>👥 {m.participantsCount}명 참여 중</span>
                    <span>🤟 {m.interpreterName}</span>
                  </div>
                  <button type="button" className="btn btn-teal btn-sm live-join-btn">
                    즉시 입장
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="auth-divider-text">
            <span>또는 코드 직접 입력</span>
          </div>

          {/* Code Input Form */}
          <form onSubmit={handleJoin} className="join-form">
            <div className="input-group">
              <label className="input-label" htmlFor="join-code-input">
                회의 코드 / 초대 URL 입력 <span className="required-star">*</span>
              </label>
              <input
                id="join-code-input"
                type="text"
                className="input-field"
                placeholder="예: ICSYV-8921 또는 초대 링크"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
              />
            </div>

            {/* Media Device Readiness Check */}
            <div className="media-preview-box">
              <div className="preview-heading">입장 전 미디어 점검</div>
              <div className="media-toggle-row">
                <button
                  type="button"
                  className={`media-toggle-btn ${camEnabled ? 'active' : ''}`}
                  onClick={() => setCamEnabled(!camEnabled)}
                >
                  <Camera size={18} />
                  <span>카메라 (수어 인식용) {camEnabled ? '켜짐' : '꺼짐'}</span>
                </button>
                <button
                  type="button"
                  className={`media-toggle-btn ${micEnabled ? 'active' : ''}`}
                  onClick={() => setMicEnabled(!micEnabled)}
                >
                  <Mic size={18} />
                  <span>마이크 (음성 수신용) {micEnabled ? '켜짐' : '꺼짐'}</span>
                </button>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="modal-actions">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                취소
              </button>
              <button type="submit" className="btn btn-teal btn-lg">
                <span>회의 입장하기</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </form>

        </div>

      </div>
    </div>
  );
}
