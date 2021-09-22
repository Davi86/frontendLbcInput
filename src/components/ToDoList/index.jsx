import React, { useEffect, useState } from 'react';
import './style.css';
import { ChakraProvider, Button, Input, InputMask } from "@chakra-ui/react"
import { Modal } from '../Modal'
import axios from 'axios';

const data = [

    {
        name: 'HEMOGRAMA',
        codigo: 'HEPE2',
        descricao: "SANGUE",
        material: "SG"
    },
    {
        name: "HBSAG",
        codigo: "HBSAGDB",
        descricao: "SANGUE",
        material: "SG"
    },
    {
        name: "ANTI HBS",
        codigo: "HBQL",
        descricao: "SANGUE",
        material: "SG"
    },
    {
        name: "TGO",
        codigo: "TGO",
        descricao: "SANGUE",
        material: "SG"
    },
    {
        name: "TGP",
        codigo: "TGP",
        descricao: "SANGUE",
        material: "SG"
    },
    {
        name: "BILIRRUBINA",
        codigo: "BILI",
        descricao: "SANGUE",
        material: "SG"
    },
    {
        name: "HIVTR",
        codigo: "HIVTR",
        descricao: "SANGUE",
        material: "SG"
    },
    {
        name: "HIV DB",
        codigo: "HIV DB",
        descricao: "SANGUE",
        material: "SG"
    },
    {
        name: "UREIA",
        codigo: "UREIA",
        descricao: "SANGUE",
        material: "SG"
    },
    {
        name: "CREATININA",
        codigo: "CREAT",
        descricao: "SANGUE",
        material: "SG"
    },
    {
        name: "GLICEMIA",
        codigo: "GLICO",
        descricao: "SANGUE",
        material: "SG"
    },
    {
        name: "ANTI HCV",
        codigo: "HCVDB",
        descricao: "SANGUE",
        material: "SG"
    }

]


export const ToDoList = () => {

    const [dataLeft, setDataLeft] = useState(data)

    const [dataRight, setDataRight] = useState([])

    const [modal, setModal] = useState(false)

    const handleChangeRight = (dataLeftProps) => {
        setDataRight((prev) => ([...prev, dataLeftProps]))
        dataLeft.splice(dataLeft.indexOf(dataLeftProps), 1);
    }

    const handleChangeLeft = (dataRightProps) => {
        setDataLeft((prev) => ([...prev, dataRightProps]))
        dataRight.splice(dataRight.indexOf(dataRightProps), 1);
    }

    const handleSubmit = async (dataRightProps) => {
        setModal(true);
      
       let schedule = await JSON.parse(localStorage.getItem("labsp/schedule"));
       const exames = Object.assign(schedule,{exames: dataRightProps });
       localStorage.setItem('labsp/schedule', JSON.stringify(exames));
    }

    const sortBy = (objectProps) => {
        return objectProps.sort((a, b) => {
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        })
    }

   const handleModal = ()=>{
        setModal(false)
    }

    const loading = ()=>{
        window.location.reload(true)
    }

    const modalCheck = (
        <>
            <Modal handleModal={handleModal} data={handleSubmit}/>
        </>
    )

    return (
        <>
           {!modal ? <ChakraProvider>
                <h1 style={{textAlign:'center', marginBottom:-26, fontSize:22}}>Agora basta realizar a consulta dos exames a serem realizados pelo beneficiário para confirmar a geração da ordem de serviço.</h1>
                
                <Input 
                className="input_container"
                placeholder="Search"
                
                // onChange={handleChange}
                // onKeyUp={async (e) =>
                //   (e.target.value).replace(/[^0-9]/g, "").length == 11 ?
                //     await validaCpfCadastrado((e.target.value).replace(/[^0-9]/g, ""))
                //     : ""}
                autoFocus={true}>
                </Input>
                <div className={'root'}>
                    <div className={'main'}>
                        
                        <div className={'container2'}>
                            <h1>LISTA DE EXAMES</h1>
                            <div className={'container'}>
                                
                                {sortBy(dataLeft).map((value, i) => {
                                    return <Button colorScheme="facebook" className={'buttonSelected'} onClick={() => handleChangeRight(dataLeft[i])} key={value.codigo}>
                                        {value.name}
                                    </Button>
                                })}
                            </div>
                        </div>
                        <div className={'container2'}>
                            <h1>EXAMES SELECIONADOS</h1>
                            <div className={'container'}>
                            
                                {sortBy(dataRight).map((value, i) => {
                                    return <Button colorScheme="facebook" className={'buttonSelected'} onClick={() => handleChangeLeft(dataRight[i])} key={value.codigo}>
                                        {value.name || ""}
                                    </Button>
                                })}
                            </div>
                        </div>
                    </div>
                <div>
                <Button onClick={() => loading()} colorScheme="facebook" className={'buttonSelected'} >
                       Voltar
                </Button>
                <Button onClick={() => handleSubmit(dataRight)} colorScheme="facebook" className={'buttonSelected'} >
                        Gerar OS
                 </Button>
                    
                </div>
                </div>
            </ChakraProvider> : modalCheck}
        </>
    )
}
