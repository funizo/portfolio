import Ido from "@/components/home/Ido";

export default function Introduce() {
    return (
        <section aria-labelledby="skills-title" className="w-full px-6 md:px-24 lg:px-48">
            <div className="my-10 ">
                <h2 id="skills-title" className="font-semibold text-2xl border-l-4 border-green-500 pl-4 ">
                    실무에서 쌓은 핵심 역량
                </h2>
                <p className="text-sm pl-5 mt-1">
                    카드를 선택하면 관련 경력과 프로젝트로 이동합니다.
                </p>
            </div>

            <div className="">
                <Ido />
            </div>
        </section>
    );
}
