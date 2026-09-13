import Image from "next/image";
import { projects } from "@/public/document/data";

export default function Experience() {
    return (
        <section id="experience" aria-labelledby="experience-title" className="px-6 md:px-24 lg:px-48">
            <h2 id="experience-title" className="my-10 border-l-4 border-green-500 pl-4 text-2xl font-semibold">이런 경험을 해봤습니다.</h2>
            <div className="space-y-8">
                <article id="samkwang" className="border-b border-gray-300 pb-8">
                    <div className="flex items-start gap-4">
                        <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center bg-green-100 text-xl font-bold text-green-800" aria-hidden="true">S</div>
                        <div>
                            <h3 className="text-lg font-semibold">㈜삼광랩트리</h3>
                            <p className="font-semibold text-gray-600">전산팀 / 사원</p>
                            <p className="mt-1 text-sm font-semibold text-gray-500">2024.08 ~ 현재 (재직 중)</p>
                        </div>
                    </div>
                    <ul className="mt-5 list-disc space-y-2 pl-5 leading-relaxed text-gray-700">
                        <li>검사팀 요구사항을 수집·정리하고 C#·DevExpress 기반 전산 프로그램의 개발 일정 조율 및 산출물 전달</li>
                        <li>병원 EMR/OCS 담당자와 API 사양 협의, 사내 시스템 데이터 연동 및 결과 공유 프로세스 구축</li>
                        <li>OCS 데이터 처리 자동화를 위한 배치 프로그램 개발·운영, 처리 이슈 원인 분석 및 관련 부서 공유</li>
                        <li>Next.js 웹 서비스 운영 및 OpenTelemetry·SigNoz 모니터링 구축, 실시간 장애 탐지와 대응 프로세스 개선</li>
                        <li>영업팀 등 실사용자의 전화·직접 문의 접수, 오류 재현과 원인 분석을 통한 해결 방향 안내</li>
                        <li>의료재단 차세대 시스템 구축에 개발자로 참여해 기획·개발·현업 부서와 협의하고 신규 구조 설계 및 기능 구현에 기여</li>
                        <li>Git·GitHub 소스 형상 관리, Notion 업무 문서화, Slack을 활용한 팀 및 유관 부서 소통</li>
                    </ul>
                    <div className="mt-8 space-y-6">
                        {projects.map((project) => (
                            <article key={project.id} id={project.id} className="border border-gray-200 p-5 md:p-6">
                                <p className="mb-2 text-xs font-semibold text-green-800">주요 프로젝트</p>
                                <h4 className="text-lg font-bold text-gray-900">{project.title}</h4>
                                <p className="mt-1 text-sm text-gray-500">{project.subtitle}</p>
                                <p className="my-4 bg-green-50 px-3 py-2 font-semibold leading-relaxed text-green-800">{project.result}</p>
                                <p className="leading-relaxed text-gray-700">{project.description}</p>
                                <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-gray-700">
                                    {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                                </ul>
                            </article>
                        ))}
                    </div>
                </article>
                <article className="flex items-start gap-4 border-b border-gray-300 pb-8">
                    <Image src="/image/other/batal.svg" width={60} height={60} alt="" className="shrink-0" />
                    <div className="min-w-0">
                        <h3 className="text-lg font-semibold">바탈 (Batal)</h3>
                        <p className="font-semibold text-gray-600">프론트엔드 개발 / 인턴</p>
                        <p className="mt-1 text-sm font-semibold text-gray-500">2024.03 ~ 2024.05 (3개월)</p>
                        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-gray-700">
                            <li>클라이언트 요구사항을 정리해 랜딩 페이지 및 자체 솔루션 웹사이트를 일정 내 제작·전달</li>
                            <li>Survey Form 및 반응형 웹 개발, 변경된 요청사항을 결과물에 신속히 반영</li>
                        </ul>
                        <p className="mt-3 text-sm text-green-800">React · JavaScript · Tailwind CSS · Git</p>
                    </div>
                </article>
            </div>
        </section>
    );
}
