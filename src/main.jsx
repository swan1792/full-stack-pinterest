import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"; // make sure it's react-router-dom
import { ImageKitProvider } from "@imagekit/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(

  //Provide the client to your App
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ImageKitProvider
        urlEndpoint={import.meta.env.VITE_IMAGEKIT_IO_END_POINT}
      >
        <App />
      </ImageKitProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
