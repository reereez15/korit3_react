import { useContext } from "react";
import AuthContext from "./AuthContext";

export default function MyComponent() {
  const authContext = useContext(AuthContext);
  
  return(
    <>
      <h1>안녕하세요, {authContext}</h1>
    </>
  )
}