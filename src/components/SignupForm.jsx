import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
    const [formData, setFormData] = useState({
        UserId: "",
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
            const response = await API.post("/signup", formData);
            alert(response.data.message || "Signup successful! Redirecting to login...");
            navigate("/login");
        } catch (err) {
            setError(err.response?.data?.message || "Signup failed!");
        }
    };    

    return (
        <div className="container">
            <h1>Tasks - Signup</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="UserId"
                    placeholder="User ID"
                    value={formData.UserId}
                    onChange={handleChange}
                    required
                />
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
                <button type="submit">Signup</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </div>
    );
};

export default SignupForm;
