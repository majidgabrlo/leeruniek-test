import React from "react";
import Plans from "./components/plans/Plan";
import data from "./defaultData";
function App() {
  const { PLAN } = data;
  return (
    <div className="App">
      {Array.isArray(PLAN) ? (
        PLAN.map((item) => (
          <Plans key={item.id} name={item.name} author={item.userCreated} />
        ))
      ) : (
        <Plans name={PLAN.name} author={PLAN.userCreated} />
      )}
    </div>
  );
}

export default App;
