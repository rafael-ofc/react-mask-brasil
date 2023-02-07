import { useState } from "react"
import { data } from "./data"
import { BaseType, MainType } from "./types"

export const useMask: MainType = (key) => {
    const [info, setInfo] = useState('')
    const [base, setBase] = useState<BaseType>(0)

    const setMask = (value: string) => {
        let json = data[key](value)
        setInfo(json.mask)
        setBase(json.base)
    }

    return [info, setMask, base]
}