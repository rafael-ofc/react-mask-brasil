type KeyType = 'CPF' | 'CNPJ' | 'CPF_CNPJ'

type BaseType = undefined | number | Date

export type InfoType = {
    mask: string,
    base: BaseType
}

export type MainType = (key: KeyType) => [string, (value: string) => void, BaseType]