import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../server";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext({});
const useAuth = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({});
  const provider = new GoogleAuthProvider();
  const token = authData?.accessToken ? true : false;
  const tokenAccess = authData?._tokenResponse;

  const navigate = useNavigate();
  const signin = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res, "news 23");
      setAuthData(res.user);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };
  const signOutLog = async () => {
    try {
      const res = await signOut(auth);
      console.log(res);
      setAuthData(res);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (current) => {
      setAuthData(current);
    });
    return () => {
      unsubcribe();
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{ signin, token, signOutLog, tokenAccess, authData }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, useAuth };
