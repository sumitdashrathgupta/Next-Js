import Link from "next/link"

const Navbar = () => {
    return (
        <>
            <header className="flex justify-between   ml-10 mr-20">
                <div className="text-4xl mt-5">Logo</div>
                <nav className="">
                    <ul className="flex gap-15 mt-5">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/service">Service</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar