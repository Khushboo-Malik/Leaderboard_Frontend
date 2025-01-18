import React, { useEffect, useState } from "react";

const Ranks = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchRanks = async () => {
            try {
                const response = await fetch("https://leaderboard-backend-kcbp.onrender.com/showRanks");
                const result = await response.json();

                if (response.ok) {
                    setUsers(result.users.slice(0, 10)); // Top 10 users
                } else {
                    alert(result.message);
                }
            } catch (error) {
                console.error("Error fetching ranks:", error);
                alert("Failed to fetch ranks. Try again later.");
            }
        };

        fetchRanks();
    }, []);

    return (
        <div style={{ backgroundColor: "white", minHeight: "100vh", padding: "20px", textAlign: "center" }}>
            <h1 style={{ color: "red" }}>Top Ranks</h1>
            {users.map((user, index) => (
                <div
                    key={index}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        border: "1px solid black",
                        padding: "10px",
                        margin: "10px auto",
                        maxWidth: "400px",
                        backgroundColor: index % 2 === 0 ? "yellow" : "green",
                        color: "white",
                    }}
                >
                    <span>{user.Username}</span>
                    <span>Rank: {user.Rank}</span>
                    <span>
                        Points:{" "}
                        <span
                            style={{
                                display: "inline-block",
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                backgroundColor: "red",
                                lineHeight: "20px",
                                color: "white",
                                textAlign: "center",
                            }}
                        >
                            {user.Points}
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Ranks;
