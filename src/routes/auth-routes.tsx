import { Route } from "react-router-dom";
import HomePage from "@/pages/authentication/HomePage";

export const AuthRoutes = () => (
    <>
        <Route path="/" element={<HomePage />} />
    </>
);
