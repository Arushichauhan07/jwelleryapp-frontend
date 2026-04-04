import React, { useState } from 'react';
import InputField from '../UIComponents/InputField';
import UniversalButton from '../UIComponents/UniversalButtton';

const Login = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleRegister = async () => {
        const res = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formData?.name,
                email: formData?.email,
                password: formData?.password
            })
        });

    }

    const getAllUsers = async () => {
        try {
            const res = await fetch("http://localhost:5000/");
        } catch (error) {
            console.log("error", error)
        }
    }

    const handleLogin = async () => {
        try {
            const res = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: formData?.email,
                    password: formData?.password
                })
            });

            const data = await res.json();

            if (res.ok) {
                console.log("Login success", data);

                // Example:
                // localStorage.setItem("token", data.token);
                // navigate("/dashboard");
            } else {
                console.log("Login failed", data.message);
            }

        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <>
            <div className='w-56 flex gap-4'>
                <InputField
                    label="Name"
                    value={formData?.name}
                    onChange={(e) => setFormData((prev) => ({
                        ...prev,
                        name: e.target.value
                    }))}
                />
                <InputField
                    label="Email"
                    value={formData?.email}
                    onChange={(e) => setFormData((prev) => ({
                        ...prev,
                        email: e.target.value
                    }))}
                />
                <InputField
                    label="Password"
                    value={formData?.password}
                    onChange={(e) => setFormData((prev) => ({
                        ...prev,
                        password: e.target.value
                    }))}
                />

            </div>
            <div className='my-4'>
                <UniversalButton label="Register" onClick={handleRegister} />
            </div>
            <div className='my-4'>
                <UniversalButton label="Login" onClick={handleLogin} />
            </div>
            <div className='my-4'>
                <UniversalButton label="Get Users" onClick={getAllUsers} />
            </div>
        </>
    )
}

export default Login