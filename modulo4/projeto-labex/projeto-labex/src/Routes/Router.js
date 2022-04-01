import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from "../Pages/AdminHomePage/AdminHomePage"

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>

                <Route index element={<HomePage />} />
                <Route path="about/:language" element={<AboutPage />} />
                <Route path="*" element={<ErrorPage />} />

            </Routes>
        </BrowserRouter>
    )

}