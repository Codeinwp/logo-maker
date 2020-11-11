import * as React from "react"
import classnames from "classnames"
import { Link } from "react-router-dom"

const BackUI: React.FunctionComponent<{ className?: string; to?: string }> = (props: {
    className?: string
    to?: string
}) => {
    return (
        <div className={classnames("flex flex-row items-center", props?.className)}>
            <Link className="flex flex-row items-center" to={props.to || "/start"}>
                <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="21" cy="21" r="20.5" fill="white" stroke="#E7E7E7" />
                    <path
                        d="M23 17L19 21L23 25"
                        stroke="#585858"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <p className="font-bold px-2 text-base">Back</p>
            </Link>
        </div>
    )
}

export default BackUI
