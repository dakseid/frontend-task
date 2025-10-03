import { useEffect, useState } from "react";

interface TokenData {
    mint: string;
    name: string;
    symbol: string;
    logo: string;
}

export function useWebSocket(url: string) {
    const [data, setData] = useState<TokenData[]>([]);

    useEffect(() => {
        const ws = new WebSocket(url);

        ws.onmessage = (event) => {
            try {
                const token = JSON.parse(event.data);
                setData((prev) => [token, ...prev]);
            } catch (error) {
                console.error("Invalid WebSocket data:", error);
            }
        };

        return () => {
            ws.close();
        };
    }, [url]);

    return data;
}