import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  UserCheck, 
  Sparkles, 
  Bell, 
  Plus, 
  Check, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { UPCOMING_MEETINGS } from '../mock/meetingsData';

export default function UpcomingMeetingsModal({ onClose, onJoinMeeting }) {
  const [scheduledList, setScheduledList] = useState(UPCOMING_MEETINGS);
  const [reminderSet, setReminderSet] = useState({});

  const toggleReminder = (id) => {
    setReminderSet(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="upcoming-modal-title">
      <div className="modal-content modal-content-wide" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-title-icon icon-teal">
              <Calendar size={22} />
            </div>
            <div>
              <h2 id="upcoming-modal-title" className="modal-title">다가올 회의 확인 및 일정 관리</h2>
              <p className="modal-subtitle">예정된 수어 번역 회의와 전문 통역사 배정 현황을 확인합니다.</p>
            </div>
          </div>
          <button className="btn-icon close-btn" onClick={onClose} aria-label="모달 닫기">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          
          <div className="upcoming-list-header">
            <div className="upcoming-count">총 {scheduledList.length}개의 예정된 회의</div>
            <button className="btn btn-outline-primary btn-sm" onClick={() => alert('새로운 회의 일정 예약 기능이 시작되었습니다.')}>
              <Plus size={16} />
              <span>새 회의 일정 예약</span>
            </button>
          </div>

          {/* Scheduled Meetings List */}
          <div className="upcoming-cards-list">
            {scheduledList.map((m) => (
              <div key={m.id} className="upcoming-card-item">
                <div className="upcoming-card-left">
                  <div className="upcoming-date-box">
                    <span className="date-main">{m.date}</span>
                    <span className="time-sub">{m.time}</span>
                  </div>
                  <div className="upcoming-info">
                    <h3 className="upcoming-title">{m.title}</h3>
                    <div className="upcoming-meta-tags">
                      <span className="tag-badge">
                        <UserCheck size={12} /> 호스트: {m.host}
                      </span>
                      <span className="tag-badge-teal">
                        🤟 {m.interpreter}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="upcoming-card-actions">
                  <button 
                    className={`btn-icon ${reminderSet[m.id] ? 'btn-active-bell' : ''}`}
                    onClick={() => toggleReminder(m.id)}
                    title="시작 15분 전 알림 받기"
                    aria-label={`${m.title} 회의 알림 설정`}
                  >
                    <Bell size={18} color={reminderSet[m.id] ? '#F97316' : undefined} />
                  </button>
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => onJoinMeeting({ title: m.title, code: m.code })}
                  >
                    <span>미리 입장하기</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Notice Box */}
          <div className="interpreter-notice-box">
            <ShieldCheck size={20} className="notice-icon" />
            <div>
              <strong>수어 통역사 배정 및 AI 지원 안내</strong>
              <p>모든 예정된 회의에는 AI 2-Way 수어 자막 알고리즘이 기본 적용되며, 별도 요청 시 국가공인 수어통역사가 실시간으로 동시 지원됩니다.</p>
            </div>
          </div>

        </div>

        <div className="modal-actions">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            닫기
          </button>
        </div>

      </div>
    </div>
  );
}
