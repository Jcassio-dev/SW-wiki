import { IoPlanetOutline } from 'react-icons/io5';
import { useState, useEffect } from "react";

import { swapi } from "../../services/swapi";

import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { ItemCard } from "../../components/ItemCard";
import { Fetching } from "../../components/Fetching";

export function Planets() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [isFetching, setFetching] = useState(true)
  useEffect(() => {
    async function fetchPlanets(){
        await swapi.get(`/planets/?page=1`).then(({data}) => {setData(data.results), setFetching(false), console.log(data)})
    }
    fetchPlanets();
  },  []);

  const filteredPeople = search.length > 0 
  ? data.filter(data => data.name.toLowerCase().includes(search)) 
  : data

 return (
    <>
      <Header page={2}/>
      {isFetching ? 
        <Fetching/>
        :
        <main className="my-4 desktop:px-40 tablet:px-30 mobile:px-14  w-full">
        <div className='w-full my-4 flex items-center justify-between animate-left'>
          <h1 className='desktop:text-3xl mobile:text-xl font-bold text-yellow-300'>Planetas</h1>
          <Search onChange={e => setSearch(e.target.value.toLowerCase())}  value={search} placeholder="Pesquise o nome do planeta"/>
        </div>
        <div className="w-full grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-y-2 animate-bottom" >
        {
          filteredPeople.map((planeta, index) => (
          <ItemCard key={index} 
          icon={IoPlanetOutline}
          title={planeta.name} 
          section={'Orbita'}
          info1={`Rotação: ${planeta.rotation_period} horas`}
          info2={`Translação: ${planeta.orbital_period} dias`}
          />
          ))
        }
        </div>
      </main>
      }
    </>
  )
}

