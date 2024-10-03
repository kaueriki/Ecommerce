import { useCallback } from 'react'

export default function useLocalStorage() {
    const salvarItem = useCallback((chave: string, valor: any) => {
        localStorage.setItem(chave, JSON.stringify(valor))
    }, [])

    const obterItem = useCallback((chave: string) => {
        const valor = localStorage.getItem(chave)
        return valor ? JSON.parse(valor) : null
    }, [])

    const removerItem = useCallback((chave: string) => {
        localStorage.removeItem(chave)
    }, [])

    return { salvarItem, obterItem, removerItem }
}

// salvar os itens no localstorage, ou seja se o usuario sair da aplização de voltar os itens ainda estarão la