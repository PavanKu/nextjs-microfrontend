import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import RemoteChild from "@/components/RemoteChild";

const API_ENDPOINT = "/api/remote-manifest";

const ShellPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [MFEConfig, setMFEConfig] = useState([]);
    const router = useRouter();
    const url = router.asPath;

    useEffect(() => {
        const fetchChildAppConfig = async (url: string) => {
            const GET_URL = `${API_ENDPOINT}?path=${url}`;
            const response = await fetch(GET_URL);
            const config = await response.json();
            console.log(`config => `, config);
            setIsLoading(false);
            setMFEConfig(config);
        }
        if(!url.includes('[[...shell]]')) {
            setIsLoading(true);
            fetchChildAppConfig(url);
        }

    }, [url]);

    return (
        <>
            {isLoading && <div>Fetching Child Applications configuration ...</div>}
            {MFEConfig.length > 0 && MFEConfig.map((config, index) => {
                return <RemoteChild key={index} config={config} />
            })}
        </>
    );
}

export default ShellPage;