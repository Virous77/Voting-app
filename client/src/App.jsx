import React from "react";
import Header from "./components/Layouts/Header";
import Router from "./appRouter";

const App = () => {
  return (
    <main>
      <Header />
      <Router />
    </main>
  );
};

export default App;
