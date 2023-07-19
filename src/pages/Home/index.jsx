import { useState, useEffect } from "react";
import { swapi } from "../../services/swapi";

import { Header } from "../../components/Header";

export function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchPeople(){
        await swapi.get(`/people`).then(({data}) => {setData(data.results), console.log(data)})
    }
    fetchPeople();
  },  []);

  const filteredPeople = search.length > 0 
  ? data.filter(data => data.name.includes(search)) 
  : data

 return (
    <>
      <Header/>
      <input type="text" onChange={e => setSearch(e.target.value)}  value={search}className="text-black"/>
    {
      filteredPeople.map((people, index) => <h1 key={index} className="">{people.name}</h1>)
    }
    </>
  )
}

