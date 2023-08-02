// App.js
import React, { useRef, useState } from "react";
import "./App.css";
import SectionOne from "./Sections/SectionOne";
import SectionTwo from "./Sections/SectionTwo";

const App = () => {
  const sectionTwoRef = useRef(null);
  const [sharedData, setSharedData] = useState(null);

  const handleScrollToSectionTwo = () => {
    sectionTwoRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <SectionOne handleScrollToSectionTwo={handleScrollToSectionTwo} />
      <div ref={sectionTwoRef}>
        <SectionTwo setSharedData={setSharedData} />
      </div>
      {sharedData && (
        <div className="sharedData">
          <h2>Shared Data:</h2>
          <pre>{JSON.stringify(sharedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
