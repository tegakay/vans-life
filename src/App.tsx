import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import { About } from "./pages/About";

import { Vans } from "./pages/Vans";
import { VanDetail } from "./pages/VanDetail";

import "./server";
import { Layoutcomp } from "./components/Layoutcomp";
import { Income } from "./pages/Host/Income";
import { Reviews } from "./pages/Host/Reviews";
import { Hostlayout } from "./pages/Host/Hostlayout";
import { Dashboard } from "./pages/Host/Dashboard";
//import { Van } from "./pages/Host/Van";
import { Hostvans } from "./pages/Host/Hostvans";
import { HostVanLayout } from "./pages/Host/HostVanLayout";
import { HostVanphotos } from "./pages/Host/HostVanphotos";
import { Hostvaninfo } from "./pages/Host/Hostvanpricing";
import { HostVanDetails } from "./pages/Host/HostVanDetails";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layoutcomp />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />

            <Route path="host" element={<Hostlayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<Hostvans />} />
              <Route path="vans/:id" element={<HostVanLayout />}>
                <Route index element={<HostVanDetails />} />
                <Route path="photos" element={<HostVanphotos />} />
                <Route path="pricing" element={<Hostvaninfo />} />
              </Route>
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
