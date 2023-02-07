import { useMask } from "./lib"
import { useForm } from 'react-hook-form';

export default () => {
  let [teste, setTeste, dataTeste] = useMask('CPF_CNPJ')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  console.log(dataTeste)

  return (
    <div>
      <h1>Teste da Lib</h1>
      <input
        type="text"
        value={teste}
        onChange={setTeste}
      />
    </div>
  )
}