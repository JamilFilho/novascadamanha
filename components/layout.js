import Footer from '../components/footer'

export default function Layout({ children }) {
  return (
    <>
      <main className="container mx-auto">{children}</main>
      <Footer />
    </>
  )
}
