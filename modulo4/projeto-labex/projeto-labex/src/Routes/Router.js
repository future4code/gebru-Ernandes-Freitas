import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from "../Pages/AdminHomePage"
import ApplicationFormPage from "../Pages/ApplicationFormPage"
import CreateTripPage from "../Pages/CreateTripPage"
import HomePage from "../Pages/HomePage"
import ListTripsPage from "../Pages/ListTripsPage"
import PageErro from "../Pages/PageErro"
import TripDetailsPage from "../Pages/TripDetailsPage"
import LoginPage from "../Pages/LoginPage"

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>

                <Route index element={<HomePage />} />
                <Route path="ListTripsPage" element={<ListTripsPage/>}/>
                <Route path="ApplicationFormPage" element={<ApplicationFormPage/>}/>
                <Route path="AdminHomePage" element={<AdminHomePage/>}/>
                <Route path="CreateTripPage" element={<CreateTripPage/>}/>
                <Route path="LoginPage" element={<LoginPage/>}/>
                <Route path="TripDetailsPage" element={<TripDetailsPage/>}/>
                <Route path="*" element={<PageErro />} />

            </Routes>
        </BrowserRouter>
    )

};