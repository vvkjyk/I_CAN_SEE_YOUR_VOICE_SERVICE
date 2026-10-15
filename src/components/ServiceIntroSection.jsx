import React from 'react';
import { 
  Sparkles, 
  Hand, 
  Cpu, 
  Globe, 
  Zap, 
  ShieldCheck, 
  Smile 
} from 'lucide-react';

export default function ServiceIntroSection() {
  return (
    <section id="service-intro" className="landing-section service-intro-bg" aria-label="서비스 소개">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header center">
          <span className="tag-badge">
            <Sparkles size={14} /> AI 수어 2-Way 번역 플랫폼
          </span>
          <h2 className="section-title">
            수어와 음성 사이의 벽을 무너뜨리는 <br />
            <span className="highlight-text">icanseeyourvoice</span> 만의 혁신 기술
          </h2>
          <p className="section-subtitle">
            인공지능 손짓 포즈 추적 모델과 자연어 처리 엔진이 양방향으로 실시간 작동하여 <br />
            농아인과 비장애인 모두 대화의 끊김 없이 직관적으로 소통합니다.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="features-grid">
          
          <div className="feature-card">
            <div className="feature-icon-wrapper bg-blue">
              <Hand size={32} />
            </div>
            <h3>99.4% 손짓 Pose 인식</h3>
            <p>
              손가락 21개 마디 키포인트와 얼굴 미세 표정을 0.05초 단위로 딥러닝 분석하여 정확한 수어 어휘를 추출합니다.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper bg-teal">
              <Zap size={32} />
            </div>
            <h3>양방향 2-Way 라이브 자막</h3>
            <p>
              수어 → 텍스트/음성 변환은 물론, 비장애인의 음성을 농아인을 위한 직관적인 대형 실시간 자막으로 1초 이내 생성합니다.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper bg-purple">
              <Globe size={32} />
            </div>
            <h3>국가공인 전문 통역사 매칭</h3>
            <p>
              AI 번역 외에도 중요한 수술, 계약, 법률 상담 시 검증된 전문 수어 통역사가 원클릭으로 화면에 동시 배치됩니다.
            </p>
          </div>

        </div>

        {/* Impact Numbers Banner */}
        <div className="impact-banner">
          <div className="impact-item">
            <div className="impact-num">0.1초</div>
            <div className="impact-label">초저지연 자막 생성 속도</div>
          </div>
          <div className="impact-divider"></div>
          <div className="impact-item">
            <div className="impact-num">100%</div>
            <div className="impact-label">웹 접근성 표준(WCAG) 준수</div>
          </div>
          <div className="impact-divider"></div>
          <div className="impact-item">
            <div className="impact-num">24시간</div>
            <div className="impact-label">AI 수어 번역 무료 상시 지원</div>
          </div>
        </div>

      </div>
    </section>
  );
}
