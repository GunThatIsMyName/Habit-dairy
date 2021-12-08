import {BiHome, BiHomeAlt} from "react-icons/bi";
import {BsPeopleFill} from "react-icons/bs";
import {MdOutlineCreate} from "react-icons/md";

export {BiHomeAlt};

export const storyCollection ="stories";


export const dateFormat = (secs)=>{
  return new Date(secs*1000).toISOString().substr(0,10)
}
export const likeRandom=()=>Math.floor(Math.random()*100);

export const headerList = [
  {id:1,text:"홈",icons:<BiHome /> ,path:"/"},
  {id:2,text:"둘러보기",icons:<BsPeopleFill /> ,path:"/feed"},
  {id:3,text:"나의 공간",icons:<MdOutlineCreate /> ,path:"/story"},
]