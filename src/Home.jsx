import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  // Lista avatar dalla cartella public/avatars
  const avatars = [
    "/avatar_1.png",
    "/avatar_2.png",
    "/avatar_3.png",
    "/avatar_4.png",
    "/avatar_5.png",
    "/avatar_6.png",
  ];

  useEffect(() => {
    const saved = localStorage.getItem("player");
    if (saved) {
      const player = JSON.parse(saved);
      setUsername(player.username || "");
      setSelectedAvatar(player.avatar || null);
    }
  }, []);

  const handleStart = () => {
  if (selectedAvatar && username.trim()) {
    const player = { username, avatar: selectedAvatar };
    localStorage.setItem("player", JSON.stringify(player));
    navigate("/lobby");
  } else {
    alert("Seleziona un avatar e inserisci un nome!");
  }
};

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4 text-center" style={{ maxWidth: "500px", width: "100%" }}>
        <h3 className="mb-4">Scegli il tuo avatar</h3>

        <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
          {avatars.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`avatar-${idx}`}
              className={`rounded-circle border ${selectedAvatar === src ? "border-primary border-3" : "border-secondary"}`}
              style={{ width: "80px", height: "80px", cursor: "pointer", objectFit: "cover" }}
              onClick={() => setSelectedAvatar(src)}
            />
          ))}
        </div>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Inserisci il tuo nome"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button variant="primary" className="w-100" onClick={handleStart}>
          Inizia
        </button>
      </div>
    </div>
  );
}

export default Home;
