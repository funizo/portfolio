import Data from "@/public/document/data";

export default function Ido() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {Data.map((skill) => (
                <a key={skill.id} href={skill.url} className="group flex min-h-[230px] flex-col border border-gray-300 p-4 transition-colors hover:border-green-500 hover:bg-green-50">
                    <span className="mb-3 flex h-10 w-14 items-center justify-center bg-green-100 text-sm font-bold text-green-800" aria-hidden="true">{skill.label}</span>
                    <h3 className="mb-1 font-bold text-gray-900">{skill.id}</h3>
                    <p className="mb-2 text-xs font-semibold leading-relaxed text-green-800">{skill.tools}</p>
                    <p className="text-sm leading-relaxed text-gray-600">{skill.description}</p>
                    <span className="mt-auto pt-4 text-xs font-semibold text-green-800">관련 경험 보기 →</span>
                </a>
            ))}
        </div>
    );
}
