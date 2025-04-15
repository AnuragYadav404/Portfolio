export default function NavigationBar() {
    return (
        <nav className="sticky-nav flex justify-center items-center max-w-4xl w-full p-8 mt-0 mb-0 md:mt-4 md:mb-10 mx-auto bg-zinc-900 bg-opacity-60">
            <hr />
            <div className="hidden sm:block rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10">
                <div className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900">
                    <a href="#introduction">Introduction</a>
                </div>
                <div className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900">
                    <a href="#publications">Publications</a>
                </div>
                <div className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900">
                    <a href="#projects">Projects</a>
                </div>
                <div className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900">
                    <a href="#codes">Code</a>
                </div>
                <div className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900">
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav >
    )
}