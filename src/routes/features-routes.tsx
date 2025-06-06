import { Route } from "react-router-dom";
import MatchPage from "@/pages/features/MatchPage";

export const FeaturesRoutes = () => (
    <>
        <Route path="/match" element={<MatchPage />} />
    </>
);
