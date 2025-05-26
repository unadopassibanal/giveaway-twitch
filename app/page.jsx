"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("twitchUser");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const loginWithTwitch = () => {
    const mockUser = {
      username: "Viewer123",
      twitchId: "123456",
      avatar:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/71bc8098-3df7-49c9-8dda-b500a8a198ac-profile_image-70x70.png",
    };
    localStorage.setItem("twitchUser", JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const handleJoin = () => {
    setJoined(true);
  };

  return (
    <main className="min-h-screen p-6 bg-gradient-to-br from-purple-900 via-indigo-800 to-black text-white flex flex-col md:flex-row justify-center items-start gap-12">
      
      {/* Partie gauche : contenu principal */}
      <section className="flex flex-col items-center md:items-start max-w-xl flex-1">
        {/* Avatar Twitch agrandi */}
        <img
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/71bc8098-3df7-49c9-8dda-b500a8a198ac-profile_image-70x70.png"
          alt="Avatar Twitch"
          className="rounded-full w-32 h-32 mb-6 shadow-lg"
        />
        
        <h1 className="text-5xl font-bold mb-6 text-center md:text-left">🎁 Giveaway PS5 🎮</h1>
        
        <p className="mb-6 text-lg text-center md:text-left max-w-xl">
          Pour fêter les <strong>1000 followers</strong> sur la chaîne{" "}
          <a
            href="https://www.twitch.tv/unadopassibanal"
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 hover:underline"
          >
            UnAdoPassiBanal
          </a>
          , tu peux tenter de gagner une <strong>PS5</strong> ! Connecte-toi avec Twitch
          et clique pour participer 🎉
        </p>

        {!user ? (
          <button
            className="text-lg px-8 py-4 bg-purple-700 hover:bg-purple-600 rounded"
            onClick={loginWithTwitch}
          >
            Se connecter avec Twitch
          </button>
        ) : (
          <div className="text-center">
            <img
              src={user.avatar}
              alt="avatar"
              className="rounded-full w-20 h-20 mx-auto mb-3"
            />
            <p className="mb-5 text-xl">
              Connecté en tant que <strong>{user.username}</strong>
            </p>
            {!joined ? (
              <button
                onClick={handleJoin}
                className="bg-green-600 hover:bg-green-500 px-8 py-4 text-xl rounded"
              >
                Participer au tirage
              </button>
            ) : (
              <p className="text-2xl text-green-400 font-semibold mt-4">
                ✅ Participation enregistrée !
              </p>
            )}
          </div>
        )}

        <p className="mt-8 text-sm text-red-400 font-semibold max-w-xl text-center md:text-left">
          ⚠️ Attention : si la chaîne n’atteint pas les <strong>1000 followers</strong>, la PS5 ne sera pas offerte.
        </p>

        <footer className="mt-10 text-sm text-gray-400 text-center md:text-left">
          Ce giveaway n'est pas affilié à Twitch. Fin du concours : 30 juin 2025.
        </footer>
      </section>

      {/* Partie droite : règles */}
      <aside className="bg-black bg-opacity-40 p-6 rounded-lg max-w-md flex-shrink-0 text-left">
        <h2 className="text-3xl font-bold mb-4 border-b border-purple-600 pb-2">Règlement du Giveaway</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Suivre la chaîne Twitch <strong>UnAdoPassiBanal</strong></li>
          <li>Participer activement dans le chat pendant le live</li>
          <li>Avoir au moins 18 ans</li>
          <li>Résider en France (ou pays/région spécifique)</li>
          <li>Une seule participation par personne (pas de multi-comptes)</li>
          <li>Respecter les règles de Twitch et de la chaîne (pas de spam, pas d’insultes)</li>
          <li>Le gagnant sera tiré au sort en direct</li>
          <li>Le gagnant doit répondre dans les 48h, sinon un nouveau tirage sera effectué</li>
          <li>Le lot ne peut être échangé ni remboursé</li>
          <li>Le giveaway n’est pas sponsorisé par Twitch ou Sony</li>
          <li>Toute tentative de triche entraînera une disqualification immédiate</li>
          <li>L’organisateur se réserve le droit de modifier ou annuler le concours à tout moment</li>
          <li>Les résultats seront annoncés sur le stream et/ou via les réseaux sociaux</li>
        </ul>

        <p className="mt-6 text-xl font-bold text-purple-400 text-center">
          DEADLINE D'INSCRIPTION : <br /> <span className="underline">24 juin 2025</span>
        </p>
      </aside>
    </main>
  );
}
