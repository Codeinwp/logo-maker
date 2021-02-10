import * as React from "react"

const TypographyUIsvg: React.FunctionComponent<{
    isSelected?: boolean
    clasName?: string
}> = (props: { isSelected?: boolean; clasName?: string }) => {
    return (
        <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props?.clasName}
        >
            <path
                d="M13.4536 22.5L18.0001 13.5L22.5466 22.5"
                stroke={props?.isSelected ? "#43C2D1" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.595 20.28H21.42"
                stroke={props?.isSelected ? "#43C2D1" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.5 10.5V25.5"
                stroke={props?.isSelected ? "#43C2D1" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M28.5 25.5V10.5"
                stroke={props?.isSelected ? "#43C2D1" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30 31.5H27C26.172 31.5 25.5 30.828 25.5 30V27C25.5 26.172 26.172 25.5 27 25.5H30C30.828 25.5 31.5 26.172 31.5 27V30C31.5 30.828 30.828 31.5 30 31.5Z"
                stroke={props?.isSelected ? "#43C2D1" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 31.5H6C5.172 31.5 4.5 30.828 4.5 30V27C4.5 26.172 5.172 25.5 6 25.5H9C9.828 25.5 10.5 26.172 10.5 27V30C10.5 30.828 9.828 31.5 9 31.5Z"
                stroke={props?.isSelected ? "#43C2D1" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30 10.5H27C26.172 10.5 25.5 9.828 25.5 9V6C25.5 5.172 26.172 4.5 27 4.5H30C30.828 4.5 31.5 5.172 31.5 6V9C31.5 9.828 30.828 10.5 30 10.5Z"
                stroke={props?.isSelected ? "#43C2D1" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 10.5H6C5.172 10.5 4.5 9.828 4.5 9V6C4.5 5.172 5.172 4.5 6 4.5H9C9.828 4.5 10.5 5.172 10.5 6V9C10.5 9.828 9.828 10.5 9 10.5Z"
                stroke={props?.isSelected ? "#43C2D1" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10.5 28.5H25.5"
                stroke={props?.isSelected ? "#43C2D1" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M25.5 7.5H10.5"
                stroke={props?.isSelected ? "#43C2D1" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default TypographyUIsvg
