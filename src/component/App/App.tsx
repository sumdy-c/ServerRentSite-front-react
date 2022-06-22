import * as React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";
import LayoutBarHeader from "../LayoutBarHeader/LayoutBarHeader";
import AboutPage from "../Pages/AboutPage/AboutPage";
import HostingPage from "../Pages/HostingPage/HostingPage";
import RentPage from "../Pages/RentPage/RentPage";
import OptRentPage from "../Pages/OptRentPage/OptRentPage";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutBarHeader />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="hosts" element={<HostingPage />} />
          <Route path="rntsrv" element={<RentPage />} />
          <Route path="optrntsrv" element={<OptRentPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
