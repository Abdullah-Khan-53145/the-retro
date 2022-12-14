import React, { useState, useEffect } from "react";
import { collection, addDoc, query, getDocs } from "firebase/firestore";
import { Toaster, toast } from "react-hot-toast";
import "../Styles/bannar.css";

import { db } from "../firebase";
function Bannar() {
  // states
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState("");

  // funtions
  const containsObject = (obj, list) => {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].email.toLowerCase() === obj.email.toLowerCase()) {
        return true;
      }
    }

    return false;
  };
  const getUsersFromDb = async () => {
    const q = query(collection(db, "subscribedUsers"));
    let arr = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (!containsObject(doc.data(), arr)) {
        arr.push(doc.data());
      }
    });
    setUsers(arr);
  };
  const addUserToDb = async (email) => {
    setLoading(true);
    if (!containsObject({ email }, users)) {
      addDoc(collection(db, "subscribedUsers"), {
        email,
      })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          toast.success("Subscribed successfully", { border: "2px solid red" });
          setLoading(false);
          setEmail("");
          setUsers([...users, { email }]);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
          setLoading(false);
        });
    } else {
      toast.error("You've Already subscribed");

      setLoading(false);
    }
  };

  const positionSetter = () => {
    if (window.innerWidth >= 756) {
      setPosition("bottom-center");
    } else {
      setPosition("top-center");
    }
  };

  // Click handlers
  const handleClick = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      toast.error("Please Enter the  Email");
    } else {
      if (
        email.toLowerCase().includes("@") &&
        email.toLowerCase().includes(".com")
      ) {
        addUserToDb(email);
      } else {
        toast.error("Please Enter the valid Email");
      }
    }
  };

  // use Effect
  useEffect(() => {
    window.addEventListener("resize", positionSetter);
    getUsersFromDb();
    return () => window.removeEventListener("resize", positionSetter);
  }, []);

  return (
    <>
      <Toaster
        position={position}
        reverseOrder={true}
        toastOptions={{
          className: "",
          duration: 2000,
          style: {
            background: "#363636",
            fontFamily: "poppins",
            borderRadius: "0",
            fontSize: "1.5rem",
            color: "#fff",
          },
        }}
      />
      <div className="main__bannar">
        <div className="main__child">
          <div className="img__main__bannar">
            <img loading="lazy" src="./imgs/bannar-picture.png" alt="" />
          </div>
          <div className="sub__main__bannar">
            <h2>Subscribe to our news letter to stay updated</h2>
            <form onSubmit={handleClick} className="cre__bannar">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <button
                className="primary-button"
                disabled={loading}
                type="submit"
              >
                {loading ? <span className="loader"></span> : <>Subscribe</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bannar;
