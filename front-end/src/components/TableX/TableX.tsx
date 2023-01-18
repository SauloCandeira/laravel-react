import "./styles.css";
// import { Tablex } from './styles'
import { Button } from "../Buttons/Button";
import { Avatar } from "../Avatar/Avatar";
import { Label } from "../Label/Label"

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
            </tr>
          </thead>
          <tbody>
            {data.map((Client, index) => { 
              console.log( 'data.map', Client)
              return (
                <tr key={index} className={`${hover && "hover"}`} >
                    <td> {Client.cliente} </td>
                    <td> <Label variant="primary"> {Client.prioridade}</Label> </td>
                    <td> <Button size="g" variant="tertiary"> {Client.numero} </Button> </td>
                    <td> {Client.abertura} </td>
                    <td> {Client.status} </td>
                    <td> <Label variant='tertiary'>{Client.tipo} </Label> </td>
                    <td> 
                      <div style={{ display: 'grid',  margin: '0px 0px 0px 0px', gridTemplateColumns: 'repeat(auto-fill, 20px)'}}>
                      {/* <div style={{ display: 'grid', gridAutoFlow: 'column', margin: '0px 0px 0px 0px'}}> */}
                        {/* {Client.funcionarios.map((Funcionario, index) => {
                          return(
                              <Avatar> 
                                {Funcionario} 
                              </Avatar> 
                          )
                        })} */}
                      </div>
                    </td>
                    <td>
                      <Button size="p" variant="quaternary"> {' '}Ver{' '} </Button>
                      <Button size="m" variant="tertiary"> {' '}Arquivar{' '} </Button>
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