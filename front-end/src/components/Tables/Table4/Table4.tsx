import "./styles.css";
// import { Tablex } from './styles'
import { Button } from "../../Buttons/Button";
import { Avatar } from "../../Avatar/Avatar";
import { Label } from "../../Label/Label"
import { format } from 'date-fns';
import { Link } from "react-router-dom";
import { useState } from 'react';
import ModalY  from "../../Modals/ModalY/ModalY"
import { FaHome, FaPlus, FaEye, FaSyncAlt, FaArchive } from 'react-icons/fa'
import Badge from "../../Badge/Badge";

export type TableProps = {
  children: string;
  variant: 'default' | 'primary' ;
  data: Object,
  columns: null,
  hover: true,
  striped: true,
  nome: string
}

export default function Table4({ data ,nome, hover = true, striped = true, variant }: TableProps) { 
    console.log('data', data)
    // const [showModal, setShowModal] = useState(false)
    const [showModal, setShowModal] = useState({ isOpen: false, postId: null });
    // const [state, setState] = useState({ isOpen: false, postId: null });
    const handleOnClose = () => setShowModal({ isOpen: false, postId: null})
  
    
    return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm flex-1">
			<strong className="text-gray-700 font-medium">{nome}</strong>

                    <table key={Math.random()} className="table-auto overflow-x-auto w-full block">
                        {data && 
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
                        }
                        <tbody>
                        {data && data.map((Client, index) => { 
                            // console.log(Client)
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
                                    <td> <Button size="m" variant="tertiary"> {format(new Date(Client.dt_inicio), 'ddMMyyyy')+-Client.id_os}</Button> </td>
                                    <td> {format(new Date(Client.dt_inicio), 'dd/MM/yyyy kk:mm:ss')} </td>
                                    <td> <Badge variant="primary"/>  {Client.status.no_os_status} </td>
                                    <td> <Label variant='tertiary'>{Client.tipo.no_os_tipo} </Label> </td>
                                    <td> 
                                    <div key={Math.random()} style={{ display: 'grid',  margin: '0px 0px 0px 0px', gridTemplateColumns: 'repeat(auto-fill, 20px)'}}>
                                        {Client.funcionario?.map((Funcionario, index) => {
                                            return (
                                                <div key={index}>
                                                    <Avatar> 
                                                        {Funcionario.no_funcionario.charAt(0)} 
                                                    </Avatar> 
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
                                                variant="quaternary"
                                            > 
   
                                                <div className="text-center inline-flex items-center mr-2 ">
                                                    <FaEye className="m-1" /> Ver
                                                </div>

                                            </Button>

                                            <ModalY onClose={handleOnClose} id={showModal.postId} visible={showModal.isOpen}/>

                                            <Link to={'/arquivar/' + Client.id_os}> 
                                                <Button 
                                                    size="m" 
                                                    variant="tertiary"
                                                > 
                                                
                                                <div className="text-center inline-flex items-center mr-2 ">
                                                    <FaArchive className="m-1"/> Arquivar
                                                </div>

                                                
                                                </Button>
                                            </Link>
                                        </div>
                                    
                                    </td>
                                </tr>
                            )})}
                        </tbody>
                    </table>

                {data ? null : <h2 style={{ textAlign: 'center', fontStyle: 'italic' }}>Nenhuma OS</h2>}
		</div>
	)
}