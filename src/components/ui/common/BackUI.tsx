import * as React from "react"

import { Link } from "react-router-dom"

const BackUI: React.FunctionComponent<{ className?: string; to?: string; url?: string }> = (props: {
    className?: string
    to?: string
    url?: string
}) => {
    return props.url ? (
        <div className="back">
            <a href={props.url}>
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21" cy="21" r="20.5" fill="white" stroke="#E7E7E7" />
                    <path
                        d="M23 17L19 21L23 25"
                        stroke="#585858"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <p>Back</p>
            </a>
        </div>
    ) : (
        <div className="back">
            <Link className="" to={props.to || "/"}>
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21" cy="21" r="20.5" fill="white" stroke="#E7E7E7" />
                    <path
                        d="M23 17L19 21L23 25"
                        stroke="#585858"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <p>Back</p>
            </Link>
        </div>
    )
}

export default BackUI
