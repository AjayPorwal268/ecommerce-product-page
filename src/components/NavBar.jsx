export default function NavBar() {
    return (
        <nav className='flex flex-col gap-y-4 sm:flex sm:flex-row sm:gap-x-6'>
            <a href='/' className='hover:border-b-4 sm:pb-9 hover:border-primary-orange'>Collections</a>
            <a href='/' className='hover:border-b-4 sm:pb-9 hover:border-primary-orange'>Men</a>
            <a href='/' className='hover:border-b-4 sm:pb-9 hover:border-primary-orange'>Women</a>
            <a href='/' className='hover:border-b-4 sm:pb-9 hover:border-primary-orange'>About</a>
            <a href='/' className='hover:border-b-4 sm:pb-9 hover:border-primary-orange'>Contact</a>
        </nav>
    )
}