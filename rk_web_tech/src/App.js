import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/HomePage/Home";
import AboutUs from "./containers/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import Services from "./containers/ServicesPage/Services";
import SapServices from "./containers/SAPServices/SapServices";
import PrivacyPolicy from "./containers/PrivacyPolicy/PrivacyPolicy";
import CustomSoftwareDevelopment from "./containers/CustomSoftwareDevelopment/CustomSoftwareDevelopment";
import WebsiteDevelopment from "./containers/WebApplicationDevelopment/WebsiteDevelopment";
import MobileApplicationDevelopment from "./containers/MobileApplicationDevelopment/MobileApplicationDevelopment";
import HireDeveloper from "./containers/HireDeveloper/HireDeveloper";
import Portfolio from "./containers/Portfolio/Portfolio";
import ITConsulting from "./containers/ITConsulting/ITConsulting";
import ContactUs from "./containers/ContactUs/ContactUs";
import Blog from "./containers/Blog/Blog";
import PortfolioDetail from "./containers/PortfolioDetail/PortfolioDetail";
import Inquiry from "./containers/Inquiry/Inquiry";
import BlogDetail from "./containers/BlogDetail/BlogDetail";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path={`/services/sap-services`} element={<SapServices />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path={`services/custom-software-development`}
          element={<CustomSoftwareDevelopment />}
        />
        <Route
          path={`services/web-application-development`}
          element={<WebsiteDevelopment />}
        />
        <Route path={`/services`}>
          <Route
            path={`mobile-application-development`}
            element={<MobileApplicationDevelopment />}
          />
        </Route>

        <Route path="/hire-developer" element={<HireDeveloper />} />
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        <Route path={`/services/it-consulting`} element={<ITConsulting />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/inquiry" element={<Inquiry />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
