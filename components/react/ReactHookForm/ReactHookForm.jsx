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
                        React-Hook-Form
                    </h1>
                </div>
                <div className="text-sm md:text-base">
                    <p className="mb-2 font-semibold">-사용 이유-</p>
                    <ol class="list-decimal list-inside space-y-1">
                        <li>
                            각 Input 데이터를 validation을 하기 위해서는 전역
                            상태를 여럿 만들어야 했지만
                            <br />
                            자제적으로 제공하는 유틸을 사용하면 전체 코드가 크게
                            줄어들고 단순해져 가독성이 좋아지기 때문입니다.
                        </li>
                        <li>
                            React-Hook-Form은 비제어 컴포넌트를 사용하여
                            불필요한 랜더링을 줄여 전반적인 성능 향상이
                            있습니다.
                        </li>
                        <li>
                            Register 함수를 이용하여 입력 필드의 규칙과 유효성
                            검사 실패시 오류 메세지를 쉽게 표시 가능합니다
                        </li>
                    </ol>
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
