import { FormEvent, useState }from 'react';
import axios from 'axios';

const defaultFormData = {
  cliente: "",
  tipo: "",
  data: "",
  prioridade: "",
  funcionarios: "",
  descricao: ""
};

export function NewOs() 
{

  const [formData, setFormData] = useState(defaultFormData);
  const { cliente, tipo, data, prioridade, funcionarios, descricao } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit (e: FormEvent) {
    e.preventDefault();

    console.log(formData)
    const res = await axios.post('http://127.0.0.1:8000/api/newOs', formData)

    if(res.data.status === 200)
    {
      console.log('formData', formData)
      console.log('message', res.data.message)
      setFormData(defaultFormData);

    }

  }

  return (
    <>
    
      <div>
        <h1> New OS </h1>
    
        <form onSubmit={onSubmit}>
          <div>
              <label htmlFor="cliente">Cliente:</label>
              <input type="text" id="cliente" onChange={onChange}  value={cliente}/>
          </div>
          <div>
              <label htmlFor="tipo">Escolha o tipo:</label>
              <input type="text" id="tipo" onChange={onChange} value={tipo}/>
          </div>
          <div>
              <label htmlFor="data">Data do agendamento:</label>
              <input type="date" id="data" onChange={onChange} value={data}/>
          </div>
          <div>
              <label htmlFor="prioridade">Prioridade:</label>
              <input type="select" id="prioridade" onChange={onChange} value={prioridade}/>
          </div>
          <div>
              <label htmlFor="funcionarios">Funcionarios:</label>
              <input type="select" id="funcionarios" onChange={onChange} value={funcionarios}/>
          </div>
          <div>
              <label htmlFor="descricao">Mensagem:</label>
              <input type="text" id="descricao" onChange={onChange} value={descricao}/>
          </div>
          <div>
            <button type="submit"> Save </button>
          </div>
        </form>
      </div>
    </>
  );
}


export default NewOs;