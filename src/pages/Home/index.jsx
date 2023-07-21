import {BsPerson} from 'react-icons/bs'
import { useState, useEffect } from "react";

import { swapi } from "../../services/swapi";

import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { ItemCard } from "../../components/ItemCard";
import { Fetching } from "../../components/Fetching";


export function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [isFetching, setFetching] = useState(true)
  useEffect(() => {
    async function fetchPeople(){
        await swapi.get(`/people/?page=1`).then(({data}) => {setData(data.results), setFetching(false), console.log(data)})
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
        <main className="mt-28 desktop:px-40 tablet:px-30 mobile:px-14 w-full">
        <div className='w-full my-4 flex items-center justify-between animate-left'>
          <h1 className='desktop:text-3xl mobile:text-xl font-bold text-yellow-300'>Personagens</h1>
          <Search onChange={e => setSearch(e.target.value.toLowerCase())}  value={search} placeholder="Pesquise o nome do personagem"/>
        </div>
        <div className="w-full grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-y-2 animate-bottom" >
        {
          filteredPeople.map((people, index) => (
          <ItemCard key={index} 
          icon={BsPerson}
          title={people.name} 
          section={'Aparência física'}
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

