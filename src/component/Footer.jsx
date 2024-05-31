// import React from "react";
// import Logo from "../assets/logos/jumia-logo.png";
// // import "./Footer.css";
// import { footerData } from "../constant/data";
// // import FooterChild from "./FooterChild";
// export default function Footer() {
//   return (
//     <>
//       <div className="footer">
//         <div className="foot">
//           <div>
//             <Logo width="100px" />
//           </div>
//           <div>
//             <p>NEW TO JUMIA</p>
//             <p>
//               Subscribe to our newsletter to get updates on our latest offers!
//             </p>
//             <div>
//               <input type="text" />
//               <button>MALE</button>
//               <button>FEMALE</button>
//             </div>
//             <input type="checkbox" name="" id="" />
//             <span>
//               I agree to Jumia’s Privacy and Cookie Policy. You can unsubscribe
//               from newsletters at any time.
//             </span>
//             <p>I accept the Legal Terms</p>
//           </div>
//           <div>
//             <div className="footer-end">
//               <img src="" alt="star" />
//               <div>
//                 <p>DOWNLOAD FREE JUMIA APP</p>
//                 <p>Get access to exclusive offers!</p>
//               </div>
//             </div>
//             <div className="footer-end2">
//               <img src="" alt="App Store" />
//               <img src="" alt="Google Play" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className="blu">
//           {footerData.map(
//             ({
//               heading,
//               list,
//               headingTwo,
//               lists,
//               listThree,
//               listTwo,
//               headingThree,
//             }) => {
//               return (
//                 <FooterChild
//                   heading={heading}
//                   list={list}
//                   headingTwo={headingTwo}
//                   lists={lists}
//                   listsThr={listThree}
//                   listTwo={listTwo}
//                   headingThree={headingThree}
//                 />
//               );
//             }
//           )}
//         </div>
//       </div>
//     </>
//   );
// }
