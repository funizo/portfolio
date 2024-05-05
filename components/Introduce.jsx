import Ido from "@/components/Ido";

export default function Introduce() {
    return (
        <div className="w-full px-6 md:px-24 lg:px-48">
            <h1 className="font-semibold text-2xl border-l-4 border-green-500 pl-4 my-10">
                이런 기술을 사용해봤습니다.
            </h1>
            <div className="">
                <Ido />
            </div>
        </div>
    );
}
