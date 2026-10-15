import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  PhoneOff, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Type, 
  Hand, 
  ShieldCheck, 
  Maximize2, 
  MessageSquare,
  Users,
  Settings
} from 'lucide-react';

export default function VideoCallMockModal({ meetingInfo, onClose }) {
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [audioOn, setAudioOn] = useState(true);
  const [subSize, setSubSize] = useState('medium'); // 'medium' | 'large'
  const [activeSubtitle, setActiveSubtitle] = useState('🤟 [AI 수어 번역]: 안녕하세요! 오늘 icanseeyourvoice 화상 회의에 입장하셨습니다.');
  const [gestureIndex, setGestureIndex] = useState(0);

  const sampleSubtitles = [
    "🤟 [AI 수어 번역]: 반갑습니다. 오늘 회의 안건에 대해 손짓으로 말씀드리는 중입니다.",
    "🗣️ [음성 ↔ 자막]: 이수진 님: 네, 수어 번역 자막이 아주 명확하게 표시되고 있네요!",
    "🤟 [AI 수어 번역]: '감사합니다', '협력', '접근성' 키워드가 인식되었습니다. (정확도 99.4%)",
    "🗣️ [음성 ↔ 자막]: 박민수 통역사: 필요 시 음성으로도 번역 지원 중입니다."
  ];

  // Rotate simulated sign translation every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setGestureIndex((prev) => {
        const next = (prev + 1) % sampleSubtitles.length;
        setActiveSubtitle(sampleSubtitles[next]);
        return next;
      });
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const sendQuickPhrase = (text) => {
    setActiveSubtitle(`🤟 [나의 수어 전송]: ${text}`);
  };

  return (
    <div className="videocall-fullscreen-overlay">
      <div className="videocall-container">
        
        {/* Top Floating Control Bar */}
        <div className="videocall-header">
          <div className="call-info">
            <span className="live-pill">
              <span className="pulse-dot"></span> LIVE 수어 번역 중
            </span>
            <h2 className="call-title">{meetingInfo?.title || 'icanseeyourvoice 화상 회의'}</h2>
            <span className="call-code">({meetingInfo?.code || 'ICSYV-8921'})</span>
          </div>

          <div className="call-header-right">
            <div className="call-interpreter-status">
              <Sparkles size={14} className="color-teal" />
              <span>{meetingInfo?.interpreterName || 'AI 수어 2-Way 번역 가동'}</span>
            </div>
            <button className="btn-icon header-icon-btn" onClick={onClose} title="나가기">
              <PhoneOff size={18} color="#EF4444" />
            </button>
          </div>
        </div>

        {/* Video Grid Section */}
        <div className="videocall-body">
          
          {/* Main Participant Video Window (Simulated Peer Video) */}
          <div className="video-tile main-peer-tile">
            <div className="video-avatar-simulated">
              {/* Simulated camera feed graphic with pose landmark points */}
              <div className="simulated-camera-feed">
                <div className="camera-graphic-bg">
                  <div className="gesture-person-icon">
                    <Hand size={64} className="hand-gesture-anim" />
                  </div>
                  {/* AI Landmark Mesh Overlay Simulation */}
                  <div className="ai-landmark-box">
                    <span className="landmark-dot dot-1"></span>
                    <span className="landmark-dot dot-2"></span>
                    <span className="landmark-dot dot-3"></span>
                    <span className="landmark-dot dot-4"></span>
                    <span className="landmark-line line-1"></span>
                    <span className="landmark-label">AI Hand Pose: Recognized</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="video-label-badge">
              <span>이수진 팀장 (수어 소통중)</span>
              <span className="sign-badge">🤟 수어 전송</span>
            </div>
          </div>

          {/* Self Camera Tile (김지유님) */}
          <div className="video-tile self-tile">
            {camOn ? (
              <div className="self-camera-view">
                <div className="self-user-icon">
                  <Hand size={36} color="#38BDF8" />
                </div>
                <div className="self-pose-box">
                  <span className="self-pose-tag">내 수어 카메라 ON</span>
                </div>
              </div>
            ) : (
              <div className="camera-off-placeholder">
                <VideoOff size={32} />
                <span>카메라 꺼짐</span>
              </div>
            )}
            <div className="video-label-badge self-badge">
              <span>김지유님 (나)</span>
            </div>
          </div>

          {/* Live Subtitle Overlay Bar (Req 11, 12 - Large contrast subtitles) */}
          <div className={`live-subtitle-bar size-${subSize}`}>
            <div className="subtitle-header">
              <span className="subtitle-tag">실시간 양방향 자막</span>
              <button 
                className="btn-text-sm color-white" 
                onClick={() => setSubSize(subSize === 'medium' ? 'large' : 'medium')}
              >
                <Type size={14} /> 자막 크기: {subSize === 'medium' ? '보통' : '대형'}
              </button>
            </div>
            <div className="subtitle-content">
              <p className="active-subtitle-text">{activeSubtitle}</p>
            </div>
          </div>

        </div>

        {/* Quick Sign Phrase Shortcuts */}
        <div className="quick-phrases-bar">
          <span className="phrases-label">
            <Hand size={16} /> 퀵 수어 응답:
          </span>
          <div className="phrase-buttons">
            <button className="phrase-btn" onClick={() => sendQuickPhrase("안녕하세요! 반갑습니다.")}>
              👋 안녕하세요
            </button>
            <button className="phrase-btn" onClick={() => sendQuickPhrase("네, 동의합니다.")}>
              👍 동의합니다
            </button>
            <button className="phrase-btn" onClick={() => sendQuickPhrase("질문이 있습니다.")}>
              ❓ 질문이 있습니다
            </button>
            <button className="phrase-btn" onClick={() => sendQuickPhrase("화면 자막을 크게 해주세요.")}>
              🔍 자막 크게 요청
            </button>
          </div>
        </div>

        {/* Bottom Call Control Toolbar */}
        <div className="videocall-footer">
          <div className="footer-left">
            <span className="security-tag">
              <ShieldCheck size={16} /> E2E 종단간 암호화 보증
            </span>
          </div>

          <div className="footer-center-controls">
            {/* Mic Toggle */}
            <button 
              className={`control-circle-btn ${!micOn ? 'off' : ''}`}
              onClick={() => setMicOn(!micOn)}
              title={micOn ? "마이크 끄기" : "마이크 켜기"}
            >
              {micOn ? <Mic size={20} /> : <MicOff size={20} />}
            </button>

            {/* Camera Toggle */}
            <button 
              className={`control-circle-btn ${!camOn ? 'off' : ''}`}
              onClick={() => setCamOn(!camOn)}
              title={camOn ? "카메라 끄기" : "카메라 켜기"}
            >
              {camOn ? <Video size={20} /> : <VideoOff size={20} />}
            </button>

            {/* TTS Audio Speaker Toggle */}
            <button 
              className={`control-circle-btn ${!audioOn ? 'off' : ''}`}
              onClick={() => setAudioOn(!audioOn)}
              title={audioOn ? "음성 출력 끄기" : "음성 출력 켜기"}
            >
              {audioOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>

            {/* End Call Button */}
            <button className="end-call-btn" onClick={onClose} title="통화 종료">
              <PhoneOff size={22} />
              <span>통화 종료</span>
            </button>
          </div>

          <div className="footer-right">
            <button className="btn-icon" onClick={() => alert('회의 참가자 4명 명단이 열렸습니다.')}>
              <Users size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
