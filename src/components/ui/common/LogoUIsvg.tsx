import * as React from "react"

const LogoUIsvg: React.FunctionComponent<{
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.5 23.9985V12.0015C31.5 10.9305 30.927 9.94049 29.997 9.40949L19.485 3.38999C18.5655 2.86349 17.436 2.86349 16.5165 3.38999L6.003 9.40949C5.073 9.94199 4.5 10.9305 4.5 12.0015V23.997C4.5 25.068 5.073 26.058 6.003 26.589L16.515 32.6085C17.4345 33.135 18.564 33.135 19.4835 32.6085L29.9955 26.589C30.927 26.058 31.5 25.0695 31.5 23.9985Z"
                fill={props?.isSelected ? "#43C2D1" : "#8B8B9C"}
                stroke={props?.isSelected ? "#43C2D1" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18.0001 18L4.93506 25.545"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18 18L31.065 10.455"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M18 18V3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 18V33" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path
                d="M18.0001 18L4.93506 10.455"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18 18L31.065 25.545"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default LogoUIsvg
