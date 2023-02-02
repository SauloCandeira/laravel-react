import "./styles.css";
// import { Tablex } from './styles'
import { Button } from "../../Buttons/Button";
import { Avatar } from "../../Avatar/Avatar";
import { Label } from "../../Label/Label"
import { format } from 'date-fns';
import { Link } from "react-router-dom";
import { useState } from 'react';
import ModalX from "../../Modals/ModalX/ModalX";

export type TableProps = {
  children: string;
  variant: 'default' | 'primary' ;
  data: Object,
  columns: null,
  hover: true,
  striped: true,
}

export function TableX({ data , hover = true, striped = true, variant }: TableProps) { 
  console.log('Data TableX', data)

  const [showModal, setShowModal] = useState(false)
  const handleOnClose = () => setShowModal(false)

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
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
            {data.map((Client, index) => { 
              console.log( 'data.map', Client)
              return (
                <tr key={index} className={`${hover && "hover"}`} >
                    <td> {Client.condominio.no_condominio} </td>
                    <td style={{ alignItems: 'center', textAlign: 'center'}}> 
                        {Client.nu_prioridade === 3 && (<> <Label variant="default"> Alta </Label> </>)} 
                        {Client.nu_prioridade === 2 && (<> <Label variant="secondary"> Média </Label> </>)}
                        {Client.nu_prioridade === 1 && (<> <Label variant="primary"> Baixa </Label> </>)}                                    
                    </td>
                    <td> <Button size="g" variant="tertiary"> {format(new Date(Client.dt_inicio), 'ddMMyyyy')+-Client.id_os}</Button> </td>
                    <td> {format(new Date(Client.dt_inicio), 'dd/MM/yyyy kk:mm:ss')} </td>
                    <td> {Client.status.no_os_status} </td>
                    <td> <Label variant='tertiary'>{Client.tipo.no_os_tipo} </Label> </td>
                    <td> 
                      <div style={{ display: 'grid',  margin: '0px 0px 0px 0px', gridTemplateColumns: 'repeat(auto-fill, 20px)'}}>
                        {Client.lista_funcionarios?.map((Funcionario, index) => {
                          return (
                            <Avatar> 
                            {Funcionario.id_funcionario} 
                            </Avatar> 
                          )

                        })}
                      </div>
                    </td>
                    <td>
                      
                      <Button 
                        onClick={() => setShowModal(true)}
                        size="p" 
                        variant="quaternary"> 
                        {' '}Ver{' '} 
                      </Button>

                      <ModalX onClose={handleOnClose} visible={showModal}/>

                      <Link to={'/arquivar/' + Client.id_os}> 
                        <Button 
                          size="m" 
                          variant="tertiary"> 
                          {' '}Arquivar{' '} 
                        </Button>
                      </Link>
                    </td>
                </tr>
              )
            })}

          </tbody>
        </table>

        {data ? null : <h2 style={{ textAlign: 'center' }}>Nenhuma OS</h2>}
      </div>
    </>
  );
};

export default TableX;