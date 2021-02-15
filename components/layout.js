import Footer from '../components/footer'
// import Feed from "react-instagram-authless-feed"

export default function Layout({ children }) {
  return (
    <>
      <main className="mx-auto">{children}</main>
      <Footer />
    </>
  )
}
