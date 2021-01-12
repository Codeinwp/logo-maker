import * as React from "react"

const LayoutUIsvg: React.FunctionComponent<{
    isSelected?: boolean
    clasName?: string
}> = (props: { isSelected?: boolean; clasName?: string }) => {
    return (
        <svg
            width="36"
            height="36"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props?.clasName}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 28.5C7.5435 28.5 1.5 22.4565 1.5 15C1.5 7.5435 7.5435 1.5 15 1.5C22.4565 1.5 28.5 7.5435 28.5 15C28.5 22.4565 22.4565 28.5 15 28.5Z"
                fill={props?.isSelected ? "#43C2D1" : "white"}
                stroke={props?.isSelected ? "#43C2D1" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15 6.69V11.88"
                stroke={props?.isSelected ? "white" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18.1201 15H23.3101"
                stroke={props?.isSelected ? "white" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15 18.12V23.31"
                stroke={props?.isSelected ? "white" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.68994 15H11.8799"
                stroke={props?.isSelected ? "white" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M19.5 10.5L21 9"
                stroke={props?.isSelected ? "white" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9 21L10.5 19.5"
                stroke={props?.isSelected ? "white" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M19.5 19.5L21 21"
                stroke={props?.isSelected ? "white" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9 9L10.5 10.5"
                stroke={props?.isSelected ? "white" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default LayoutUIsvg
