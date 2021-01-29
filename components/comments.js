import { FacebookProvider, Comments } from 'react-facebook'

export default function PostComments({slug}) {
    return (
        <section className="w-10/12 lg:max-w-3xl mx-auto mt-20 mb-20">
            <FacebookProvider appId="2780985245511001">
                <Comments href={`https://novasdecadamanha.com.br/${slug}`} width="100%" />
            </FacebookProvider>
        </section>
    )
}