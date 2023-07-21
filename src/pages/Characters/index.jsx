import {BsPerson} from 'react-icons/bs'
import { useState, useEffect } from "react";

import { swapi } from "../../services/swapi";

import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { ItemCard } from "../../components/ItemCard";
import { Fetching } from "../../components/Fetching";


export function Characters() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [isFetching, setFetching] = useState(true)
  useEffect(() => {
    async function fetchPeople(){
        await swapi.get(`/people`).then(({data}) => {setData(data.results), setFetching(false), console.log(data)})
    }
    fetchPeople();
  },  []);

  const filteredPeople = search.length > 0 
  ? data.filter(data => data.name.toLowerCase().includes(search)) 
  : data

 return (
    <>
      <Header page={1}/>
      {isFetching ? 
        <Fetching/>
        :
        <main className="mt-2 px-6 w-full">
        <Search onChange={e => setSearch(e.target.value.toLowerCase())}  value={search} placeholder="Pesquise o nome do personagem"/>
        <div className="w-9/12 grid desktop:grid-cols-2 tablet:grid-cols-2 mobile:grid-cols-1 mx-auto gap-y-2 animate-bottom" >
        {
          filteredPeople.map((people, index) => (
          <ItemCard key={index} 
          icon={BsPerson}
          title={people.name} 
          info1={`Altura: ${people.height/100} m`}
          info2={`Peso: ${people.mass} kg`}
          />
          ))
        }
        </div>
      </main>
      }
    </>
  )
}

