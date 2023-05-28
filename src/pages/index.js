import { useState, useEffect } from "react"
import Filters from "@/components/Filters.js"
import Programs from "@/components/Programs"

export default function Home() {
    const [queries, setQueries] = useState({})
    const [programs, setPrograms] = useState([])

    useEffect(() => {
        const queryString =
            "?" +
            Object.entries(queries)
                .map(([key, value]) => `${key}=${value}`)
                .join("&")
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sessions${queryString}`)
            .then(res => res.json())
            .then(data => {
                const programs = data.sessions
                    ?.sort((a, b) => {
                        return new Date(b.start_date) - new Date(a.start_date)
                    })
                    .slice(0, 50)
                setPrograms(programs)
            })
    }, [queries])

    const handleChange = event => {
        setQueries({ ...queries, [event.target.name]: event.target.value })
    }
    return (
        <main className="flex min-h-screen flex-col items-center p-24 mx-auto text-center w-11/12">
            <h1 className="font-bold text-xl mb-5">EntryLevel Programs</h1>
            <Filters handleChange={handleChange} />
            <Programs programs={programs} />
        </main>
    )
}

// export const getStaticProps = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sessions`)
//     const data = await res.json()
//     return {
//         props: {
//             data,
//         },
//     }
// }
