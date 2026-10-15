import React, { useState } from 'react';
import { 
  Video, 
  Bell, 
  User, 
  Eye, 
  Type, 
  Sliders, 
  LogOut, 
  CheckCircle, 
  HelpCircle,
  Sparkles,
  Volume2
} from 'lucide-react';
import { MOCK_NOTIFICATIONS } from '../mock/meetingsData';

export default function Navbar({ 
  user, 
  onLogout, 
  contrastMode, 
  toggleContrast, 
  textSize, 
  cycleTextSize,
  onOpenProfileModal
}) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  return (
    <header className="navbar-header" role="banner">
      <div className="navbar-container">
        
        {/* Left: Platform Logo & Title */}
        <div className="navbar-brand">
          <a href="#hero" className="logo-link" aria-label="icanseeyourvoice 홈으로 이동">
            <div className="logo-icon-badge">
              <Video className="logo-icon" aria-hidden="true" />
              <span className="logo-wave-badge" aria-hidden="true">
                <Sparkles size={12} />
              </span>
            </div>
            <div className="logo-text-group">
              <span className="logo-title">icanseeyourvoice</span>
              <span className="logo-sub">수어 번역 화상통화 플랫폼</span>
            </div>
          </a>
        </div>

        {/* Middle Navigation Links (Desktop) */}
        <nav className="navbar-nav" role="navigation" aria-label="메인 메뉴">
          <a href="#hero" className="nav-link active">홈</a>
          <a href="#quick-actions" className="nav-link">회의 개설/참여</a>
          <a href="#service-intro" className="nav-link">수어 AI 기술</a>
          <a href="#process-flow" className="nav-link">이용 안내</a>
          <a href="#accessibility-values" className="nav-link">접근성 가치</a>
        </nav>

        {/* Right: Accessibility Toolbar + Notifications + User Profile */}
        <div className="navbar-controls">
          
          {/* Accessibility Quick Controls */}
          <div className="accessibility-toolbar" aria-label="접근성 편의 도구">
            {/* Font Size Toggle Button */}
            <button 
              className={`tool-btn ${textSize !== 'normal' ? 'active' : ''}`}
              onClick={cycleTextSize}
              title="글자 크기 변경 (보통 -> 크게 -> 아주크게)"
              aria-label={`글자 크기 변경 현재: ${textSize === 'normal' ? '보통' : textSize === 'large' ? '크게' : '아주 크게'}`}
            >
              <Type size={18} aria-hidden="true" />
              <span className="tool-label">
                {textSize === 'normal' ? 'A' : textSize === 'large' ? 'A+' : 'A++'}
              </span>
            </button>

            {/* High Contrast Mode Toggle */}
            <button 
              className={`tool-btn ${contrastMode ? 'active' : ''}`}
              onClick={toggleContrast}
              title="고대비 시각 보조 모드 토글"
              aria-label={`고대비 모드 ${contrastMode ? '켜짐' : '꺼짐'}`}
            >
              <Eye size={18} aria-hidden="true" />
              <span className="tool-label">고대비</span>
            </button>
          </div>

          {/* Divider */}
          <div className="control-divider" aria-hidden="true"></div>

          {/* Notifications Bell */}
          <div className="notifications-wrapper">
            <button 
              className="btn-icon notif-btn" 
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfileMenu(false);
              }}
              aria-label={`알람 목록 ${unreadCount > 0 ? `${unreadCount}개의 읽지 않은 알림이 있습니다` : ''}`}
              aria-expanded={showNotifications}
            >
              <Bell size={20} aria-hidden="true" />
              {unreadCount > 0 && (
                <span className="notif-badge">{unreadCount}</span>
              )}
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="dropdown-popover notif-popover" role="dialog" aria-label="알림 목록">
                <div className="popover-header">
                  <h3>알림함</h3>
                  {unreadCount > 0 && (
                    <button className="btn-text-sm" onClick={markAllAsRead}>
                      모두 읽음 처리
                    </button>
                  )}
                </div>
                <div className="popover-body">
                  {notifications.map((n) => (
                    <div key={n.id} className={`notif-item ${!n.read ? 'unread' : ''}`}>
                      <div className="notif-icon-circle">
                        <CheckCircle size={16} />
                      </div>
                      <div className="notif-content">
                        <div className="notif-title">{n.title}</div>
                        <div className="notif-desc">{n.message}</div>
                        <div className="notif-time">{n.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* User Profile Badge (Req 9, 10: "김지유님") */}
          <div className="profile-wrapper">
            <button 
              className="profile-btn"
              onClick={() => {
                setShowProfileMenu(!showProfileMenu);
                setShowNotifications(false);
              }}
              aria-label={`프로필 메뉴: ${user?.name || '김지유님'}`}
              aria-expanded={showProfileMenu}
            >
              <div className="profile-avatar" aria-hidden="true">
                <User size={18} color="#FFFFFF" />
              </div>
              <span className="profile-name">{user?.name || '김지유님'}</span>
            </button>

            {/* Profile Dropdown */}
            {showProfileMenu && (
              <div className="dropdown-popover profile-popover" role="menu">
                <div className="profile-popover-user">
                  <div className="user-name">{user?.name || '김지유님'}</div>
                  <div className="user-email">{user?.email || 'jiyu.kim@icanseeyourvoice.kr'}</div>
                  <div className="user-status-badge">
                    <span className="pulse-dot"></span> 수어 AI 자막 지원 켜짐
                  </div>
                </div>
                <div className="popover-divider"></div>
                <button 
                  className="popover-menu-item"
                  onClick={() => {
                    setShowProfileMenu(false);
                    onOpenProfileModal && onOpenProfileModal();
                  }}
                >
                  <Sliders size={16} /> 접근성 및 마이페이지
                </button>
                <button className="popover-menu-item" onClick={onLogout}>
                  <LogOut size={16} /> 로그아웃 (인증 화면으로)
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </header>
  );
}
