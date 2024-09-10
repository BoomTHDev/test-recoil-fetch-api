export async function getData(endpoint: string) {
    try {
        const res = await fetch(endpoint, {
            cache: 'no-store'
        })
    
        const data = await res.json()
        return data
    } catch (error: any) {
        console.log(error)
        return error
    }
}