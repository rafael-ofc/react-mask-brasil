import { useState } from "react"
import { data } from "./data"

export default (key) => {
    const [info, setInfo] = useState({
        mask: '',
        base: undefined
    })

    const setMask = (e) => {
        let json = data[key](e.target.value.replace(/(\D)/g, ''))
        if (json.mask === info.mask) return
        setInfo({
            mask: json.mask,
            base: json.base
        })
    }

    return [info.mask, setMask, info.base]
}