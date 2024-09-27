import TaskBarItem from "./TaskBarItem";
import { RiShutDownLine } from "react-icons/ri";

export default function StartMenu() {
    return (
        <section className="absolute bottom-[3.5rem] w-96 h-fit bg-[#32353a]">
            <TaskBarItem >
                <RiShutDownLine />
            </TaskBarItem >
        </section>
    )
}