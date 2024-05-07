export default function ReactHookFormModal({ isOpen, closeModal }) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={closeModal}
        >
            <div
                className="bg-white w-4/5 lg:w-3/5 h-svh max-h-[90%] rounded-lg shadow-lg overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="font-bold text-lg">모달 타이틀</h2>
                <p className="text-sm">모달 내용입니다...</p>
                <button
                    className="mt-4 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    onClick={closeModal}
                >
                    닫기
                </button>
            </div>
        </div>
    );
}
