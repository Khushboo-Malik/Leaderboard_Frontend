import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        Username: "",
        Password: "",
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post("/login", formData);
            alert("Login successful! Redirecting to home...");
            navigate("/home");
        } catch (err) {
            setError(err.response?.data?.message || "Login failed!");
        }
    };

    return (
        <div className="container">
            <h1>Tasks - Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="Username"
                    placeholder="Username"
                    value={formData.Username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="Password"
                    placeholder="Password"
                    value={formData.Password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Login</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </div>
    );
};

export default LoginForm;
