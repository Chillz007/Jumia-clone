import banner from "./assets/logos/TOP-STRIP_FASHION-WEEK.gif";
import "./component/navigation.css";
import NavigationBar from "./component/NavigationBar";
import star from "./assets/logos/starr.png";
import Logo from "./component/Logo";
import SearchBar from "./component/SearchBar";
import OtherBar from "./component/OtherBar";
import Background from "./component/Background";
import logo from "./assets/logos/jumia-logo.png";
import Main from "./component/Main";

export default function App() {
  return (
    <div>
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
          <a>
            <img width="10%" src={star} alt="" />
            <span style={{ fontSize: "small" }}>Sell on Jumia</span>
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

      {/* <Main></Main> */}
    </div>
  );
}
