import style from './style.module.scss'
import React, { useEffect, useState } from 'react'
import axios from 'axios' 
import format from "date-fns/format"

export const Modal = (props) => {
    const {handleModal} = props;
    const [dataModal, setDataModal] = useState([])
    const [namePaciente, setNamePaciente] = useState("")
    const [texto, setTexto] = useState(false)
    const [sucess, setSucess] = useState(false)
    const [modal, setModal] = useState({
        modal: true,
    })

    useEffect(()=>{
       const data =  JSON.parse(localStorage.getItem("labsp/schedule"));
       setNamePaciente(data.nome)
        data.exames.map((value)=>{
            dataModal.push(value.name)
        });
        setTexto(true)
    },[])

    const handleCHangeModalCancel = ()=>{
        setModal({
            modal: false
        })
        window.location.reload(true)
    }

    function corrigirData(data){
        const dataNotHours = data.split(" ")[0]
        const ano = dataNotHours.split('-')[0]
        const mes = dataNotHours.split('-')[1]
        const dia = dataNotHours.split('-')[2]
        const newdata = `${dia}/${mes}/${ano}`;
        return newdata;
       }
    
       const sendEmailToConsumer = async ()=>{
            let schedule = await JSON.parse(localStorage.getItem("labsp/schedule"));
            axios.post("http://localhost:3333/sendEmail", schedule)
       }

    const handleChangeModal = async() => {
       
        let schedule = await JSON.parse(localStorage.getItem("labsp/schedule"));
        schedule.datanasc = corrigirData(schedule.datanasc);
        const request = await  axios.post('http://localhost:3333/create/os', schedule);
        if(request.data.success !== true){
            alert("Falha ao tentar criar OS")
        }else{
           setSucess(true)
           sendEmailToConsumer("Teste email")
        }
    }
    const ModalIndex = (
        <>
                <div className={style.modal}>
                    <div className={style.form}>
                        <div>
                          {/**  <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", textAlign: "initial", marginBottom: 25 }}>
                                <span style={{ fontSize: "1.5rem" }}>Para realizar o seu agendamento online:</span><br />
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", textAlign: "initial", marginBottom: 15 }}>
                                <span style={{ fontSize: "1.2rem", }}>- Esteja com o seu pedido médico.<br />
                                    - Vai fazer pelo convênio? Tenha em mãos o número da sua carteirinha, se for cliente unimed
                                    nos envie o número de autorização.</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", textAlign: "start", marginBottom: 10 }}>
                            <p>Termo de Aceite: Ao clicar em confirmar, você aceita ser contactado pelos nossos atendentes
                                via whatsapp, conforme nosso, <a href="https://saopaulopatologia.com.br/politica-de-privacidade">termo de privacidade</a>.
                            </p>
                            </div>*/
                            <div style={{ display: "flex", fontSize:20, alignItems: "center", justifyContent: "space-around", flexDirection:"column", textAlign: "center", marginBottom: 25 }}>
                               
                             {!sucess && <>
                               <h3>Confirmar Dados Da Ordem de Serviço:</h3>
                               <p>{namePaciente}</p>
                               <ul> {texto && dataModal.map((value)=>{
                                    return <li>{value}</li>
                                })}</ul>
                             </>}

                            </div> }
                            {sucess && 
                              <>
                               <p>OS criada com sucesso</p>
                               <button style={{margin:10}} onClick={()=> window.location.reload(true)}>Sair</button>
                              </>
                            }
                           {!sucess && <>
                           <button style={{margin:10}} onClick={handleChangeModal}>Confirmar</button>
                            <button onClick={handleCHangeModalCancel}>Cancelar</button>
                           </>}
                        </div>
                    </div>
                </div>
           

        </>
    )

    return (
        <>
            {modal.modal && ModalIndex}
        </>
    )
}

