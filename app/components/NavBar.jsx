import Link from "next/link"

export default function NavBar() {
    return (
        <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-white text-lg font-semibold">Human Calculator</div>
            <div className="space-x-4">
              <Link href="/" className="text-white">
                Home
              </Link>
              <Link href="/about" className="text-white">
                About
              </Link>
              <Link href="/contact" className="text-white">
                Contact
              </Link>
              <Link href="/events" className="text-white">
                Event
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
}