import { useState, useEffect } from "react";
import { swapi } from "../../services/swapi";

import { Header } from "../../components/Header";
import { Search } from "../../components/Search";

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
  ? data.filter(data => data.name.toLowerCase().includes(search)) 
  : data

 return (
    <>
      <Header/>
      <main className="mt-2 px-6 w-full">
        <Search onChange={e => setSearch(e.target.value.toLowerCase())}  value={search} placeholder="Pesquise o nome do personagem"/>
        {
          filteredPeople.map((people, index) => <h1 key={index} className="">{people.name}</h1>)
        }
      </main>
      
    </>
  )
}

