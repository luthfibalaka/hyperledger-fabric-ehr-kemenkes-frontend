import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="navbar" style={{ background: 'hsl(219, 70%, 96%)' }}>
            <div className="navbar-brand ">
                <Link
                    className="navbar-item"
                    href={'/'}
                >
                    <p className="is-size-3">Kemenkes Dashboard</p>
                </Link>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start is-size-5">
                    <Link
                        className="navbar-item"
                        href={'/'}
                    >
                        Home
                    </Link>
                </div>
                <div className="navbar-end">
                </div>
            </div>
        </nav>
    )
}