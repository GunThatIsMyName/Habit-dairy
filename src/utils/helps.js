import {BiHome, BiHomeAlt} from "react-icons/bi";

export {BiHomeAlt};


export const fileCheck = ["image/jpeg","image/png"];

export const list = [
  {
    id: 123456789,
    company: "Apple",
    job: "front-end Developer",
    info: "React JS workflow lorem sarh de monchdy delvem monemdy monlm,m ",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    salary: "3600",
    workAt: "서울 가산 디지털 단지",
    author:"이 준현"
  },
  {
    id: 12345789,
    company: "Nike",
    job: "Nike Back-end Developer",
    info: "React JS workflow lorem sarh de monchdy delvem monemdy monlm,m ",
    image:
      "https://images.unsplash.com/photo-1513188732907-5f732b831ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    salary: "4000",
    workAt: "서울 홍대",
    author:"스티브 잡스"
  },
];

export const headerList = [
  {id:1,text:"Home",icons:<BiHome /> ,path:"/"},
  {id:2,text:"dream",icons:<BiHome /> ,path:"/dream"},
  {id:3,text:"shop",icons:<BiHome /> ,path:"/shop"},
]