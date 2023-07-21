import { useState, useEffect } from "react";
import { swapi } from "../../services/swapi";

import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { ItemCard } from "../../components/ItemCard";

export function Starships() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchStarships(){
        await swapi.get(`/starships`).then(({data}) => {setData(data.results), console.log(data)})
    }
    fetchStarships();
  },  []);

  const filteredStarships = search.length > 0 
  ? data.filter(data => data.name.toLowerCase().includes(search)) 
  : data

 return (
    <>
      <Header page={3}/>
      <main className="mt-2 px-6 w-full">
        <Search onChange={e => setSearch(e.target.value.toLowerCase())}  value={search} placeholder="Pesquise o nome da nave"/>
        <div className="w-9/12 grid desktop:grid-cols-2 tablet:grid-cols-2 mobile:grid-cols-1  place-content-center mx-auto gap-y-2" >
        {
          filteredStarships.map((starship, index) => (
          <ItemCard key={index} 
          title={starship.name} 
          info1={`Classe: ${starship.starship_class}`}
          info2={`Custo: ${starship.cost_in_credits} créditos`}
          />
          ))
        }
        </div>
      </main>
      
    </>
  )
}

