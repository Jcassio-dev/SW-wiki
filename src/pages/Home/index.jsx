import { useState, useEffect } from "react";
import { swapi } from "../../services/swapi";

import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { ItemCard } from "../../components/ItemCard";

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
      <Header page={1}/>
      <main className="mt-2 px-6 w-full">
        <Search onChange={e => setSearch(e.target.value.toLowerCase())}  value={search} placeholder="Pesquise o nome do personagem"/>
        <div className="w-9/12 grid desktop:grid-cols-2 tablet:grid-cols-2 mobile:grid-cols-1  place-content-center mx-auto gap-y-2" >
        {
          filteredPeople.map((people, index) => (
          <ItemCard key={index} 
          title={people.name} 
          height={people.height}
          mass={people.mass}
          />
          ))
        }
        </div>
      </main>
      
    </>
  )
}

