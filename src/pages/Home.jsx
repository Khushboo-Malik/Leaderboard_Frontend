import React from "react";
import { useNavigate } from "react-router-dom";
import API from "../api"; // Import the API instance

const Home = () => {
    const navigate = useNavigate();

    const handleClaimPoints = async () => {
        try {
            // Prompt the user to enter their username
            const username = prompt("Please enter your username:");
            if (!username) {
                alert("Username is required to claim points.");
                return; // Exit the function early if username is empty
            }
    
            // Proceed with the API call
            const response = await API.post("/claimPoints", { Username: username });
    
            alert(response.data.message); // Show success message if request is successful
        } catch (error) {
            console.error("Error claiming points:", error);
            alert(error.response?.data?.message || "Failed to claim points. Try again later.");
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
