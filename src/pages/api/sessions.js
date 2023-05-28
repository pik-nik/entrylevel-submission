const databaseURL = "https://api.entrylevel.net/test/sessions"
const handler = async (req, res) => {
    const { status, short_title } = req.query || {}

    const response = await fetch(databaseURL)

    let sessions = await response.json()

    if (short_title) {
        sessions = sessions.filter(session => {
            return session.program[0]["short_title"] === short_title
        })
    }

    if (status) {
        sessions = sessions.filter(session => {
            return session.status === status.toUpperCase()
        })
    }

    res.status(200).json({ sessions })
}

export default handler
