import AvaliacaoEspecializada from '@/components/produto/AvaliacaoEspecializada'
import AvaliacoesUsuarios from '@/components/produto/AvaliacoesUsuarios'
import BannerCompra from '@/components/produto/BannerCompra'
import InformacoesProduto from '@/components/produto/InformacoesProduto'
import MedidorDePreco from '@/components/produto/MedidorDePreço'
import ProdutoNaoEncontrado from '@/components/produto/ProdutoNaoEncontrado'
import TituloProduto from '@/components/produto/TituloProduto'
import { produtos, Produto } from '@gstore/core' 

interface PaginaProdutoProps {
    params: {
        id: string;
    };
}

export default function PaginaProduto({ params }: PaginaProdutoProps) {
    const id = +params.id;

    const produto: Produto | undefined = produtos.find((produto) => produto.id === id);

    return produto ? (
        <div className="flex flex-col gap-20 container py-10">
            <div className="flex flex-col gap-10">
                <TituloProduto produto={produto} />
                <InformacoesProduto produto={produto} />
                <BannerCompra produto={produto} />
                <MedidorDePreco produto={produto} />
            </div>
            <AvaliacoesUsuarios produto={produto} />
            <AvaliacaoEspecializada produto={produto} />
        </div>
    ) : (
        <ProdutoNaoEncontrado />
    );
}
