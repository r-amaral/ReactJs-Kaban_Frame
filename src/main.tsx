import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Routes/router";
import AuthProvider from "./Context/AuthContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider>
            <DndProvider backend={HTML5Backend}>
                <AuthProvider>
                    <Router />
                </AuthProvider>
            </DndProvider>
        </ChakraProvider>
    </React.StrictMode>
);
