import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div className='w-4/5 mx-auto'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
