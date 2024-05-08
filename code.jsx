import React, { useState } from "react";

function SignupForm() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
    });

    const [errors, setErrors] = useState({
        username: "",
        password: "",
        email: "",
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = { username: "", password: "", email: "" };

        // Username validation: at least 6 characters, only lowercase letters and numbers
        if (!/^[a-z0-9]{6,}$/.test(formData.username)) {
            newErrors.username =
                "아이디는 최소 6글자 이상이며, 영어 소문자와 숫자만 포함해야 합니다.";
            isValid = false;
        }

        // Password validation: at least 8 characters, includes letters, numbers and specific symbols
        if (
            !/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,}$/.test(
                formData.password
            )
        ) {
            newErrors.password =
                "비밀번호는 최소 8글자 이상이며, 영문자, 숫자, !@#$%^&*() 특수문자를 포함해야 합니다.";
            isValid = false;
        }

        // Email validation
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "유효한 이메일 주소를 입력해주세요.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted:", formData);
            // Here you can integrate your API to send data
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700"
                    >
                        아이디
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                    {errors.username && (
                        <p className="text-red-500 text-xs italic">
                            {errors.username}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        비밀번호
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                    {errors.password && (
                        <p className="text-red-500 text-xs italic">
                            {errors.password}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        이메일
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs italic">
                            {errors.email}
                        </p>
                    )}
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        회원가입
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignupForm;
