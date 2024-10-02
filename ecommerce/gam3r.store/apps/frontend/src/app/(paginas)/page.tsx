import ListaProdutos from '@/components/produto/ListaProdutos'

export default function Home(): JSX.Element {
    return (
        <div className="flex-1 flex flex-col container gap-5 py-10">
            <ListaProdutos />
        </div>
    )
}
