import React from "react"

export type KeyType = 'CPF' | 'CNPJ' | 'CPF_CNPJ'

export type BaseType = undefined | number | Date

export type InputType = React.ChangeEvent<HTMLInputElement>

export type InfoType = {
    mask: string,
    base: BaseType
}

export type MainType = (key: KeyType) => [string, (e: InputType) => void, BaseType]