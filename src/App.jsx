import banner from "./assets/logos/TOP-STRIP_FASHION-WEEK.gif";
import "./component/navigation.css";
import NavigationBar from "./component/NavigationBar";
import star from "./assets/logos/starr.png";
import Logo from "./component/Logo";
import SearchBar from "./component/SearchBar";
import OtherBar from "./component/OtherBar";
import logo from "./assets/logos/jumia-logo.png";
import Main from "./component/Main";
import AllPictures from "./component/AllPictures";
import ClearanceSales from "./component/ClearanceSales";
import Hero from "./component/Hero";
// import Footer from "./component/Footer";

export default function App() {
  return (
    <div style={{ margin: "px 0" }}>
      <NavigationBar type="Banner">
        <img src={banner} alt="" />
      </NavigationBar>
      <NavigationBar type="BannerTwo">
        <div
          style={{
            marginTop: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "50%",
            // height: "10px",
          }}
        >
          <a style={{ display: "flex", gap: "px" }}>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                margin: "0",
              }}
            >
              <img width="40%" src={star} alt="" />
            </div>
            <span style={{ fontSize: "small", marginLeft: "0" }}>
              Sell on Jumia
            </span>
          </a>
          <Logo imageSrc={logo} alt="jumia-logo" width="60px" />
        </div>
      </NavigationBar>
      <NavigationBar type="BannerThree">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "15px 0",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Logo imageSrc={logo} alt="jumia-logo" width="150px" />
          <SearchBar />
          <OtherBar />
        </div>
      </NavigationBar>

      <Hero />
      <ClearanceSales />

      <Main />
      {/* <Footer /> */}
    </div>
  );
}
