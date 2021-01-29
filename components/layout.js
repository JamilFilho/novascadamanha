import Footer from '../components/footer'
// import Feed from "react-instagram-authless-feed"

export default function Layout({ children }) {
  return (
    <>
      <main className="container mx-auto">{children}</main>
      {/* <Feed userName="novasdecadamanha" className="grid grid-cols-3 lg:grid-cols-6 lg:mt-20 border-t-2" classNameLoading="Loading" limit="6"/> */}
      <Footer />
    </>
  )
}
