import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const [categoryId, setCategoryId] = useState("1");

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    const googlePopup = signInWithPopup(auth, googleProvider)
      .then((result) => setUser(result.user))
      .catch((error) => console.error(error));

    return () => googlePopup();
  };

  const signInWithGithub = () => {
    const githubProvider = new GithubAuthProvider();
    const githubPopup = signInWithPopup(auth, githubProvider)
      .then((result) => setUser(result.user))
      .catch((error) => setError(error));

    return () => githubPopup();
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    error,
    createUser,
    logOut,
    signIn,
    signInWithGoogle,
    signInWithGithub,
    categoryId,
    setCategoryId,
    setError,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProviders.propTypes = {
  children: PropTypes.object,
};

export default AuthProviders;
