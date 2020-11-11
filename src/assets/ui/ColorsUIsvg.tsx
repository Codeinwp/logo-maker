import * as React from "react"

const ColorsUIsvg: React.FunctionComponent<{
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
                d="M17.9985 9.56248C17.7705 9.56248 17.586 9.74698 17.589 9.97498C17.589 10.203 17.7735 10.3875 18.0015 10.3875C18.2295 10.3875 18.414 10.203 18.414 9.97498C18.411 9.74698 18.228 9.56248 17.9985 9.56248"
                stroke={props?.isSelected ? "#43C2D1" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10.3861 17.9985C10.3861 17.7705 10.2016 17.586 9.97512 17.589C9.74712 17.589 9.56262 17.7735 9.56262 18.0015C9.56262 18.2295 9.74712 18.414 9.97512 18.414C10.2031 18.414 10.3861 18.228 10.3861 17.9985"
                stroke={props?.isSelected ? "#43C2D1" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M23.9656 12.033C23.8051 11.8725 23.5441 11.8725 23.3851 12.0345C23.2246 12.195 23.2246 12.456 23.3851 12.6165C23.5456 12.777 23.8066 12.777 23.9671 12.6165C24.1276 12.4545 24.1276 12.195 23.9656 12.033"
                stroke={props?.isSelected ? "#43C2D1" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.615 23.3835C12.4545 23.223 12.1935 23.223 12.0345 23.385C11.874 23.5455 11.874 23.8065 12.0345 23.967C12.195 24.1275 12.456 24.1275 12.6165 23.967C12.777 23.8065 12.777 23.5455 12.615 23.3835"
                stroke={props?.isSelected ? "#43C2D1" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.6166 12.615C12.7771 12.4545 12.7771 12.1935 12.6151 12.0345C12.4546 11.874 12.1936 11.874 12.0331 12.0345C11.8726 12.195 11.8726 12.456 12.0331 12.6165C12.1936 12.777 12.4546 12.777 12.6166 12.615"
                stroke={props?.isSelected ? "#43C2D1" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.0001 31.5C10.4176 31.5 4.29455 25.248 4.50605 17.6175C4.70105 10.5735 10.5736 4.70099 17.6176 4.50599C25.2481 4.29449 31.5001 10.4175 31.5001 18V19.5C31.5001 21.1575 30.1576 22.5 28.5001 22.5H25.4056C23.4121 22.5 21.9736 24.408 22.5211 26.3235L22.9066 27.675C23.4556 29.592 22.0156 31.5 20.0236 31.5H18.0001Z"
                stroke={props?.isSelected ? "#43C2D1" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ColorsUIsvg
