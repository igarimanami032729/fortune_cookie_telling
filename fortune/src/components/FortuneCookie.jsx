import { useState } from "react";
import "./FortuneCookie.css";

function FortuneCookie({ onOpen, onReset, fortune }) {
  const [isBroken, setIsBroken] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  const handleClick = () => {
    if (isBroken) return;
    setIsBroken(true);
    setShowParticles(true);
    onOpen();

    setTimeout(() => {
      setShowParticles(false);
    }, 1000);
  };

  const handleReset = () => {
    setIsBroken(false);
    onReset();
  };

  const getFortuneClass = () => {
    if (!fortune || !fortune.type) return "";
    return `fortune-${fortune.type}`;
  };

  return (
    <div className="cookie-wrapper">
      {!isBroken ? (
        <>
          <div className="cookie closed" onClick={handleClick}></div>
          <p className="guide-text">당신의 2026년 운세를 뽑아보시겠습니까?</p>
          <p className="guide-text-two">(눌러보시오)</p>
        </>
      ) : (
        <>
          {showParticles && (
            <div className="particles">
              {[...Array(12)].map((_, i) => (
                <div key={i} className={`particle particle-${i + 1}`}></div>
              ))}
            </div>
          )}

          <div className="cookie broken">
            <div className="piece left"></div>
            <div className="piece right"></div>

            {fortune && (
              <div className={`paper ${getFortuneClass()}`}>
                {fortune.icon && (
                  <div className="fortune-icon">{fortune.icon}</div>
                )}
                <p>{fortune.text}</p>
              </div>
            )}
          </div>

          <button className="retry-btn" onClick={handleReset}>
            다시 뽑아보기
          </button>
        </>
      )}
    </div>
  );
}

export default FortuneCookie;
