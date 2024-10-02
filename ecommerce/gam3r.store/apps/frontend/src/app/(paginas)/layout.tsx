import Pagina from '@/components/template/Pagina'
import { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return <Pagina>{children}</Pagina>
}
