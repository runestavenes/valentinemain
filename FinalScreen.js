import React from "react";

const FinalScreen = () => {
  return (
    <div className="flex flex-col items-center px-4">
      <img src="/final.gif" alt="Ferdig" width={200} />
      <span
        className="font-bold mb-6 text-2xl text-center"
        style={{
          textShadow: "2px 2px white",
          textWrap: "balance",
        }}
      >
        Best det... Jeg gleder meg til vår Valentine-date! 💖
      </span>
      <p
        className="text-lg text-center"
        style={{
          textShadow: "1px 1px white",
        }}
      >
        Flere detaljer kommer snart... 😊
      </p>
    </div>
  );
};

export default FinalScreen;
