import { useState, useEffect } from "react";
import { swapi } from "../../services/swapi";

import { Header } from "../../components/Header";

export function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchPeople(){
        await swapi.get(`/people`).then(({data}) => {setData(data.results), console.log(data)})
    }
    fetchPeople();
},  []);

 return (
    <>
      <Header/>
    {
      data.map((people, index) => <h1 key={index} className="">{people.name}</h1>)
    }
    </>
  )
}

