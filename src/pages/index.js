import { useState, useEffect, useRef } from "react"
import Filters from "@/components/Filters.js"
import Sessions from "@/components/Sessions"
import sortByDate from "@/utils/sortByDate"

async function getSessions(queries = {}) {
    const queryString =
        "?" +
        Object.entries(queries)
            .map(([key, value]) => `${key}=${value}`)
            .join("&")
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/sessions${queryString}`
    )
    const data = await res.json()
    return data.sessions?.sort(sortByDate).slice(0, 50)
}

export default function Home({ data = [] }) {
    const [queries, setQueries] = useState({})
    const [sessions, setSessions] = useState(data)
    const isInitialRender = useRef(true)

    useEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false
            return
        }
        getSessions(queries).then(data => setSessions(data))
    }, [queries])

    const handleChange = event => {
        setQueries({ ...queries, [event.target.name]: event.target.value })
    }
    return (
        <main className="flex min-h-screen flex-col items-center py-24 mx-auto text-center w-11/12">
            <h1 className="font-bold text-xl mb-5">EntryLevel Programs</h1>
            <Filters handleChange={handleChange} />
            <Sessions sessions={sessions} />
        </main>
    )
}

export const getStaticProps = async () => {
    return {
        props: {
            data: await getSessions(),
        },
    }
}
