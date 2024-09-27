export default function TaskBarItem({ children, isOpen }: { children?: React.ReactNode, isOpen?: boolean }) {
    return (
        <div>
            <div className="relative group hover:bg-[#313238] w-14">
                <div className="w-14 h-14 flex justify-center items-center z-10">
                    <div className="opacity-100">{children}</div>
                </div>
                {isOpen &&
                    <div className="justify-center flex">
                        <div className={`absolute bottom-0 mx-auto h-1 bg-[#83c0ef] w-12 transition-all duration-300 group-hover:w-full`}></div>
                    </div>
                }
            </div>
        </div>
    );
}