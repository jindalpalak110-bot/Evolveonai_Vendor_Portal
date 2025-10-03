import type React from "react";

interface ILoaderProp {
    height?: number;
    width?: number;
    ariaLabel?: string;
}

const Loader: React.FC<ILoaderProp> = ({
    height = 40,
    width = 40,
    ariaLabel = "oval-loading"
}) => {
    return (
        <div className="loader_container">
            <div className="oval_loader" aria-label={ariaLabel} style={{ height, width }}>
                <span className="oval_spinner" style={{ height, width }}></span>
            </div>
        </div>
    )
}

export default Loader;