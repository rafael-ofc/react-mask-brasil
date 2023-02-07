export const data = {
    CPF(value) {
        let mask = value.replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1-$2')
            .substring(0, 14)
        let base = parseInt(value)
        return { mask, base }
    },
    CNPJ(value) {
        let mask = value.replace(/(\d{2})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1/$2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .substring(0, 18)
        let base = parseInt(value)
        return { mask, base }
    },
    CPF_CNPJ(value) {
        return (value.length > 11) ? this.CNPJ(value) : this.CPF(value)
    }
}