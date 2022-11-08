import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName} from "./LazyLoad.slice";

const LazyLoad = () => {
  const { name } = useSelector((state) => state.LazyLoad);
  const dispatch = useDispatch();
  return (
    <>
    
      <div>
       {name}
      </div>
     
    
      <button onClick={()=>dispatch(changeName("john"))}>changeName</button>
    </>
  );
};

export default LazyLoad;
