const env = process.env.ENVIRONMENT

export default function Analytics() {
    if(env === 'dev') {
        return(
            <>
            </>
        )
    } else {
        return(
            <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-181514130-1"></script>
            <script async src="/assets/scripts/analytics.js"></script> 
            </>
        )
    }
}