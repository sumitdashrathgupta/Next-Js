import Link from "next/link"

const Navbar = () => {
    return (
        <header className="grid grid-cols-2 m-5">
            <div className="">
                Logo Navbar
            </div>
            <nav>
                <ul className="flex gap-3" >
                    <li>
                        <Link href="/" >Home</Link>
                    </li>
                    <li>
                        <Link href="/about" >About</Link>
                    </li>
                    <li>
                        <Link href="/service" >service</Link>
                    </li>
                    <li>
                        <Link href="/contact" >Conteact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar