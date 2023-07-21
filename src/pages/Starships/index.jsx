import { PiRocketLaunchBold } from 'react-icons/pi'
import { useState, useEffect } from "react";
import { swapi } from "../../services/swapi";

import { Header } from "../../components/Header";
import { SearchHeader } from "../../components/SearchHeader";
import { ItemCard } from "../../components/ItemCard";
import { Fetching } from "../../components/Fetching";

export function Starships() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [isFetching, setIsFetching] = useState(true)
  useEffect(() => {
    async function fetchStarships(){
        await swapi.get(`/starships`).then(({data}) => {setData(data.results), setIsFetching(false),console.log(data)})
    }
    fetchStarships();
  },  []);

  const filteredStarships = search.length > 0 
  ? data.filter(data => data.name.toLowerCase().includes(search)) 
  : data

 return (
    <>
      <Header page={3}/>
      {isFetching ? 
        <Fetching/>
        :
        <main className="mt-28 mb-3 desktop:px-40 tablet:px-30 mobile:px-14   w-full">
        <SearchHeader title="Planetas"  onChange={e => setSearch(e.target.value.toLowerCase())}  value={search} placeholder="Pesquise o nome da nave"/>
        <div className="w-full grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 mx-auto gap-y-2 animate-bottom" >
        {
          filteredStarships.map((starship, index) => (
          <ItemCard key={index} 
          icon={PiRocketLaunchBold}
          title={starship.name} 
          section={"Geral"}
          info1={`Classe: ${starship.starship_class}`}
          info2={`Custo: ${starship.cost_in_credits} créditos`}
          link={`/starshipDetails/${index+2}`}
          />
          ))
        }
        </div>
      </main>
      }
    </>
  )
}

