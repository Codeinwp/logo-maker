import * as React from "react"

const HorizontalLineUIsvg: React.FunctionComponent<{
    isSelected?: boolean
    clasName?: string
}> = (props: { isSelected?: boolean; clasName?: string }) => {
    return (
        <svg
            width="58"
            height="9"
            viewBox="0 0 58 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props?.clasName}
        >
            <line y1="1.25" x2="58" y2="1.25" stroke={props?.isSelected ? "#43C2D1" : "#8B8B9C"} strokeWidth="1.5" />
            <line y1="8.25" x2="58" y2="8.25" stroke={props?.isSelected ? "#43C2D1" : "#8B8B9C"} strokeWidth="1.5" />
        </svg>
    )
}

export default HorizontalLineUIsvg
