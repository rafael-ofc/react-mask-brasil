# REACT MASK BRASIL
With this module you can use input masks, it provides ready-to-use masks, in the brazilian standard

## Install
```
npm i react-mask-brasil
```

---

## Usage
```
import { useMask } from "react-mask-brasil"

export default () => {
  //In useMask you will specify the mask through a string
  let [cpf, setCpf] = useMask('CPF') 

  return (
    <div>
      <input
        type="text"
        value={cpf}
        onChange={setCpf}
      />
    </div>
  )
}
```

---

## Types
| Type | Mask |
|------|------|
| CPF | 999.999.999-99 |
| CNPJ | 99.999.999/9999-99 |
| CPF_CNPJ | 999.999.999-99 or 99.999.999/9999-99 |

Note: use the type as a string, example: 'CPF'

----

## Number Format
You can also get the input value in number format, just request the third item of the array in useMask, useful for storing in a database
```
let [cpf, setCpf, dataCpf] = useMask('CPF')
```