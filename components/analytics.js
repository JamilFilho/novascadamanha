import useScript from '../components/useScript'
const env = process.env.ENVIRONMENT

export default function Analytics() {
    if(env === 'dev') {
        return(
            <>
            </>
        )
    } else {
        return useScript('https://www.googletagmanager.com/gtag/js?id=UA-181514130-1s'), useScript('/assets/scripts/analytics.js'), useScript('/assets/scripts/clarity.js')
    }
}