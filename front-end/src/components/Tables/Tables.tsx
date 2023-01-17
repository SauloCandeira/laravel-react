import "./styles.css";
import { Container, variantToVisibility } from './styles'


export type TablesProps = {
  children: string;
  variant: 'default' | 'primary' ;
  data: null,
  columns: null,
  hover: true,
  striped: true,
}


export function Tables({hover = true, striped = true, variant }: TablesProps) { 

  const data = [
    {
      id: 'Blend',
      name: "Kim Parrish",
      address: "Garnerville, NY 10923",
      date: "07/11/2020",
      order: "87349585892118",
    },
    {
      id: "Peninsula",
      name: "Peninsula",
      address: "Fullerton, NE 68638",
      date: "07/11/2020",
      order: "58418278790810",
    },
    {
      id: 'Acqua Village',
      name: "Acqua Village",
      address: "Toccoa, GA 30577",
      date: "07/10/2020",
      order: "81534454080477",
    }
  ];



  const columns = [
    { field: "id", header: "Cliente" },
    { field: "teste", header: "Prioridade" },
    { field: "name", header: "Numero" },
    { field: "address", header: "Abertura" },
    { field: "date", header: "Status" },
    { field: "order", header: "Tipo" },
    { field: "teste", header: "Funcionarios" },
    { field: "teste", header: "BOTÕES" },
  ];


  const getCaps = (head, field) => {
    if (head) return head.toUpperCase();
    return field.toUpperCase();
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns &&
              columns.map((head) => (
                <th>{getCaps(head.header, head.field)}</th>
              ))}
          </tr>
        </thead>
        <tbody>


          {data &&
            data.map((row) => (
              <tr className={`${hover && "hover"} ${striped && "striped"}`}>
                {columns.map((col) => (
                  <td>{row[col.field]}</td>
                ))}
              </tr>
          ))}

        </tbody>
      </table>

      {data ? null : <h2 style={{ textAlign: 'center' }}>Nenhuma OS</h2>}
    </div>
    
  );
};

export default Tables;