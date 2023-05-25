import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="navbar" style={{ background: 'hsl(219, 70%, 96%)' }}>
            <div className="navbar-brand ">
                <Link
                    className="navbar-item"
                    href={'/'}
                >
                    <p className="is-size-2">Kemenkes Dashboard</p>
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
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Menu Toko</a>
                        <div className="navbar-dropdown is-boxed">
                            <Link
                                className="navbar-item"
                                href={'/item'}
                            >
                                Lihat Item
                            </Link>
                            <Link
                                className="navbar-item"
                                href={'/item/create'}
                            >
                                Tambah Item
                            </Link>
                            <Link
                                className="navbar-item"
                                href={'/item/sell'}
                            >
                                Jual Item
                            </Link>
                            <hr className="navbar-divider" />
                            <Link
                                className="navbar-item"
                                href={'/penjualan'}
                            >
                                Summary
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="navbar-end">
                </div>
            </div>
        </nav>
    )
}