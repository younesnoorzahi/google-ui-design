import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mic, Search, Image, Grid3X3, Settings } from "lucide-react"
import Link from "next/link"

export default function GoogleUI() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-end items-center p-4 text-sm">
        <nav className="flex items-center gap-4">
          <Link href="#" className="text-gray-600 hover:underline">
            Gmail
          </Link>
          <Link href="#" className="text-gray-600 hover:underline">
            Images
          </Link>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Grid3X3 className="h-5 w-5 text-gray-600" />
          </button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-6">Sign in</Button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 -mt-20">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-8xl font-normal">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
          </h1>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-2xl">
          <div className="relative mb-8">
            <div className="flex items-center border rounded-full px-6 py-3 shadow-sm hover:shadow focus-within:shadow-md">
              <Search className="h-5 w-5 text-gray-400 mr-3" />
              <Input
                type="text"
                className="flex-1 border-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none p-0"
                placeholder="Search Google or type a URL"
              />
              <Mic className="h-5 w-5 text-blue-500 ml-3 cursor-pointer" />
            </div>
          </div>

          {/* Search Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" className="bg-gray-50 hover:bg-gray-100 text-gray-800 border-0 px-4">
              Google Search
            </Button>
            <Button variant="outline" className="bg-gray-50 hover:bg-gray-100 text-gray-800 border-0 px-4">
              I'm Feeling Lucky
            </Button>
          </div>
        </div>

        {/* Search Results (Initially Hidden) */}
        <div className="w-full max-w-3xl hidden">
          <div className="flex items-center gap-6 border-b pb-3 mb-6">
            <Link href="#" className="flex items-center gap-1 text-blue-600 border-b-4 border-blue-600 pb-2">
              <Search className="h-4 w-4" />
              <span>All</span>
            </Link>
            <Link href="#" className="flex items-center gap-1 text-gray-600">
              <Image className="h-4 w-4" />
              <span>Images</span>
            </Link>
            <Link href="#" className="flex items-center gap-1 text-gray-600">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </Link>
          </div>

          {/* Results */}
          <div className="space-y-8">
            {/* Result 1 */}
            <div>
              <div className="text-sm text-gray-600 mb-1">https://example.com</div>
              <h2 className="text-xl text-blue-700 hover:underline mb-1">
                <Link href="#">Example Domain - Example Website</Link>
              </h2>
              <p className="text-sm text-gray-600">
                This domain is for use in illustrative examples in documents. You may use this domain in literature
                without prior coordination.
              </p>
            </div>

            {/* Result 2 */}
            <div>
              <div className="text-sm text-gray-600 mb-1">https://vercel.com</div>
              <h2 className="text-xl text-blue-700 hover:underline mb-1">
                <Link href="#">Vercel: Frontend Cloud for Developers</Link>
              </h2>
              <p className="text-sm text-gray-600">
                Vercel's Frontend Cloud gives developers the frameworks, workflows, and infrastructure to build a
                faster, more personalized Web.
              </p>
            </div>

            {/* Result 3 */}
            <div>
              <div className="text-sm text-gray-600 mb-1">https://nextjs.org</div>
              <h2 className="text-xl text-blue-700 hover:underline mb-1">
                <Link href="#">Next.js - The React Framework for the Web</Link>
              </h2>
              <p className="text-sm text-gray-600">
                Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications
                by extending the latest React features.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 text-sm">
        <div className="px-8 py-3 border-b">
          <p>United States</p>
        </div>
        <div className="px-8 py-3 flex flex-col md:flex-row justify-between">
          <div className="flex gap-6 flex-wrap">
            <Link href="#" className="hover:underline">
              About
            </Link>
            <Link href="#" className="hover:underline">
              Advertising
            </Link>
            <Link href="#" className="hover:underline">
              Business
            </Link>
            <Link href="#" className="hover:underline">
              How Search works
            </Link>
          </div>
          <div className="flex gap-6 mt-3 md:mt-0">
            <Link href="#" className="hover:underline">
              Privacy
            </Link>
            <Link href="#" className="hover:underline">
              Terms
            </Link>
            <Link href="#" className="hover:underline">
              Settings
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
