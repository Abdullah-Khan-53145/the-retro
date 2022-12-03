import React, { useState, useEffect } from "react";
import "../Styles/bannar.css";
import { collection, addDoc, query, getDocs } from "firebase/firestore";

import { db } from "../firebase";
function Bannar() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({
    status: false,
    error: false,
    message: "",
  });
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
          setMsg({
            status: true,
            error: false,
            message: "You've subscribed successfully",
          });
          setLoading(false);
          setEmail("");
          setUsers([...users, { email }]);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
          setMsg({
            status: true,
            error: true,
            message: "Some Error Occured, Please Try Again",
          });
          setLoading(false);
        });
    } else {
      setMsg({
        status: true,
        error: true,
        message: "Already subscribed",
      });
      setLoading(false);
    }
    setTimeout(() => {
      setMsg({
        status: false,
        error: false,
        message: "",
      });
    }, 3000);
  };
  const handleClick = (e) => {
    e.preventDefault();
    addUserToDb(email);
  };
  useEffect(() => {
    getUsersFromDb();
  }, []);
  return (
    <div className="main__bannar">
      <div className="main__child">
        <div className="img__main__bannar">
          <img loading="lazy" src="./imgs/bannar-picture.png" alt="" />
        </div>
        <div className="sub__main__bannar">
          <h2>Subscribe to our news letter to stay updated</h2>
          <form onSubmit={handleClick} className="cre__bannar">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <button className="primary-button" disabled={loading} type="submit">
              {loading ? <span className="loader"></span> : <>Subscribe</>}
            </button>
          </form>
          {msg.status && (
            <span
              style={{ color: msg.error ? "red" : "green" }}
              className="message"
            >
              {msg.message}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bannar;
