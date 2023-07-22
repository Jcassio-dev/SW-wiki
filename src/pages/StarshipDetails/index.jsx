import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Fetching } from "../../components/Fetching";
import { Header } from "../../components/Header";

import { swapi } from "../../services/swapi";
import axios from "axios";

export function StarshipDetails(){
    const [isFetching, setIsFetching] = useState(true)
    const [data, setData] = useState();

    const [pilots, setPilots] = useState([])
    const [films, setFilms] = useState([])

    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        async function fetchDetails(){
            await swapi.get(`/starships/${params.id}`).then(({data}) => {setIsFetching(false), setData(data), console.log(data)})
        }
        fetchDetails()
    }, [])
    useEffect(() => {
        async function fetchPilots(){
            setPilots([])
            data.pilots.map(async pilot => {
                await axios.get(pilot).then(({data}) => {setPilots(prevState => [...prevState, data.name])})
            })
        }
        function fetchFilms(){
            data.films.map(async film => {
                await axios.get(film).then(({data}) => setFilms(prevState => [...prevState, data.title]))
            });
        }
        if(!isFetching){
            fetchPilots()
            fetchFilms()
        }
    }, [isFetching])

    return(
        <>
        <Header page={3}/>
        {isFetching ? 
            <Fetching/>
            :
            <main className="mt-28 desktop:px-40 tablet:px-30 mobile:px-14 w-full">
                <h1 className="desktop:text-5xl mobile:text-3xl font-bold text-center mb-2 animate-top">{data.name}</h1>
                <h2 className="desktop:text-3xl mobile:text-xl mobile:text-center desktop:text-left font-bold animate-left">Características Gerais</h2>
                <div className="w-full flex flex-col desktop:items-start mobile:items-center py-3 text-black rounded-md mt-2 animate-right">
                    <div className="desktop:w-auto mobile:w-56 grid desktop:grid-rows-3 desktop:grid-flow-col mobile:grid-rows-3 mobile:grid-cols-2 gap-3">
                        <p className="desktop:text-xl mobile:text-lg mr-4 bg-yellow-300 p-3 rounded-lg desktop:w-56 mobile:w-28 h-32"><strong>Modelo</strong>: <br/> {data.model}</p>
                        <p className="desktop:text-xl mobile:text-lg mr-4 bg-yellow-300 p-3 rounded-lg desktop:w-56 mobile:w-28 h-32"><strong>Produtora</strong>: <br/> {data.manufacturer}</p>
                        <p className="desktop:text-xl mobile:text-lg mr-4 bg-yellow-300 p-3 rounded-lg desktop:w-56 mobile:w-28 h-32"><strong>Valor</strong>: <br/> {data.cost_in_credits}</p>
                        <p className="desktop:text-xl mobile:text-lg mr-4 bg-yellow-300 p-3 rounded-lg desktop:w-56 mobile:w-28 h-32"><strong>velocidade Máxima</strong>: <br/> {data.max_atmosphering_speed}</p>
                        <p className="desktop:text-xl mobile:text-lg mr-4 bg-yellow-300 p-3 rounded-lg desktop:w-56 mobile:w-28 h-32"><strong>capacidade de carga</strong>: <br/> {data.cargo_capacity}</p>
                        <p className="desktop:text-xl mobile:text-lg mr-4 bg-yellow-300 p-3 rounded-lg desktop:w-56 mobile:w-28 h-32"><strong>Classe</strong>: <br/> {data.starship_class}</p>
                        <p className="desktop:text-xl mobile:text-lg mr-4 bg-yellow-300 p-3 rounded-lg desktop:w-56 mobile:w-28 h-32"><strong>Passageiros</strong>: <br/> {data.passengers}</p>
                    </div>
                </div>
                <div className="w-full grid desktop:grid-cols-2 desktop:grid-rows-1 mobile:grid-rows-2 mobile:grid-cols-1 items-start justify-between">
                    <div id="boxWrapper" className="w-full flex flex-col desktop:items-start mobile:items-center">
                        <h2 className="desktop:text-3xl mobile:text-xl font-bold mt-2 animate-left">Dados adicionais</h2>
                            <div className="desktop:w-96 mobile:w-64 flex flex-col items-start p-5 bg-yellow-300 text-black rounded-md mt-3 h-64 overflow-auto animate-right ">
                                <h3 className="text-xl font-bold">Pilotos</h3>
                                    <div className="flex flex-col gap-2 mt-1">
                                        {pilots.map((pilot, index) => <p className="desktop:text-xl mobile:text-lg mr-4" key={index}>{pilot}.</p>)}
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