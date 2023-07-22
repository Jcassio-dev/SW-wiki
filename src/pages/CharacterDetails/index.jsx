import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Fetching } from "../../components/Fetching";
import { Header } from "../../components/Header";

import { swapi } from "../../services/swapi";
import axios from "axios";

export function CharacterDetails(){
    const [isFetching, setIsFetching] = useState(true)

    const [data, setData] = useState();

    const [vehicles, setVehicles] = useState([])
    const [starships, setStarships] = useState([])

    const [planet, setPlanet] = useState()
    const [films, setFilms] = useState([])

    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        async function fetchDetails(){
            await swapi.get(`/people/${params.id}`).then(({data}) => {setIsFetching(false), setData(data)})
        }
        fetchDetails()
    }, [])
    useEffect(() => {
        async function fetchPlanet(){
            await axios.get(data.homeworld).then(({data}) => setPlanet(data.name));
        }
        async function fetchVehicles(){
            setVehicles([])
            data.vehicles.map(async vehicle => {
                await axios.get(vehicle).then(({data}) => {setVehicles(prevState => [...prevState, data.name])})
            })
        }
        async function fetchStarships(){
            setStarships([])
            data.starships.map(async starship => {
                await axios.get(starship).then(({data}) => {setStarships(prevState => [...prevState, data.name])})
            })
        }
        function fetchFilms(){
            data.films.map(async film => {
                await axios.get(film).then(({data}) => setFilms(prevState => [...prevState, data.title]))
            });
        }
        if(!isFetching){
            fetchPlanet()
            fetchVehicles()
            fetchStarships()
            fetchFilms()
        }
    }, [isFetching])

    return(
        <>
        <Header page={1}/>
        {isFetching ? 
            <Fetching/>
            :
            <main className="mt-28 desktop:px-40 tablet:px-30 mobile:px-14 w-full">
                <h1 className="desktop:text-5xl mobile:text-3xl font-bold text-center mb-1 animate-top">{data.name}</h1>
                <h2 className="desktop:text-3xl mobile:text-xl mobile:text-center desktop:text-left font-bold animate-left">Características físicas</h2>
                <div className="w-full flex flex-col desktop:items-start mobile:items-center py-3 text-black rounded-md mt-2 animate-right">
                    <div className="desktop:w-auto mobile:w-56 grid desktop:grid-rows-2 desktop:grid-flow-col mobile:grid-rows-3 mobile:grid-cols-2 gap-3">
                        <p className="desktop:text-xl mobile:text-lg mr-4 bg-yellow-300 p-3 rounded-lg desktop:w-56 mobile:w-28 h-28"><strong>Altura</strong> <br/> {data.height/100} m</p>
                        <p className="desktop:text-xl mobile:text-lg mr-4 bg-yellow-300 p-3 rounded-lg desktop:w-56 mobile:w-28 h-28"><strong>Massa</strong> <br/> {data.mass} kg</p>
                        <p className="desktop:text-xl mobile:text-lg mr-4 bg-yellow-300 p-3 rounded-lg desktop:w-56 mobile:w-28 h-28"><strong>Cor do cabelo</strong> <br/> {data.hair_color}</p>
                        <p className="desktop:text-xl mobile:text-lg mr-4 bg-yellow-300 p-3 rounded-lg desktop:w-56 mobile:w-28 h-28"><strong>Cor de pele</strong> <br/> {data.skin_color}</p>
                        <p className="desktop:text-xl mobile:text-lg mr-4 bg-yellow-300 p-3 rounded-lg desktop:w-56 mobile:w-28 h-28"><strong>Gênero</strong> <br/> {data.gender}</p>
                        <p className="desktop:text-xl mobile:text-lg mr-4 bg-yellow-300 p-3 rounded-lg desktop:w-56 mobile:w-28 h-28"><strong>Planeta Natal</strong> <br/> {planet}</p>
                    </div>
                </div>
                <div className="w-full grid desktop:grid-cols-2 desktop:grid-rows-1 mobile:grid-rows-2 mobile:grid-cols-1 items-start justify-between">
                    <div id="boxWrapper" className="w-full flex flex-col desktop:items-start mobile:items-center">
                        <h2 className="desktop:text-3xl mobile:text-xl font-bold mt-2 animate-left">Dados adicionais</h2>
                            <div className="desktop:w-96 mobile:w-64 flex flex-col items-start p-5 bg-yellow-300 text-black rounded-md mt-3 h-64 overflow-auto animate-right ">
                                <h3 className="text-xl font-bold">Veículos</h3>
                                    <div className="flex flex-col gap-2 mt-1">
                                        {vehicles.map((vehicle, index) => <p className="desktop:text-xl mobile:text-lg mr-4" key={index}>{vehicle}.</p>)}
                                        {starships.map((starship, index) => <p className="text-xl mobile:text-lg mr-4" key={index}>{starship}.</p>)}
                                    </div>
                            </div>
                        </div>
                    <div id="boxWrapper" className="w-full flex flex-col desktop:items-start mobile:items-center">
                        <h2 className="desktop:text-3xl mobile:text-xl font-bold mt-2 animate-left">Participação</h2>
                            <div className="desktop:w-96 mobile:w-64 flex flex-col items-start p-5 bg-yellow-300 text-black rounded-md mt-3 h-64 overflow-auto animate-right">
                                <div className="flex flex-col gap-2 mt-1">
                                    <p>Teve participação em {films.length} de um total de 6</p>
                                    <div className="flex flex-col gap-2 mt-1">
                                        {films.map((film, index) => <p className="desktop:text-xl mobile:text-lg mr-4" key={index}>{film}.</p>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <button onClick={() => navigate(-1)} className="flex flex-col items-center justify-center mb-2 w-full text-2xl mt-2 font-bold underline cursor-pointer"> voltar</button>
            </main>
        }
        </>
    )
}