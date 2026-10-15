import React from 'react';
import { Video, Heart, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <Video size={24} className="color-teal" />
              <span className="footer-logo-title">icanseeyourvoice</span>
            </div>
            <p className="footer-tagline">
              장애인과 비장애인을 위한 수어 번역 화상통화 플랫폼 웹 MVP
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <h4>주요 기능</h4>
              <ul>
                <li><a href="#quick-actions">새 회의 개설</a></li>
                <li><a href="#quick-actions">진행중 회의 참여</a></li>
                <li><a href="#quick-actions">다가올 회의 확인</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>기술 및 접근성</h4>
              <ul>
                <li><a href="#service-intro">AI 수어 번역 기술</a></li>
                <li><a href="#accessibility-values">WCAG 접근성 지침</a></li>
                <li><a href="#process-flow">이용 가이드</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>지원 & 고객센터</h4>
              <ul>
                <li><span>수어 통역 센터 1588-0000</span></li>
                <li><span>도움말 및 웹 접근성 선언서</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2026 icanseeyourvoice. All rights reserved. Designed for Accessibility.
          </div>
          <div className="footer-badge">
            <ShieldCheck size={16} color="#0D9488" />
            <span>웹 접근성 품질인증 준수</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
