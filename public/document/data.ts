const data = [
    { id: "전산 프로그램 개발", label: "C#", tools: "C# · DevExpress", description: "검사팀의 요구사항을 수집하고 전산 프로그램 개발부터 일정 조율, 산출물 전달까지 수행했습니다.", url: "#samkwang" },
    { id: "병원 데이터 연동", label: "API", tools: "EMR/OCS · IBM DB2 · MS SQL", description: "병원 담당자와 API 사양을 협의하고, 사내 시스템과의 데이터 연동 및 결과 공유 프로세스를 구축했습니다.", url: "#hospital-integration" },
    { id: "전송 구조 개선 · 자동화", label: "MQ", tools: "RabbitMQ · C# · Batch", description: "OCS 배치 프로그램을 개발·운영하고, 팀과 함께 결과 전송 구조를 개선해 전송 시간을 단축했습니다.", url: "#ocs-transmission" },
    { id: "웹 서비스 개발 · 운영", label: "WEB", tools: "Next.js · React · JavaScript · Tailwind CSS", description: "반응형 웹 개발과 Next.js 서비스 운영을 경험하고, 3개 시스템 리뉴얼의 산출물 검증 및 연동 확인에 참여했습니다.", url: "#web-renewal" },
    { id: "모니터링 · 문제 해결", label: "LOG", tools: "OpenTelemetry · SigNoz", description: "장애를 실시간으로 탐지하고, 사용자 문의와 로그·데이터로 원인을 추적해 관련 부서와 해결 방향을 공유했습니다.", url: "#samkwang" },
    { id: "협업 · 커뮤니케이션", label: "TEAM", tools: "Git · GitHub · Notion · Slack", description: "소스 이력과 업무 문서를 관리하며, 개발·검사·영업 직군 및 외부 기관 사이의 요구사항을 조율했습니다.", url: "#experience" },
];

export const projects = [
    {
        id: "ocs-transmission",
        title: "OCS 결과 전송 프로그램 개선",
        subtitle: "RabbitMQ 도입 · 전산팀 협업",
        result: "전송 완료 시간 20~30분 → 1~5분 이내",
        description: "C# WinForm 기반 싱글스레드 구조로 여러 병원에 결과를 동시에 전송하지 못해 지연과 병원 측 불편 문의가 발생했습니다.",
        details: [
            "전산팀과 함께 원인을 파악하고 RabbitMQ를 도입해, 결과 생성 즉시 병원으로 전송하는 구조로 마이그레이션했습니다.",
            "전송 완료 시간을 단축하고 병원 측 불편 문의를 크게 줄였습니다.",
        ],
    },
    {
        id: "hospital-integration",
        title: "대형 대학병원 신규 데이터 연동",
        subtitle: "EMR/OCS API 설계·개발 · 외부 기관 대응",
        result: "월 매출 6천만 원 이상 규모의 병원 연동 · 재계약",
        description: "대학병원 신규 데이터 연동을 담당하며 직접 현장에 방문해 담당자의 요구사항을 수집했습니다.",
        details: [
            "요구사항을 반영한 EMR/OCS 연동 API를 설계·개발하고, 병원 측과 지속적으로 소통하며 서비스를 안정적으로 운영했습니다.",
            "연동 이후에도 유지보수와 문의 대응을 이어가며 신뢰를 쌓았고, 해당 병원과의 재계약으로 이어졌습니다.",
        ],
    },
    {
        id: "web-renewal",
        title: "영업·검사 결과 웹 시스템 리뉴얼",
        subtitle: "Next.js 전환 · 총 1년 · 전산팀 실무자 참여",
        result: "영업사원 약 300명 · 20개 이상 지점 · 1,000개 이상 거래처",
        description: "영업사원 전용 웹사이트, 결과지, 결과 조회 홈페이지 등 3개 시스템을 새로 구축하는 프로젝트에 참여했습니다.",
        details: [
            "외주 개발사가 개발하는 동안 전산팀 소속으로 산출물을 검증하고 사내 시스템과의 연동 여부를 확인했습니다.",
            "본사 마케팅부서, 운영본부, 각 검사부서·검사본부의 요구사항이 산출물에 정확히 반영되는지 확인했습니다.",
            "외주업체와 여러 부서 사이에서 요구사항과 일정이 조정되는 과정을 실무자로서 경험하고 함께 대응했습니다.",
        ],
    },
];

export default data;
