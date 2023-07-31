export default function Model({isOpen, children}) {
    if(!isOpen) {
        return null;
    }
    return (
        <div className="flex flex-col gap-y-4  w-full h-[100vh] z-10 fixed top-0 bg-black bg-opacity-60">
            {children}
        </div>
    )
}