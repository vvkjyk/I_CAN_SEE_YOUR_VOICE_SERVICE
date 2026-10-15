import React from 'react';
import { 
  Video, 
  LogIn, 
  Calendar, 
  Plus, 
  ArrowRight, 
  Sparkles, 
  Radio, 
  Clock, 
  ShieldCheck, 
  Users 
} from 'lucide-react';
import { ONGOING_MEETINGS, UPCOMING_MEETINGS } from '../mock/meetingsData';

export default function QuickActionCards({ 
  onOpenCreateModal, 
  onOpenJoinModal, 
  onOpenUpcomingModal,
  onStartDirectCall
}) {
  const ongoingCount = ONGOING_MEETINGS.length;
  const nextMeeting = UPCOMING_MEETINGS[0];

  return (
    <section id="quick-actions" className="quick-actions-section" aria-label="주요 회의 기능">
      <div className="container">
        
        {/* Hero Welcome Banner */}
        <div className="hero-banner">
          <div className="hero-badge-group">
            <span className="pulse-badge">
              <span className="pulse-dot"></span> AI 수어 2-Way 라이브 번역 가동 중
            </span>
            <span className="tag-badge">
              <ShieldCheck size={14} /> WCAG 접근성 인증
            </span>
          </div>

          <h1 className="hero-greeting">
            반갑습니다, <span className="highlight-text">김지유님</span>! <br />
            오늘 어떤 회의를 시작할까요?
          </h1>

          <p className="hero-desc">
            icanseeyourvoice는 수어와 음성을 실시간 양방향 자막으로 번역하여 <br className="desktop-only" />
            모든 참여자가 장벽 없이 자유롭게 소통할 수 있는 인클루시브 화상통화 플랫폼입니다.
          </p>
        </div>

        {/* 3 Main Feature Cards (Req 5) */}
        <div className="action-cards-grid">
          
          {/* Card 1: 새로운 회의 개설 */}
          <div 
            className="action-card card-create"
            onClick={onOpenCreateModal}
            role="button"
            tabIndex={0}
            aria-label="새로운 회의 개설하기"
            onKeyDown={(e) => e.key === 'Enter' && onOpenCreateModal()}
          >
            <div className="card-top-icon">
              <div className="icon-circle icon-circle-blue">
                <Video size={28} />
              </div>
              <span className="card-badge badge-blue">
                <Sparkles size={12} /> AI 수어자막 자동생성
              </span>
            </div>

            <div className="card-body">
              <h2 className="card-title">새로운 회의 개설</h2>
              <p className="card-desc">
                단 한 번의 클릭으로 번역 룸을 만들고 <br />
                참여자를 초청하여 소통을 시작하세요.
              </p>
            </div>

            <div className="card-footer">
              <button className="btn btn-primary card-action-btn">
                <Plus size={18} />
                <span>새 회의 만들기</span>
              </button>
            </div>
          </div>

          {/* Card 2: 현재 진행중인 회의 참여 */}
          <div 
            className="action-card card-join"
            onClick={onOpenJoinModal}
            role="button"
            tabIndex={0}
            aria-label="현재 진행 중인 회의 참여하기"
            onKeyDown={(e) => e.key === 'Enter' && onOpenJoinModal()}
          >
            <div className="card-top-icon">
              <div className="icon-circle icon-circle-navy">
                <LogIn size={28} />
              </div>
              <span className="card-badge badge-pulse">
                <Radio size={12} className="pulse-icon" /> {ongoingCount}개 회의 진행 중
              </span>
            </div>

            <div className="card-body">
              <h2 className="card-title">진행 중인 회의 참여</h2>
              <p className="card-desc">
                초대 코드나 링크를 입력하여 <br />
                진행 중인 실시간 통화에 입장합니다.
              </p>
            </div>

            <div className="card-footer">
              <button className="btn btn-teal card-action-btn">
                <Users size={18} />
                <span>회의 코드 입력 참여</span>
              </button>
            </div>
          </div>

          {/* Card 3: 다가올 회의 확인 */}
          <div 
            className="action-card card-upcoming"
            onClick={onOpenUpcomingModal}
            role="button"
            tabIndex={0}
            aria-label="다가올 회의 일정 확인하기"
            onKeyDown={(e) => e.key === 'Enter' && onOpenUpcomingModal()}
          >
            <div className="card-top-icon">
              <div className="icon-circle icon-circle-teal">
                <Calendar size={28} />
              </div>
              <span className="card-badge badge-teal">
                <Clock size={12} /> {nextMeeting ? nextMeeting.date : '일정 있음'}
              </span>
            </div>

            <div className="card-body">
              <h2 className="card-title">다가올 회의 확인</h2>
              <div className="upcoming-preview-item">
                <div className="preview-title">{nextMeeting.title}</div>
                <div className="preview-meta">
                  <span>⏰ {nextMeeting.time}</span>
                  <span className="preview-interpreter">🤟 {nextMeeting.interpreter}</span>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <button className="btn btn-secondary card-action-btn">
                <span>전체 일정 확인</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
