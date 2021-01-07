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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.9998 31.5C10.4173 31.5 4.29431 25.248 4.50581 17.6175C4.70081 10.5735 10.5733 4.70099 17.6173 4.50599C25.2478 4.29449 31.4998 10.4175 31.4998 18V19.5C31.4998 21.1575 30.1573 22.5 28.4998 22.5H25.4053C23.4118 22.5 21.9733 24.408 22.5208 26.3235L22.9063 27.675C23.4553 29.592 22.0153 31.5 20.0233 31.5H17.9998Z"
                fill={props?.isSelected ? "#43C2D1" : "white"}
                stroke={props?.isSelected ? "#43C2D1" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17.9985 9.56248C17.7705 9.56248 17.586 9.74698 17.589 9.97498C17.589 10.203 17.7735 10.3875 18.0015 10.3875C18.2295 10.3875 18.414 10.203 18.414 9.97498C18.411 9.74698 18.228 9.56248 17.9985 9.56248"
                stroke={props?.isSelected ? "white" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10.3859 17.9985C10.3859 17.7705 10.2014 17.586 9.97487 17.589C9.74687 17.589 9.56237 17.7735 9.56237 18.0015C9.56237 18.2295 9.74687 18.414 9.97487 18.414C10.2029 18.414 10.3859 18.228 10.3859 17.9985"
                stroke={props?.isSelected ? "white" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M23.9654 12.033C23.8049 11.8725 23.5439 11.8725 23.3849 12.0345C23.2244 12.195 23.2244 12.456 23.3849 12.6165C23.5454 12.777 23.8064 12.777 23.9669 12.6165C24.1274 12.4545 24.1274 12.195 23.9654 12.033"
                stroke={props?.isSelected ? "white" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.6148 23.3835C12.4543 23.223 12.1933 23.223 12.0343 23.385C11.8738 23.5455 11.8738 23.8065 12.0343 23.967C12.1948 24.1275 12.4558 24.1275 12.6163 23.967C12.7768 23.8065 12.7768 23.5455 12.6148 23.3835"
                stroke={props?.isSelected ? "white" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.6166 12.615C12.7771 12.4545 12.7771 12.1935 12.6151 12.0345C12.4546 11.874 12.1936 11.874 12.0331 12.0345C11.8726 12.195 11.8726 12.456 12.0331 12.6165C12.1936 12.777 12.4546 12.777 12.6166 12.615"
                stroke={props?.isSelected ? "white" : "#8B8B9C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ColorsUIsvg
