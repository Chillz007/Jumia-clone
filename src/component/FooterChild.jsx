// import React from "react";
// import "./Footer.css";
// export default function FooterChild({
//   heading,
//   headingTwo,
//   list,
//   lists,
//   listThree,
//   listTwo,
//   headingThree,
// }) {
//   return (
//     <>
//       <div className="footer-content">
//         <h2>{heading}</h2>
//         <div>
//           {list?.map(({ text }) => {
//             return (
//               <p>
//                 <a href="/" className="footer-link">
//                   {text}
//                 </a>
//               </p>
//             );
//           })}
//           <h2>{headingTwo}</h2>
//           {lists?.map(({ text }) => {
//             return (
//               <p>
//                 <a href="/" className="footer-link">
//                   {text}
//                 </a>
//               </p>
//             );
//           })}
//           <h2>{headingThree}</h2>
//           <div className="list">
//             <div>
//               {listTwo?.map(({ text }) => {
//                 return (
//                   <p>
//                     <a href="/" className="footer-link">
//                       {text}
//                     </a>
//                   </p>
//                 );
//               })}
//             </div>
//             <div>
//               {listThree?.map(({ text }) => {
//                 return (
//                   <p>
//                     <a href="/" className="footer-link">
//                       {text}
//                     </a>
//                   </p>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
