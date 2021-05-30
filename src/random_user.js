import React from "react";
import useFetch from "./useFetch";

const url = "https://api.randomuser.me/";

const Random_user = () => {
  const { people, loading } = useFetch(url);
  //   console.log(people);
  //   console.log(loading);

  if (loading) {
    return <h1 className="container">Loading..</h1>;
  }
  return (
    <div className="container">
      {/* {loading && <h2>Loading..</h2>} */}
      <div className="item">
        <img src={people.image} alt={people.name} />
        <p>
          <b>Name: </b>
          {people.name}
          <br></br>
          <b>Gender: </b>
          {people.gender}
          <br></br>
          <b>Email: </b>
          {people.email}
          <br></br>
          <b>Age: </b>
          {people.age}
          <br></br>
          <b>Phone:</b> {people.phone}
        </p>
      </div>
    </div>
  );
};

export default Random_user;
