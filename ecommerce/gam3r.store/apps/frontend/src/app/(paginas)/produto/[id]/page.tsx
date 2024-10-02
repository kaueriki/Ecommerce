import BannerCompra from '@/components/produto/BannerCompra'
import InformacoesProduto from '@/components/produto/InformacoesProduto'
import ProdutoNaoEncontrado from '@/components/produto/ProdutoNaoEncontrado'
import TituloProduto from '@/components/produto/TituloProduto'
import { produtos, Produto } from '@gstore/core' // Assuming `Produto` is exported from @gstore/core

// Define a type for the props, including params with the id
interface PaginaProdutoProps {
    params: {
        id: string;
    };
}

export default function PaginaProduto({ params }: PaginaProdutoProps) {
    // Convert params.id to a number
    const id = +params.id;

    // Find the product by id
    const produto: Produto | undefined = produtos.find((produto) => produto.id === id);

    return produto ? (
        <div className="flex flex-col gap-20 container py-10">
            <div className="flex flex-col gap-10">
                <TituloProduto produto={produto} />
                <InformacoesProduto produto={produto} />
                <BannerCompra produto={produto} />
            </div>
        </div>
    ) : (
        <ProdutoNaoEncontrado />
    );
}
