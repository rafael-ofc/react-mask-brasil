type KeyType = 'CPF'

export type BaseType = number

export type MainType = (key: KeyType) => [string, (value: string) => void, BaseType]