// import { getDefaultNormalizer } from "@testing-library/react";
import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosData = () => {
    // console.log("axios data()");
    axios
      .get(url)
      .then((res) => {
        // console.log("statsustext: ", res.statusText);
        console.log("STATUS: ", res.status);
        if (res.status === 200) {
          const person = res.data.results[0];
          console.log(person);
          const newPerson = {
            name: person.name.first + " " + person.name.last,
            gender: person.gender,
            age: person.dob.age,
            phone: person.phone,
            image: person.picture.large,
            email: person.email,
          };
          setPeople(newPerson);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getData = async () => {
    const reply = await fetch(url);
    if (reply.status >= 200 && reply.status < 299) {
      const data = await reply.json();
      // console.log(data);
      const person = data.results[0];
      // console.log(person);
      // console.log(data.results[0]);
      // console.log(data.info);
      const newPerson = {
        name: person.name.first + " " + person.name.last,
        gender: person.gender,
        age: person.dob.age,
        phone: person.phone,
        image: person.picture.large,
        email: person.email,
      };
      setPeople(newPerson);
      //   console.log(newPerson);
      setLoading(false);
    }
  };

  useEffect(() => {
    // getData();
    axiosData();
  }, []);

  return { people, loading };
};

export default useFetch;
