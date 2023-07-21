import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Fetching } from "../../components/Fetching";
import { Header } from "../../components/Header";

import { swapi } from "../../services/swapi";
import axios from "axios";

export function PlanetDetails(){
    const [isFetching, setIsFetching] = useState(true)
    const [alredyFetched, setAlredyFetched] = useState(false);
    const [data, setData] = useState();

    const [habitants, setHabitants] = useState([])
    const [films, setFilms] = useState([])

    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        async function fetchDetails(){
            await swapi.get(`/planets/${params.id}`).then(({data}) => {setIsFetching(false), setData(data), console.log(data)})
        }
        fetchDetails()
    }, [])
    useEffect(() => {
        async function fetchHabitants(){
            setHabitants([])
            data.residents.map(async habitant => {
                await axios.get(habitant).then(({data}) => {setHabitants(prevState => [...prevState, data.name]), setAlredyFetched(true)})
            })
        }
        function contFilm(){
            data.films.map(film => setFilms(prevState => [...prevState, film]));
        }
        if(!isFetching){
            fetchHabitants()
            contFilm()
        }
    }, [isFetching])

    return(
        <>
        <Header page={2}/>
        {!alredyFetched ? 
            <Fetching/>
            :
            <main className="mt-28 desktop:px-40 tablet:px-30 mobile:px-14 w-full">
                <h1 className="desktop:text-5xl mobile:text-3xl font-bold text-center mb-2 animate-top">{data.name}</h1>
                <h2 className="desktop:text-3xl mobile:text-xl font-bold animate-left">Características Gerais</h2>
                <div className="flex flex-col items-center justify-center py-3 bg-yellow-300  text-black rounded-md mt-5 animate-right">
                    <div className="grid grid-rows-2 grid-flow-col gap-3 mt-3">
                        <p className="desktop:text-xl mobile:text-lg mr-4"><strong>Gravidade</strong>: <br/> {data.gravity} m/s²</p>
                        <p className="desktop:text-xl mobile:text-lg mr-4"><strong>Clima</strong>: <br/> {data.climate}</p>
                        <p className="desktop:text-xl mobile:text-lg mr-4"><strong>Population</strong>: <br/> {data.population}</p>
                        <p className="desktop:text-xl mobile:text-lg mr-4"><strong>Período Orbital</strong>: <br/> {data.orbital_period7} dias</p>
                        <p className="desktop:text-xl mobile:text-lg mr-4"><strong>Rotação</strong>: <br/> {data.rotation_period} horas</p>
                        <p className="desktop:text-xl mobile:text-lg mr-4"><strong>Terreno</strong>: <br/> {data.terrain}</p>
                    </div>
                </div>
                <h2 className="desktop:text-3xl mobile:text-xl font-bold mt-2 animate-left">Dados adicionais</h2>
                <div className="flex flex-col items-center justify-center p-5 bg-yellow-300 text-black rounded-md mt-3 animate-right">
                        <h3 className="text-1xl font-bold">Habitantes</h3>
                        <div className="grid grid-rows-2 grid-flow-col gap-2 mt-1">
                            {habitants.map((habitant, index) => <p className="desktop:text-xl mobile:text-lg mr-4" key={index}>{habitant}.</p>)}
                        </div>
                </div>
                <div className="flex flex-col items-center justify-center p-5 bg-yellow-300 text-black rounded-md mt-3 animate-bottom">
                        <h3 className="text-1xl font-bold">Participação</h3>
                        <p>Pariticipou de {films.length}/6 filmes</p>
                </div>

                <button onClick={() => navigate(-1)} className="flex flex-col items-center justify-center w-full text-2xl mt-2 font-bold underline cursor-pointer"> voltar</button>
            </main>
        }
        </>
    )
}