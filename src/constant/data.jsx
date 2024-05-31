import bath1 from "../assets/images/Bathing_soap.png";
import bath2 from "../assets/images/shampoo.png";
import bath3 from "../assets/images/Makeup.png";
import bath4 from "../assets/images/shampoo.png";
import bath5 from "../assets/images/Hair_accessories.png";
import bath6 from "../assets/images/Face_care.png";
import fashion1 from "../assets/images/Fashion1.png";
import fashion2 from "../assets/images/Fashion2.png";
import fashion3 from "../assets/images/fashion3.png";
import fashion4 from "../assets/images/Fashion4.png";
import fashion5 from "../assets/images/Fashion5.png";
import fashion6 from "../assets/images/Fashion6.png";
import food1 from "../assets/images/Rice.png";
import food2 from "../assets/images/Toiletries.png";
import food3 from "../assets/images/Juices.png";
import food4 from "../assets/images/Liquor.png";
import food5 from "../assets/images/Wines.png";
import food6 from "../assets/images/Soft_Drinks.png";
import mobile1 from "../assets/images/CellPhone.png";
import mobile2 from "../assets/images/Mobile6.png";
import mobile3 from "../assets/images/iphones.png";
import mobile4 from "../assets/images/Phones5.png";
import mobile5 from "../assets/images/smartphones.png";
import mobile6 from "../assets/images/Tablets.png";
import sales1 from "../assets/images/BuyNow.gif";
import sales2 from "../assets/images/Grocery-Deals.png";
import sales3 from "../assets/images/Computing-Deals.png";
import sales4 from "../assets/images/flashsales4.png";
import sales5 from "../assets/images/flashsales5.png";
import sales6 from "../assets/images/flashsales6.png";
import sales7 from "../assets/images/flashsales7.png";
import sales8 from "../assets/images/flashsales8.png";
import sales9 from "../assets/images/flashsales9.png";
import sales10 from "../assets/images/flashsales10.png";
import sales11 from "../assets/images/flashsales11.png";
import sales12 from "../assets/images/flashsales12.png";
import phone from "../assets/logos/phone-icon-1.png";
import shop from "../assets/logos/icon-seller-1.png";
import deals from "../assets/logos/icon-2-return.png";

export const allPictures = [
  {
    id: 1,
    category: "Toiletries",
    data: [
      { name: "bathsoap", pic: bath1 },
      { name: "fragrance", pic: bath2 },
      { name: "toiletries", pic: bath3 },
      { name: "shampoo", pic: bath4 },
      { name: "hair care", pic: bath5 },
      { name: "face care", pic: bath6 },
    ],
  },
  {
    id: 2,
    category: "fashion wears",
    data: [
      { name: "women's wears", pic: fashion1 },
      { name: "kiddies", pic: fashion2 },
      { name: "men's shoes", pic: fashion3 },
      { name: "wristwatches", pic: fashion4 },
      { name: "men's wears", pic: fashion5 },
      { name: "women's shoes", pic: fashion6 },
    ],
  },
  {
    id: 3,
    category: "Food and Drinks",
    data: [
      { name: "rice", pic: food1 },
      { name: "household cleaning", pic: food2 },
      { name: "juice", pic: food3 },
      { name: "liquor", pic: food4 },
      { name: "wines", pic: food5 },
      { name: "soft drinks", pic: food6 },
    ],
  },
  {
    id: 4,
    category: "Phones and Gadgets",
    data: [
      { name: "cellphones", pic: mobile1 },
      { name: "phone accessories", pic: mobile2 },
      { name: "iphones", pic: mobile3 },
      { name: "mobile phones", pic: mobile4 },
      { name: "smartphones", pic: mobile5 },
      { name: "tablets", pic: mobile6 },
    ],
  },
];

import { LuApple } from "react-icons/lu";
import { CgHome } from "react-icons/cg";
import { PiCookingPot } from "react-icons/pi";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiMonitor } from "react-icons/ci";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { FaShirt } from "react-icons/fa6";
import { LuBaby } from "react-icons/lu";
import { IoGameControllerOutline } from "react-icons/io5";
import { GiWeightLiftingUp } from "react-icons/gi";
import { CiCircleMore } from "react-icons/ci";

