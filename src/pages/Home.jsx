import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleClaimPoints = async () => {
        try {
            const response = await fetch("https://leaderboard-backend-kcbp.onrender.com/claimPoints", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Username: localStorage.getItem("username"), // Assuming username is stored locally
                }),
            });

            const result = await response.json();
            if (response.ok) {
                alert(result.message); // Show success message
            } else {
                alert(result.message); // Show error message
            }
        } catch (error) {
            console.error("Error claiming points:", error);
            alert("Failed to claim points. Try again later.");
        }
    };

    const handleShowRanks = () => {
        navigate("/ranks"); // Navigate to the ranks page
    };

    return (
        <div style={{ backgroundColor: "white", minHeight: "100vh", textAlign: "center", padding: "20px" }}>
            <h1 style={{ color: "red" }}>Tasks</h1>
            <button
                onClick={handleClaimPoints}
                style={{
                    backgroundColor: "green",
                    color: "white",
                    padding: "10px 20px",
                    margin: "10px",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                Claim Points
            </button>
            <button
                onClick={handleShowRanks}
                style={{
                    backgroundColor: "yellow",
                    color: "black",
                    padding: "10px 20px",
                    margin: "10px",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                Show Ranks
            </button>
        </div>
    );
};

export default Home;
