import { useMask } from "./lib"

export default () => {
  let { info, setMask } = useMask('CPF')

  return (
    <div>
      <h1>Teste da Lib</h1>
      <input
        type="text"
        onChange={e => setMask(e.target.value)}
        value={info}
      />
    </div>
  )
}