import { Routes, Route } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import {AuthRoutes} from "@/routes/auth-routes.tsx";
import {FeaturesRoutes} from "@/routes/features-routes.tsx";

export const AppRoutes = () => (
    <Routes>
        {AuthRoutes()}
        {FeaturesRoutes()}
        <Route path="*" element={<NotFound />} />
    </Routes>
);
