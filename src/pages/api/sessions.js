import { statusList } from "@/utils/constants"
const databaseURL = "https://api.entrylevel.net/test/sessions"

const handler = async (req, res) => {
    const { status, short_title } = req.query || {}

    if (status && statusList.indexOf(status.toUpperCase()) === -1) {
        res.status(400).json({ error: "Invalid status" })
    }

    try {
        const response = await fetch(databaseURL)

        let sessions = await response.json()

        if (!Array.isArray(sessions)) {
            res.status(500).json({ error: "Invalid data" })
        }

        if (short_title) {
            sessions = sessions.filter(session => {
                if (!session.program || !Array.isArray(session.program)) {
                    return false
                }
                return session.program.some(
                    program => program.short_title === short_title
                )
            })
        }

        if (status) {
            sessions = sessions.filter(
                session => session.status === status.toUpperCase()
            )
        }

        res.status(200).json({ sessions })
    } catch {
        res.status(500).json({ error: "Unable to process request" })
    }
}

export default handler
