import React from 'react';
import { 
  Heart, 
  Eye, 
  Type, 
  Volume2, 
  Keyboard, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

export default function AccessibilitySection() {
  const values = [
    {
      icon: <Eye size={28} />,
      title: "시각적 고대비 & 선명한 색상",
      desc: "저력자 및 시각 보조가 필요한 유저를 위해 4.5:1 이상의 높은 명암 대비와 명확한 포커스 링을 제공합니다."
    },
    {
      icon: <Type size={28} />,
      title: "대형 자막 & 글자 크기 3단계 조절",
      desc: "단 한 번의 클릭으로 화면 전반의 글자 크기를 (A / A+ / A++) 가독성 좋게 확대할 수 있습니다."
    },
    {
      icon: <Keyboard size={28} />,
      title: "100% 키보드 접근성 준수",
      desc: "마우스 조작이 어려운 환경에서도 Tab, Enter, Esc 키만으로 플랫폼의 모든 기능을 자유롭게 탐색합니다."
    },
    {
      icon: <Volume2 size={28} />,
      title: "스크린 리더 & 촉각 진동 지원",
      desc: "표준 ARIA 라벨링과 시각/음성/진동 3중 알림 시스템으로 누락 없는 정보를 전달합니다."
    }
  ];

  return (
    <section id="accessibility-values" className="landing-section accessibility-bg" aria-label="접근성 가치">
      <div className="container">
        
        <div className="accessibility-hero-box">
          <div className="access-hero-content">
            <span className="heart-badge">
              <Heart size={14} color="#EF4444" fill="#EF4444" /> 함께 만드는 따뜻한 세상
            </span>
            <h2 className="access-hero-title">
              "소통은 누구나 누려야 할 권리입니다."
            </h2>
            <p className="access-hero-desc">
              icanseeyourvoice는 개발 초기 단계부터 장애인 당사자들과 함께 설계하여, <br />
              차별과 배제 없는 진정한 인클루시브(Inclusive) 디지털 환경을 만듭니다.
            </p>
          </div>

          <div className="access-grid">
            {values.map((v, i) => (
              <div key={i} className="access-card">
                <div className="access-icon-circle">{v.icon}</div>
                <h3 className="access-title">{v.title}</h3>
                <p className="access-desc">{v.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
