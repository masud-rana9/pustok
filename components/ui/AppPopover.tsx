import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Popover } from "antd";

type TAppPopover = {
    placement?: "bottom" | "bottomRight",
    arrow?: boolean,
    children: ReactNode,
    button: ReactNode,
    popupOpen?: boolean;
    setPopupOpen?: Dispatch<SetStateAction<boolean>>
}

const AppPopover = ({ children, button, popupOpen, setPopupOpen, arrow, placement = "bottom" }: TAppPopover) => {
    const [clicked, setClicked] = useState(false);

    const handleClickChange = (value: boolean) => {
        if (setPopupOpen) {
            setPopupOpen(value);
        } else {
            setClicked(value);
        }
    };


    return (
        <Popover
            placement={placement}
            content={children}
            trigger="click"
            open={popupOpen === undefined ? clicked : popupOpen}
            onOpenChange={handleClickChange}
            arrow={arrow}
        >
            {button}
        </Popover>
    );
};

export default AppPopover;