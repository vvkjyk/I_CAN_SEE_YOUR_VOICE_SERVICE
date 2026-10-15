import React from 'react';
import { 
  Video, 
  UserPlus, 
  Sparkles, 
  MessageSquareHeart, 
  ArrowRight 
} from 'lucide-react';

export default function ProcessFlowSection() {
  const steps = [
    {
      num: "01",
      title: "원클릭 회의 개설",
      desc: "별도 설치 없이 웹 브라우저에서 '새 회의 만들기' 버튼으로 3초 만에 방을 생성합니다.",
      icon: <Video size={24} />,
      color: "step-blue"
    },
    {
      num: "02",
      title: "초대 코드 & 링크 전송",
      desc: "생성된 8자리 회의 코드를 카카오톡이나 이메일로 참여자에게 쉽게 공유합니다.",
      icon: <UserPlus size={24} />,
      color: "step-teal"
    },
    {
      num: "03",
      title: "AI 수어 ↔ 음성 라이브 가동",
      desc: "입장과 동시에 AI가 카메라로 손짓을 추적하고, 음성을 대형 자막으로 즉각 시각화합니다.",
      icon: <Sparkles size={24} />,
      color: "step-purple"
    },
    {
      num: "04",
      title: "장벽 없는 자유로운 소통",
      desc: "농아인과 비장애인이 서로의 눈을 바라보며 따뜻하고 막힘없는 커뮤니케이션을 누립니다.",
      icon: <MessageSquareHeart size={24} />,
      color: "step-coral"
    }
  ];

  return (
    <section id="process-flow" className="landing-section process-flow-bg" aria-label="사용 흐름">
      <div className="container">
        
        <div className="section-header center">
          <span className="tag-badge-teal">
            누구나 3분만에 적응하는 쉬운 UX
          </span>
          <h2 className="section-title">
            스마트하게 연결되는 <span className="highlight-text">4단계 서비스 이용 흐름</span>
          </h2>
          <p className="section-subtitle">
            복잡한 절차 없이 누구나 바로 시작할 수 있습니다.
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, idx) => (
            <React.Fragment key={step.num}>
              <div className={`step-card ${step.color}`}>
                <div className="step-top">
                  <span className="step-number">{step.num}</span>
                  <div className="step-icon-badge">{step.icon}</div>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>

              {idx < steps.length - 1 && (
                <div className="step-arrow" aria-hidden="true">
                  <ArrowRight size={24} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
