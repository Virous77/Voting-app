import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Web3ContextProvider } from "./store/web3Context";
import { GlobalContextProvider } from "./store/globalContext";
import { VoteContextProvider } from "./store/voteContext";

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <GlobalContextProvider>
          <Web3ContextProvider>
            <VoteContextProvider>
              <App />
            </VoteContextProvider>
          </Web3ContextProvider>
        </GlobalContextProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
