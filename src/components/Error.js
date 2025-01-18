import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err)
    return(
        <>
        <h1>Oops! you are here before i created it.. Give me some time</h1>
        <h3>{err.status} : {err.data}</h3>
        </>
    )
}   
export default Error;
