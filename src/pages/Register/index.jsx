import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import emblem from '../../assets/emblem.svg'

import { Header } from "../../components/Header";
import { InputWrapper } from "../../components/InputWrapper";
import { api } from "../../services/api";


export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verify, setVerify] = useState(false)
    useEffect(()=>{
        async function verifyAPI(){
            await api.get('/users').then(({data}) => {setVerify(true), console.log(data)})
        }
        verifyAPI()

    }, [])
 return (
    <>
      <Header page={0}/>
        <main className="mt-32 desktop:px-40 tablet:px-30 mobile:px-14 w-full">
            <h1 className='desktop:text-3xl mobile:text-xl font-bold text-center text-yellow-300'>Una-se ao lado registrado da força!</h1>
            <div className="flex items-center justify-center my-5">
                <form className="flex flex-col mobile:gap-5 desktop:gap-7 mobile:w-64 desktop:w-96 p-5 border border-yellow-300 rounded-md">
                    <img src={emblem} alt="Emblema do império galático" className='w-12 h-12 mx-auto'/>
                    <InputWrapper type="email" placeholder="Digite aqui seu email" label={"E-mail"} value={email} onChange={e => setEmail(e.target.value)}/>
                    <InputWrapper type="password" placeholder="Digite aqui sua senha" label={"Senha"} value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className="p-2 bg-yellow-300 text-black font-bold rounded-md cursor-pointer transition duration-300 hover:scale-105 disabled:brightness-75 disabled:cursor-default disabled:scale-100" disabled={!verify}>{verify? 'Entrar' : 'conectando...'}</button>
                    <span className="text-center">Não possui uma conta? <br/> <Link to="/register" className="text-yellow-300 underline">Registre-se aqui</Link></span>
                </form>
            </div>
        </main>
    </>
  )
}