export const data = {
    CPF(value: string) {
        value = value.replace(/(\D)/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1-$2')
        return value.substring(0, 14)
    }
}