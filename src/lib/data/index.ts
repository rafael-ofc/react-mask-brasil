export const data = {
    CPF(value: string) {
        let mask = value.replace(/(\D)/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1-$2')
            .substring(0, 14)
        let base = parseInt(mask.replace(/(\D)/g, ''))
        return { mask, base }
    }
}