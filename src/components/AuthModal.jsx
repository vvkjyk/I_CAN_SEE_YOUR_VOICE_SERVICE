import React, { useState } from 'react';
import { 
  Video, 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  Eye, 
  EyeOff, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2,
  Volume2
} from 'lucide-react';

export default function AuthModal({ onLoginSuccess }) {
  const [activeTab, setActiveTab] = useState('login'); // 'login' | 'signup'
  const [email, setEmail] = useState('jiyu.kim@icanseeyourvoice.kr');
  const [password, setPassword] = useState('password123');
  const [name, setName] = useState('김지유');
  const [userRole, setUserRole] = useState('deaf'); // 'deaf' (농아인/수어유저) | 'hearing' (청인/음성유저) | 'interpreter' (전문통역사)
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login success with mock user info
    onLoginSuccess({
      name: activeTab === 'signup' && name ? `${name}님` : '김지유님',
      email: email || 'jiyu.kim@icanseeyourvoice.kr',
      role: userRole
    });
  };

  const handleDemoLogin = () => {
    onLoginSuccess({
      name: '김지유님',
      email: 'jiyu.kim@icanseeyourvoice.kr',
      role: 'deaf'
    });
  };

  return (
    <div className="auth-fullscreen-overlay">
      <div className="auth-card-container">
        
        {/* Left Side: Branding Hero Illustration Box */}
        <div className="auth-hero-sidebar">
          <div className="auth-hero-content">
            <div className="auth-logo-badge">
              <Video size={28} />
              <span className="auth-sparkle">
                <Sparkles size={14} />
              </span>
            </div>

            <h1 className="auth-hero-title">icanseeyourvoice</h1>
            <p className="auth-hero-subtitle">
              장애인과 비장애인이 <br />
              <strong>마음으로 소통하는 수어 번역 화상통화</strong>
            </p>

            <div className="auth-feature-list">
              <div className="auth-feature-item">
                <CheckCircle2 className="feature-icon" size={18} />
                <span>AI 2-Way 실시간 수어 ↔ 음성 자막 번역</span>
              </div>
              <div className="auth-feature-item">
                <CheckCircle2 className="feature-icon" size={18} />
                <span>전문 수어 통역사 원클릭 매칭</span>
              </div>
              <div className="auth-feature-item">
                <CheckCircle2 className="feature-icon" size={18} />
                <span>웹 접근성 최고 등급 (고대비 / 스크린리더 지원)</span>
              </div>
            </div>

            <div className="auth-quote-box">
              <p>"목소리가 들리지 않아도, 손짓 하나로 당당하게 세상과 만납니다."</p>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Auth Form */}
        <div className="auth-form-side">
          
          {/* Header & Tab Selector */}
          <div className="auth-form-header">
            <h2>{activeTab === 'login' ? '서비스 로그인' : '새 계정 회원가입'}</h2>
            <p>icanseeyourvoice 플랫폼 방문을 환영합니다.</p>

            <div className="auth-tabs" role="tablist" aria-label="로그인 및 회원가입 전환">
              <button
                className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
                onClick={() => setActiveTab('login')}
                role="tab"
                aria-selected={activeTab === 'login'}
              >
                로그인
              </button>
              <button
                className={`auth-tab ${activeTab === 'signup' ? 'active' : ''}`}
                onClick={() => setActiveTab('signup')}
                role="tab"
                aria-selected={activeTab === 'signup'}
              >
                회원가입
              </button>
            </div>
          </div>

          {/* Quick Demo Login Banner */}
          <div className="demo-login-box">
            <div className="demo-login-info">
              <Sparkles size={16} className="demo-sparkle-icon" />
              <span>체험용 빠르게 시작하기</span>
            </div>
            <button 
              type="button" 
              className="btn btn-teal demo-btn" 
              onClick={handleDemoLogin}
              aria-label="김지유님 데모 계정으로 바로 로그인하기"
            >
              🚀 "김지유님"으로 바로 로그인
            </button>
          </div>

          <div className="auth-divider-text">
            <span>또는 이메일 정보 입력</span>
          </div>

          {/* Auth Form */}
          <form onSubmit={handleSubmit} className="auth-form">
            
            {/* Signup Only Name Field */}
            {activeTab === 'signup' && (
              <div className="input-group">
                <label className="input-label" htmlFor="auth-name">
                  이름 (닉네임) <span className="required-star">*</span>
                </label>
                <div className="input-with-icon">
                  <User size={18} className="input-icon" />
                  <input
                    id="auth-name"
                    type="text"
                    className="input-field with-icon"
                    placeholder="예: 김지유"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="input-group">
              <label className="input-label" htmlFor="auth-email">
                이메일 주소 <span className="required-star">*</span>
              </label>
              <div className="input-with-icon">
                <Mail size={18} className="input-icon" />
                <input
                  id="auth-email"
                  type="email"
                  className="input-field with-icon"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="input-group">
              <label className="input-label" htmlFor="auth-password">
                비밀번호 <span className="required-star">*</span>
              </label>
              <div className="input-with-icon">
                <Lock size={18} className="input-icon" />
                <input
                  id="auth-password"
                  type={showPassword ? "text" : "password"}
                  className="input-field with-icon"
                  placeholder="비밀번호를 입력하세요"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Signup Assistance Options */}
            {activeTab === 'signup' && (
              <div className="input-group">
                <label className="input-label">주요 소통 방식 (선택)</label>
                <div className="role-options">
                  <button
                    type="button"
                    className={`role-option-btn ${userRole === 'deaf' ? 'selected' : ''}`}
                    onClick={() => setUserRole('deaf')}
                  >
                    ✋ 수어 소통 (청각장애인)
                  </button>
                  <button
                    type="button"
                    className={`role-option-btn ${userRole === 'hearing' ? 'selected' : ''}`}
                    onClick={() => setUserRole('hearing')}
                  >
                    🗣️ 음성 소통 (비장애인)
                  </button>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary auth-submit-btn">
              <span>{activeTab === 'login' ? '로그인하고 메인으로' : '가입 완료하고 메인으로'}</span>
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Footer Note */}
          <div className="auth-footer-note">
            <ShieldCheck size={16} color="#0D9488" />
            <span>개인정보보호 및 장애인 웹 접근성 준수 지침 적용</span>
          </div>

        </div>

      </div>
    </div>
  );
}
