import { useState } from "react";
import LoadingContext from "./LoadingContext";




const LoadingContextProvider = (props) => {
    const [loadingProgress,setLoadingProgress]=useState(0);



  return (
    <LoadingContext.Provider value={setLoadingProgress}>
        {props.childern}
    </LoadingContext.Provider>
  )
}

export default LoadingContextProvider;
