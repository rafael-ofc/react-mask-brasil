import { useState } from "react"
import { data, KeyType } from "./data"

export const useMask = (key: KeyType) => {
    const [info, setInfo] = useState('')

    const setMask = (value: string) => {
        let json = data[key](value)
        setInfo(json)
    }

    return { info, setMask }
}