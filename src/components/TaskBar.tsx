
import { FaWindows } from "react-icons/fa";
import { Explorer } from "../assets";
import { useEffect, useState } from "react";
import { RxSpeakerLoud } from "react-icons/rx";
import { FiWifi } from "react-icons/fi";
import { BsBatteryFull } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import { SystemAbilityItem, TaskBarItem } from "./index";

export default function TaskBar() {
    return (
        <div className="absolute bottom-0 flex justify-between w-screen bg-[#1c223a]">
            <TaskBarItems />
            <SystemAbilityTray />
        </div>
    )
}

function TaskBarItems() {
    return (
        <div className="flex">
            <TaskBarItem isOpen>
                <FaWindows className="w-7 h-7 text-white" />
            </TaskBarItem>
            <TaskBarItem>
                <img src={Explorer} className="w-8 h-8"></img>
            </TaskBarItem>
        </div>
    );
}

function SystemAbilityTray() {
    return (
        <div className="flex justify-center items-center me-3">
            <SystemAbilityItem>
                <IoIosArrowUp className="text-white w-6 self-center" />
            </SystemAbilityItem>
            <SystemAbilityItem>
                <FiWifi className="text-white w-6 self-center" />
            </SystemAbilityItem>
            <SystemAbilityItem>
                <BsBatteryFull className="text-white w-6  self-center" />
            </SystemAbilityItem>
            <SystemAbilityItem>
                <RxSpeakerLoud className="text-white w-6  self-center" />
            </SystemAbilityItem>
            <SystemAbilityItem>
                <SystemDateTray />
            </SystemAbilityItem>
        </div>
    );
}

function SystemDateTray() {
    //Giờ hiện tại
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const date = time.getDate() + '/' + (time.getMonth() + 1) + '/' + time.getFullYear();

    //Ngày hiện tại
    return (
        <div className="text-white text-center mt-1">
            <p>{`${formattedHours}:${formattedMinutes} ${ampm}`}</p>
            <p>{date}</p>
        </div>
    )
}

