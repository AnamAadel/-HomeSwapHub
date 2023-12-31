import axios from "axios";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { app } from "../../firebase.config";
import useAxiosSecure from "../hooks/useAxiosSecure";
const myContext = createContext(null);

export const AuthContexts = () => {
  return useContext(myContext);

}

function AuthProvider({ children }) {
  const [searchData, setSearchData] = useState([])
  
  console.log(searchData)
  const [user, setUser] = useState(null)
  const [mongoCurrentUser, setMongoCurrentUser] = useState(null)
  const [userPhoto, setUserPhoto] = useState(null);
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const storage = getStorage(app)
  const authProviderGoogle = new GoogleAuthProvider();
  const authProviderGithub = new GithubAuthProvider();
  const {myBaseUrl} = useAxiosSecure(); 


  const createUser = (email, password, userName, file) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password).then(result => {
      // sendEmailVerification(auth.currentUser).then(()=> console.log("email varification send to  your email!")).catch(err => console.log(err))

      const storageRef = ref(storage, `users/${result.user.uid}.jpg`);

      console.log(storageRef.fullPath)


      uploadBytes(storageRef, file).then((snapshot) => {

        getDownloadURL(storageRef).then((url => {
          const userImage = file ? url : null;

          console.log(url)
          setUserPhoto(userImage);
          setUserName(userName);

          updateProfile(auth.currentUser, { displayName: userName, photoURL: userImage }).then(async () => {
            console.log("profile updated!")
            setLoading(false);

            const user = { userName, email, userImage, creationTime: result.user.metadata.creationTime, lastLoginTime: result.user.metadata.lastSignInTime, status: "active" }
            
            
            myBaseUrl.post("/add_user", user).then(res => console.log(res.data)).catch(err => console.log(err))


          }).catch(error => console.log(error));
        })).catch((err) => console.log(err))

      }).catch((err) => console.log(err))

      setUser(result.user)
      console.log(result.user);
      toast.success("User created successfully!", {
        theme: "colored",
        toastId: "success"

      });
    }).catch(error => {
      console.log(error)
      setLoading(false);
      toast.warn(`${error}`, {
        theme: "colored"
      });
    })
    // const user = auth.currentUser;
  }

  const signInUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password).then(result => {
      setUser(result.user)
      console.log(result);
      setLoading(false);
      toast.success("User login successfully!", {
        theme: "colored",
        toastId: "success"

      });

      const user = { userName: result.user.displayName , email, userImage: result.user.photoURL, creationTime: result.user.metadata.creationTime, lastLoginTime: result.user.metadata.lastSignInTime, status: "active" }

      myBaseUrl.post("/add_user", user).then(res => console.log(res.data)).catch(err => console.log(err))


    }).catch(error => {
      console.log(error)
      setLoading(false);
      toast.warn('An error happened', {
        theme: "colored"
      });
    })
  }

  const logOutUser = () => {
    signOut(auth).then(() => {
      // 
      myBaseUrl.delete("/logout").then(res => console.log(res.data)).catch(err => console.log(err));

      toast.success("Sign-out successful.", {
        theme: "colored",
        toastId: "success"
      });
    }).catch((error) => {
      // An error happened.
      console.log(error)
      toast.warn(`An error happened`, {
        theme: "colored"
      });
    });
  }


  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, authProviderGoogle).then(async (result) => {
      setUser(result.user)
      setLoading(false);
      toast.success("Login successfully!", {
        theme: "colored",
        toastId: "success"

      });

      const user = { userName: result.user.displayName, email: result.user.email, userImage: result.user.photoURL, creationTime: result.user.metadata.creationTime, lastLoginTime: result.user.metadata.lastSignInTime, status: "active" }

      myBaseUrl.post("/add_user",user).then(res => console.log(res.data)).catch(err => console.log(err))


    }).catch(error => {
      console.log(error)
      setLoading(false);
      toast.warn(`An error happened`, {
        theme: "colored"
      });
    })
  }

  const handleGithubSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, authProviderGithub).then(async (result) => {
      console.log(result);
      setUser(result.user)
      setLoading(false);

      const user = { userName: result.user.displayName, email: result.user.email, userImage: result.user.photoURL, creationTime: result.user.metadata.creationTime, lastLoginTime: result.user.metadata.lastSignInTime, status: "active" }
      

      axios.post("/add_user",user).then(res => console.log(res.data)).catch(err => console.log(err))


      toast.success("User login successfully!", {
        theme: "colored",
        toastId: "success"

      });
    }).catch(error => {
      console.log(error)
      setLoading(false);
      toast.warn(`An error happened`, {
        theme: "colored"
      });
    })
  }


  const authValue = {
    handleGoogleSignIn,
    handleGithubSignIn,
    createUser,
    signInUser,
    logOutUser,
    user,
    loading,
    userPhoto,
    userName,
    mongoCurrentUser,
    searchData,
    setSearchData
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);

      setUser(currentUser);
      setUserName(currentUser?.displayName);
      setUserPhoto(currentUser?.photoURL)
      setLoading(false)
    })

    function fetchData(){
      myBaseUrl.get("/services/all").then(res => setSearchData(res.data)).catch(err => console.log(err))
  }
  fetchData()

    return unsubscribe
  }, [auth, myBaseUrl])

  return (
    <myContext.Provider value={authValue}>
      {children}
    </myContext.Provider>
  )
}
AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
  ]).isRequired,
};

export default AuthProvider




