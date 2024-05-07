"use client";
import React, { useState } from "react";
import ReactHookFormModal from "@/components/react/ReactHookForm/ReactHookFormModal";

export default function ReactHookForm() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            <div className="space-y-5">
                <div>
                    <h1 className="text-2xl font-bold  mb-5">
                        1. React-Hook-Form
                    </h1>
                </div>
                <div className="text-sm md:text-base">
                    <p>
                        <span className="font-bold">사용이유:</span> 각 Input
                        데이터를 validation을 하기 위해서는 전역 상태를 여럿
                        만들어야 했지만,
                    </p>
                    <p>
                        자제적으로 제공하는 유틸을 사용하면 전체 코드가 크게
                        줄어들고 단순해져 가독성이 좋아지기 때문입니다.
                    </p>
                </div>
                <div>
                    <button
                        className="bg-blue-400 p-1 rounded-md  hover:bg-blue-500 text-white"
                        onClick={openModal}
                    >
                        확인 해보기
                    </button>
                </div>
            </div>
            <ReactHookFormModal isOpen={isOpen} closeModal={closeModal} />
        </div>
    );
}
