import React from "react";
import Header from "./components/Layouts/Header";
import Router from "./appRouter";
import Notification from "./components/AppNotification/Notification";

const App = () => {
  return (
    <main>
      <Header />
      <Router />
      <Notification />
    </main>
  );
};

export default App;
