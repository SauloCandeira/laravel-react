import "./styles.css";
// import { Tablex } from './styles'
import { Button } from "../../Buttons/Button";
import { Avatar } from "../../Avatar/Avatar";
import { Label } from "../../Label/Label"
import { format } from 'date-fns';
import { Link } from "react-router-dom";
import axios from 'axios';
import { FormEvent, useState, useEffect}from 'react';
import ModalY  from "../../Modals/ModalY/ModalY"
import { FaHome, FaPlus, FaEye, FaSyncAlt, FaArchive } from 'react-icons/fa'
import Badge from "../../Badge/Badge";
import Tooltip from "../../Tooltip/Tooltip";
import api from '../../../services/api'

export type TableProps = {
  children: string;
  variant: 'default' | 'primary' ;
  data: Object,
  columns: null,
  hover: true,
  striped: true,
  nome: string,
  query: string
}

export default function Table4({ data ,nome, hover = true, striped = true, variant, query }: TableProps) { 
    // console.log('data', data)
    // const [showModal, setShowModal] = useState(false)
    const [showModal, setShowModal] = useState({ isOpen: false, postId: null });
    const [filteredList, setFilteredList] = useState(data);

    // Fechar modal
    const handleOnClose = () => setShowModal({ isOpen: false, postId: null})
    

    const refreshPage = () => {
        window.location.reload();
    }

    // const arquivar = (e) =>{
    //     console.log(e)
    // }


    async function arquivar(id) {
        console.log(id)

        const res = await api.post('/api/arquivar/'+id)

        // console.log('res', res.status)
        if(res.data.status === 200)
        {
            console.log('entrou')
            window.alert(JSON.stringify(res.data.message))
            refreshPage()
        }

    }

    const filterBySearch = () => {

        var updatedList = data?.filter((item) => {
            return query.toLowerCase() === '' 
            ? item : (format(new Date(item.dt_inicio), 'ddMMyyyy')+-item.id_os).includes(query) 
            || item.condominio.no_condominio.toLowerCase().includes(query)
        });

        setFilteredList(updatedList);
    };
    

    useEffect(() => {
        filterBySearch()
    }, [query]);

    return (
        <>

            <div className="bg-white px-4 pt-3 pb-4 rounded-sm flex-1">

                <strong className="text-gray-700 font-medium">{nome}</strong>

                {filteredList?.length <= 0 && 
                    <h2 style={{ textAlign: 'center', fontStyle: 'italic' }}> Nenhuma OS </h2>
                }

                {filteredList?.length > 0 &&
                    <table key={Math.random()} className="table-auto overflow-x-auto w-full block">
    
                        <thead>
                            <tr style={{fontSize: '10px', color: '#8898aa'}}>
                                <th> CLIENTE </th>
                                <th></th>
                                <th> NÚMERO </th>
                                <th> ABERTURA </th>
                                <th> STATUS </th>
                                <th> TIPO </th>
                                <th> FUNCIONÁRIOS </th>
                                <th></th>
                            </tr>
                        </thead>

                        
                        <tbody>

                            {filteredList?.map((Client, index) => {
                                // console.log('Client', Client)

                                return (
                                    <tr key={index} className={`${hover && "hover"}`} >
                                        <td className="pl-8"> 
                                            {Client.condominio.no_condominio} 
                                        </td>
                                        <td style={{ alignItems: 'center', textAlign: 'center'}}> 
                                            {Client.nu_prioridade == 3 && (<> <Label variant="default"> Alta </Label> </>)} 
                                            {Client.nu_prioridade == 2 && (<> <Label variant="secondary"> Média </Label> </>)}
                                            {Client.nu_prioridade == 1 && (<> <Label variant="primary"> Baixa </Label> </>)}                                    
                                        </td>
                                        <td>

                                            {/* <div className="group flex relative">
                                                <span className="bg-red-400 text-white px-2 py-1">Button</span>
                                                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
                                                -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Tooltip</span>
                                            </div> */}

                                            
                                            <Tooltip message={"Clique para copiar"}>
                                                <Button 
                                                    size="m" 
                                                    variant="tertiary"
                                                    onClick={() =>  navigator.clipboard.writeText(format(new Date(Client.dt_inicio), 'ddMMyyyy')+-Client.id_os)}
                                                > 
                                                    {format(new Date(Client.dt_inicio), 'ddMMyyyy')+-Client.id_os}
                                                </Button> 
                                            </Tooltip>
                                            

                                        </td>
                                        <td> {format(new Date(Client.dt_inicio), 'dd/MM/yyyy kk:mm:ss')} </td>
                                        <td> <Badge variant="primary"/>  {Client.status.no_os_status} </td>
                                        <td> <Label variant='tertiary'>{Client.tipo.no_os_tipo} </Label> </td>
                                        <td> 
                                        <div key={Math.random()} style={{ display: 'grid',  margin: '0px 0px 0px 0px', gridTemplateColumns: 'repeat(auto-fill, 20px)'}}>
                                            {Client.lista_funcionarios?.map((Funcionario, index) => {
                                                return (
                                                    <div key={index}>
                                                        <Tooltip message={Funcionario.no_funcionario}>
                                                            <Avatar> 
                                                                {Funcionario.no_funcionario.charAt(0)} 
                                                            </Avatar> 
                                                        </Tooltip>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        </td>
                                        <td>

                                            <div className="flex flex-row">
                                                <Button 
                                                    onClick={() =>  setShowModal({ isOpen: true, postId: Client.id_os  })}
                                                    size="p" 
                                                    // variant="quaternary"
                                                    variant="outline"
                                                > 

                                                    <div className="text-center inline-flex items-center mr-2 ">
                                                        <FaEye className="m-1 h-3" /> Ver
                                                    </div>

                                                </Button>

                                                <ModalY onClose={handleOnClose} id={showModal.postId} visible={showModal.isOpen}/>

                                            
                                                <Button 
                                                    size="m" 
                                                    // variant="tertiary"
                                                    onClick={() => arquivar(Client.id_os)}
                                                    variant="secondary"
                                                > 
                                                    <div className="text-center inline-flex items-center mr-2 ">
                                                        <FaArchive className="m-1 h-3"/> Arquivar
                                                    </div>
                                                </Button>
                
                                            </div>
                                        
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>
                            
                }
                
                {data ? null : <h2 style={{ textAlign: 'center', fontStyle: 'italic' }}>Nenhuma OS</h2>}
            
            </div>
        </>
	)
}