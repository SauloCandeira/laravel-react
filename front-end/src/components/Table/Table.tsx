import "./styles.css";
// import { Tablex } from './styles'
import { Button } from "../../components/Buttons/Button";
import { Avatar } from "../../components/Avatar/Avatar";
import { Label } from "../../components/Label/Label"
import { backgroundClip } from "html2canvas/dist/types/css/property-descriptors/background-clip";

export type TableProps = {
  children: string;
  variant: 'default' | 'primary' ;
  data: null,
  columns: null,
  hover: true,
  striped: true,
}

export function Table({hover = true, striped = true, variant }: TableProps) { 

  // const Table = ({
  //   data = null,
  //   columns = null,
  //   hover = true,
  //   striped = true,
  //   variant,
  // }) => {


  // const getCaps = (head, field) => {
  //   if (head) return head.toUpperCase();
  //   return field.toUpperCase();
  // };

  const data = [
    {
      cliente: 'Residencial das Palmeiras',
      prioridade: "ALTA",
      numero: "202301026452",
      abertura: "02/01/23 às 14:15",
      status: "Fechada",
      tipo: "SERVIDOR DO OFFLINE",
      funcionario:["R"],
      variant: 'default'
    },
    {
      cliente: 'Residencial das Palmeiras',
      prioridade: "MEDIA",
      numero: "202301026452",
      abertura: "02/01/23 às 14:15",
      status: "Fechada",
      tipo: "ATENDIMENTO MORADOR - TAG",
      funcionario: ["R", "AV"],
      variant: 'primary'
    },
    {
      cliente: 'Residencial das Palmeiras',
      prioridade: "BAIXA",
      numero: "202301026452",
      abertura: "02/01/23 às 14:15",
      status: "Fechada",
      tipo: "INSTALAÇÃO DE EQUIPAMENTO",
      funcionario: ["R", "AV", "TT"],
      variant: 'secondary'
    }
  ];

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
              
              return (
                <tr key={index} className={`${hover && "hover"}`} >
                    <td> {Client.cliente} </td>
                    <td> <Label variant={Client.variant}> {Client.prioridade}</Label> </td>
                    <td> <Button size="g" variant="tertiary"> {Client.numero} </Button> </td>
                    <td> {Client.abertura} </td>
                    <td> {Client.status} </td>
                    <td> <Label variant='tertiary'>{Client.tipo} </Label> </td>
                    <td> 
                      <div style={{ display: 'grid',  margin: '0px 0px 0px 0px', gridTemplateColumns: 'repeat(auto-fill, 20px)'}}>
                      {/* <div style={{ display: 'grid', gridAutoFlow: 'column', margin: '0px 0px 0px 0px'}}> */}
                        {Client.funcionario.map((Funcionario, index) => {
                          return(
                              <Avatar> 
                                {Funcionario} 
                              </Avatar> 
                          )
                        })}
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

export default Table;