import ReactHookForm from "@/components/react/ReactHookForm/ReactHookForm";

export default function Page() {
    return (
        <div>
            <div className="flex w-full  py-5 bg-gray-100">
                <div className="px-6 md:px-24 lg:px-48">
                    <div className="w-full font-bold text-[60px]  md:text-[85px] text-blue-500">
                        React.
                    </div>
                </div>
            </div>

            {/* React-Hook-Form */}
            <div className="px-6 md:px-24 lg:px-48">
                <h1 className="font-semibold text-2xl border-l-4 border-blue-500 pl-4 my-10">
                    이런것을 구현 해봤습니다.
                </h1>
                <ReactHookForm />
            </div>
        </div>
    );
}
