import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "../Views/Login";
import Register from "../Views/Register";
import { DashBoardTemplate } from "../Components/DashBoardTemplate";
import { Boards, Reports, Settings, Teams } from "../Views/DashBoard";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/dashboard/boards"
                    element={
                        <DashBoardTemplate>
                            <Boards />
                        </DashBoardTemplate>
                    }
                />
                <Route
                    path="/dashboard/equipes"
                    element={
                        <DashBoardTemplate>
                            <Teams />
                        </DashBoardTemplate>
                    }
                />
                <Route
                    path="/dashboard/relatorios"
                    element={
                        <DashBoardTemplate>
                            <Reports />
                        </DashBoardTemplate>
                    }
                />
                <Route
                    path="/dashboard/ajustes"
                    element={
                        <DashBoardTemplate>
                            <Settings />
                        </DashBoardTemplate>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
