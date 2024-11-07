import Header from "@/components/Header";
import {Lato} from 'next/font/google'
import '../../globals.css'

const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'LinkNest : Organize, Share, Impress',
  description: 'Store Your Digital Data at Single Place ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={lato.className}>
    <main>
      {children}
    </main>
    </body>
    </html>
  )
}
