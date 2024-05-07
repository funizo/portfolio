import Ido from "@/components/home/Ido";

export default function Introduce() {
    return (
        <div className="w-full px-6 md:px-24 lg:px-48">
            <div className="my-10 ">
                <h1 className="font-semibold text-2xl border-l-4 border-green-500 pl-4 ">
                    이런 기술을 사용해봤습니다.
                </h1>
                <p className="text-sm pl-5 mt-1">
                    ※배너를 클릭하면 자세히 볼 수 있습니다.
                </p>
            </div>

            <div className="">
                <Ido />
            </div>
        </div>
    );
}
