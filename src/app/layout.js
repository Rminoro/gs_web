 
import { Inter } from 'next/font/google'
import Rodape from '@/components/rodape/rodape'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GS',
  description: 'ENTREGA DA gs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        
       
          {children}
     
        <Rodape/>

        
      </body>
    </html>
  )
}