export const asideData = [
  { id: 1, icon: <LuApple />, iconText: "superMarket" },
  { id: 2, icon: <CgHome />, iconText: "health & beauty" },
  { icon: <PiCookingPot />, iconText: "Home & Office" },
  { icon: <IoIosPhonePortrait />, iconText: "Appliencies" },
  { icon: <CiMonitor />, iconText: "phones & tablet" },
  { icon: <PiTelevisionSimpleLight />, iconText: "computing" },
  { icon: <FaShirt />, iconText: "Electronics" },
  { icon: <IoGameControllerOutline />, iconText: "Fashion" },
  { icon: <LuApple />, iconText: "Baby Products" },
  { icon: <IoGameControllerOutline />, iconText: "Gaming" },
  { icon: <GiWeightLiftingUp />, iconText: "Sporting Goods" },
  { icon: <CiCircleMore />, iconText: "Other Categories" },
];
export const clearanceSales = [
  { id: 1, name: "banner", pic: sales1 },
  { id: 2, name: "groceries", pic: sales2 },
  { id: 3, name: "laptops", pic: sales3 },
  { id: 4, name: "phone accessories", pic: sales4 },
  { id: 5, name: "generator", pic: sales5 },
  { id: 6, name: "home appliances", pic: sales6 },
  { id: 7, name: "clearance sales", pic: sales7 },
  { id: 8, name: "men fashion", pic: sales8 },
  { id: 9, name: "mobile phones", pic: sales9 },
  { id: 10, name: "television", pic: sales10 },
  { id: 11, name: "shoes", pic: sales11 },
  { id: 12, name: "refridgerator", pic: sales12 },
];

export const rightSide = [
  { id: 1, pic: phone, text: "CALL TO ORDER 0700600000" },
  { id: 2, pic: shop, text: "Sell on Jumia" },
  { id: 3, pic: deals, text: "Best Deals" },
];

export const footerData = [
  {
    heading: "NEED HELP?",
    list: [
      { text: "Chat with us" },
      { text: "Help Cente" },
      { text: "Contact Us" },
    ],
    headingTwo: "USEFUL LINKS",
    lists: [
      { text: "Service Center" },
      { text: "How to shop on Jumia?" },
      { text: "Delivery options and timelines" },
      { text: "How to return a product on Jumia?" },
      { text: "Corporate and bulk purchases" },
      { text: "Report a Product" },
      { text: "Dispute Resolution Policy" },
      { text: "Returns & Refund Timeline" },
      { text: "Return Policy" },
    ],
  },
  {
    heading: "ABOUT JUMIA",
    list: [
      { text: "About us" },
      { text: "Jumia careers" },
      { text: "Jumia Express" },
      { text: "Terms and Conditions" },
      { text: "Privacy Notice" },
      { text: "Jumia Store Credit Terms & Conditions" },
      { text: "Jumia Payment Information Guidelines" },
      { text: "Cookie Notice" },
      { text: "Jumia Global" },
      { text: "Official Stores" },
      { text: "Official Stores" },
      { text: "Tech Week 2024" },
    ],
  },
  {
    heading: "MAKE MONEY WITH JUMIA",
    list: [
      { text: "Sell on Jumia" },
      { text: "Vendor hub" },
      { text: "Become a Sales Consultant" },
      { text: "Become a Logistics Service Partner" },
      { text: "Join the Jumia DA Academy" },
      { text: "Join the Jumia KOL Program" },
    ],
  },
  {
    headingThree: "JUMIA INTERNATONAL",
    listTwo: [
      { text: "Algeria" },
      { text: "Egypt" },
      { text: "Ghana" },
      { text: "Ivory Coast" },
      { text: "Kenya" },
    ],
    listThree: [
      { text: "Morocco" },
      { text: "Senegal" },
      { text: "Tunisia" },
      { text: "Uganda" },
      { text: "Zando" },
    ],
  },
];
