import { Link } from "react-router-dom"

const NoPost = () => {
    return (
        <main className='NoPost'>
            <h2>Page Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
                <Link to='/'>Visit Our Homepage</Link>

            </p>
        </main>
    )
}

export default NoPost
