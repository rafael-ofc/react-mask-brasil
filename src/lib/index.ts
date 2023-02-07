import { useState } from "react"
import { data } from "./data"
import { MainType, InfoType } from "./types"

export const useMask: MainType = (key) => {
    const [info, setInfo] = useState<InfoType>({
        mask: '',
        base: undefined
    })

    const setMask = (value: string) => {
        let json = data[key](value.replace(/(\D)/g, ''))
        if (json.mask == info.mask) return
        setInfo({
            mask: json.mask,
            base: json.base
        })
    }

    return [info.mask, setMask, info.base]
}