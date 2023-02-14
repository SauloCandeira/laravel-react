import "./styles.css";
// import { Tablex } from './styles'
import { Button } from "../../Buttons/Button";
import { Avatar } from "../../Avatar/Avatar";
import { Label } from "../../Label/Label"
import { format } from 'date-fns';
import { Link } from "react-router-dom";
import { useState } from 'react';
import ModalY  from "../../Modals/ModalY/ModalY"

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
                            return (
                                <tr key={index} className={`${hover && "hover"}`} >
                                    <td> {Client.condominio.no_condominio} </td>
                                    <td style={{ alignItems: 'center', textAlign: 'center'}}> 
                                        {Client.nu_prioridade === 3 && (<> <Label variant="default"> Alta </Label> </>)} 
                                        {Client.nu_prioridade === 2 && (<> <Label variant="secondary"> Média </Label> </>)}
                                        {Client.nu_prioridade === 1 && (<> <Label variant="primary"> Baixa </Label> </>)}                                    
                                    </td>
                                    <td> <Button size="m" variant="tertiary"> {format(new Date(Client.dt_inicio), 'ddMMyyyy')+-Client.id_os}</Button> </td>
                                    <td> {format(new Date(Client.dt_inicio), 'dd/MM/yyyy kk:mm:ss')} </td>
                                    <td> {Client.status.no_os_status} </td>
                                    <td> <Label variant='tertiary'>{Client.tipo.no_os_tipo} </Label> </td>
                                    <td> 
                                    <div key={Math.random()} style={{ display: 'grid',  margin: '0px 0px 0px 0px', gridTemplateColumns: 'repeat(auto-fill, 20px)'}}>
                                        {Client.lista_funcionarios?.map((Funcionario, index) => {
                                            return (
                                                <div key={index}>
                                                    <Avatar> 
                                                        {Funcionario.id_funcionario} 
                                                    </Avatar> 
                                                </div>
                                            )
                                        })}
                                    </div>
                                    </td>
                                    <td>

                                        <div className="flex flex-row">
                                            <Button 
                                                // onClick={() => setShowModal(true)}

                                                onClick={() =>  setShowModal({ isOpen: true, postId: Client.id_os  })}
                                                size="p" 
                                                variant="quaternary"> 
                                                {' '}Ver{' '} 
                                            </Button>

                                            <ModalY onClose={handleOnClose} id={showModal.postId} visible={showModal.isOpen}/>

                                            <Link to={'/arquivar/' + Client.id_os}> 
                                                <Button 
                                                size="m" 
                                                variant="tertiary"> 
                                                {' '}Arquivar{' '} 
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