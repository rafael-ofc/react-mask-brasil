import { useState } from "react"
import { data } from "./data"
import { MainType } from "./types"

export const useMask: MainType = (key) => {
    const [info, setInfo] = useState('')

    const setMask = (value: string) => {
        let json = data[key](value)
        setInfo(json)
    }

    return [info, setMask]
}