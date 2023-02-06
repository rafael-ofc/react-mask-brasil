import { useMask } from "./lib"

export default () => {
  let [teste, setTeste] = useMask('CPF')

  return (
    <div>
      <h1>Teste da Lib</h1>
      <input
        type="text"
        value={teste}
        onChange={e => setTeste(e.target.value)}
      />
    </div>
  )
}