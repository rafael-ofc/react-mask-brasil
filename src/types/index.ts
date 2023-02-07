import React from "react"

type KeyType = 'CPF' | 'CNPJ' | 'CPF_CNPJ'

type BaseType = undefined | number | Date

export type InputType = React.ChangeEvent<HTMLInputElement>

export type InfoType = {
    mask: string,
    base: BaseType
}

export type MainType = (key: KeyType) => [string, (e: InputType) => void, BaseType]