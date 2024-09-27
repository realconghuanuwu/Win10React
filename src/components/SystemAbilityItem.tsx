export default function SystemAbilityItem({ children }: { children?: React.ReactNode }) {
    return (
        <div className="flex px-2 h-full hover:bg-[#313238]">
            {children}
        </div>
    )
}