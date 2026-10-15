// Mock Data for "i can see your voice" MVP

export const CURRENT_USER = {
  name: "김지유님",
  email: "jiyu.kim@icanseeyourvoice.kr",
  avatarBg: "#0284C7",
  preferredAccessibility: {
    signLanguageAssist: true,
    largeSubtitles: true,
    hapticAlert: true,
    contrastMode: "light"
  }
};

export const ONGOING_MEETINGS = [
  {
    id: "ROOM-8921",
    title: "농아인 협회 주간 장애인 접근성 정례 회의",
    host: "김지유 (나)",
    participantsCount: 6,
    interpreterAssigned: true,
    interpreterName: "박민수 전문 수어 통역사",
    aiTranslationActive: true,
    code: "ICSYV-8921",
    status: "LIVE",
    timeElapsed: "24분 진행 중"
  },
  {
    id: "ROOM-4032",
    title: "배리어프리 수어 번역 UX 디자인 워크숍",
    host: "이수진 팀장",
    participantsCount: 4,
    interpreterAssigned: true,
    interpreterName: "AI 수어 번역 엔진 2.0",
    aiTranslationActive: true,
    code: "ICSYV-4032",
    status: "LIVE",
    timeElapsed: "10분 진행 중"
  }
];

export const UPCOMING_MEETINGS = [
  {
    id: "UP-101",
    title: "i can see your voice MVP 서비스 사용성 평가 피드백",
    date: "오늘 (10월 8일)",
    time: "오후 17:00 ~ 18:00",
    host: "정성훈 개발자",
    participants: ["김지유", "정성훈", "최유리 통역사"],
    interpreter: "최유리 전문 통역사 배정 완료",
    code: "ICSYV-1019"
  },
  {
    id: "UP-102",
    title: "전국 농아인 IT 인재 타운홀 미팅",
    date: "내일 (10월 9일)",
    time: "오전 10:30 ~ 11:30",
    host: "한국농아인협회",
    participants: ["김지유", "외 14명"],
    interpreter: "AI 수어 실시간 2-Way 자막 지원",
    code: "ICSYV-2048"
  },
  {
    id: "UP-103",
    title: "수어-음성 양방향 번역 알고리즘 고도화 세미나",
    date: "10월 12일 (월)",
    time: "오후 14:00 ~ 15:30",
    host: "AI 연구소",
    participants: ["김지유", "연구팀전원"],
    interpreter: "AI 번역 + 전문 통역사 동시 배치",
    code: "ICSYV-3910"
  }
];

export const MOCK_NOTIFICATIONS = [
  {
    id: "NOTIF-1",
    title: "수어 통역사 입장 완료",
    message: "박민수 전문 수어 통역사가 [농아인 협회 정례 회의]에 대기 중입니다.",
    time: "5분 전",
    read: false
  },
  {
    id: "NOTIF-2",
    title: "AI 수어 2-Way 인식엔진 업데이트",
    message: "손짓 및 얼굴 표정 인식 정확도가 99.4%로 상향 개선되었습니다.",
    time: "1시간 전",
    read: false
  },
  {
    id: "NOTIF-3",
    title: "다가올 회의 알림",
    message: "오후 5시에 'MVP 서비스 사용성 평가' 회의가 시작될 예정입니다.",
    time: "2시간 전",
    read: true
  }
];
