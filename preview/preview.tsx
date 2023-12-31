import { PDFViewer } from "@react-pdf/renderer";
import React from "react";
import ReactDOM from "react-dom/client";
import PDF from "../src";

const App = () => (
  <PDFViewer style={{ width: "100%", height: "100%" }}>{PDF}</PDFViewer>
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
