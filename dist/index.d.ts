import React from "react"
type KeyType = 'CPF' | 'CNPJ' | 'CPF_CNPJ'
type BaseType = undefined | number | Date
type InputType = React.ChangeEvent<HTMLInputElement>

export declare function useMask(key: KeyType): [string, (e: InputType) => void, BaseType]