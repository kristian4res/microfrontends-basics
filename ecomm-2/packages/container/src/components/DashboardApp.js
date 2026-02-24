import { mount as dashboardMount } from "dashboard/DashboardApp";
import { useRef, useEffect } from "react";

export default ({ onSignIn }) => {
    const ref = useRef(null);

    useEffect(() => {
        dashboardMount(ref.current);
    }, []);

    return <div ref={ref} />;
};
