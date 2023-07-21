import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import emblem from '../../assets/emblem.svg'

import { Header } from "../../components/Header";
import { InputWrapper } from "../../components/InputWrapper";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";



export function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verify, setVerify] = useState(false)

    const { signIn } = useAuth()

    const navigate = useNavigate()

    function handleSignIn(){
        signIn({email, password})
    }
    async function handleSignUp(){
        if(!name || !email || !password){
         toast.warn("Preencha todos os campos!")
         return
        }

        await api.post("/users", {name, email, password})
        .then(() => {
            toast.success("Usuário cadastrado com sucesso!")
            handleSignIn({email, password})
            navigate('/')
        }).catch(error => {
            if(error.response){
                toast.error(error.response.data.message)
            }else{
                toast.error("Não foi possível cadastrar");
            }
        });
        
    }

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
            <h1 className='desktop:text-3xl mobile:text-xl font-bold text-center text-yellow-300 animate-top'>Una-se ao lado registrado da força!</h1>
            <div className="flex items-center justify-center my-5 animate-bottom">
                <div className="flex flex-col mobile:gap-5 desktop:gap-7 mobile:w-64 desktop:w-96 p-5 border border-yellow-300 rounded-md">
                    <img src={emblem} alt="Emblema do império galático" className='w-12 h-12 mx-auto'/>
                    <InputWrapper type="text" placeholder="Digite aqui seu nome" label={"Nome"} value={name} onChange={e => setName(e.target.value)}/>
                    <InputWrapper type="email" placeholder="Digite aqui seu email" label={"E-mail"} value={email} onChange={e => setEmail(e.target.value)}/>
                    <InputWrapper type="password" placeholder="Digite aqui sua senha" label={"Senha"} value={password} onChange={e => setPassword(e.target.value)}/>
                    <button onClick={handleSignUp} className="p-2 bg-yellow-300 text-black font-bold rounded-md cursor-pointer transition duration-300 hover:scale-105 disabled:brightness-75 disabled:cursor-default disabled:scale-100" disabled={!verify}>{verify? 'Registrar' : 'conectando...'}</button>
                    <span className="text-center">Já possui uma conta? <br/> <Link to="/" className="text-yellow-300 underline">Acesse aqui</Link></span>
                </div>
            </div>
        </main>
    </>
  )
}

