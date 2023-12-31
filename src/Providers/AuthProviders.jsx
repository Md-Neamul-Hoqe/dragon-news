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
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const [categoryId, setCategoryId] = useState("1");

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    const googlePopup = signInWithPopup(auth, googleProvider)
      .then((result) => setUser(result.user))
      .catch((error) => setError(error));

    return () => googlePopup();
  };

  const signInWithGithub = () => {
    setLoading(true);
    const githubProvider = new GithubAuthProvider();
    const githubPopup = signInWithPopup(auth, githubProvider)
      .then((result) => setUser(result.user))
      .catch((error) => setError(error));

    return () => githubPopup();
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    error,
    loading,
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
