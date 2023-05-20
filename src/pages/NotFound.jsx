import React, { useEffect } from "react";

const NotFound = ({ setIsLoading }) => {
    useEffect(() => {
        setIsLoading(false);
    }, []);

    return <div>NotFound</div>;
};

export default NotFound;
