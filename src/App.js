import { useState } from "react";
import Question from "./components/Question";
import FinalScreen from "./components/FinalScreen";

function App() {
  const [showFinal, setShowFinal] = useState(false);

  const handleYes = () => {
    setShowFinal(true);
  };

  return (
    <main
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
      }}
      className="flex items-center justify-center"
    >
      {showFinal ? (
        <FinalScreen />
      ) : (
        <Question
          imageSrc="/1.png"
          questionText="Vil du være Valentinen min?"
          onYes={handleYes}
        />
      )}
    </main>
  );
}

export default App;
