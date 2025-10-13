import { useWebSocket } from "../hooks/useWebSocket";
import TokenCard from "../components/TokenCard";

export default function Cosmo() {
    const tokens = useWebSocket("ws://127.0.0.1:8080/connect");

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4">New Solana Tokens Feed</h1>
            <div className="grid grid-cols-1 gap-4">
                {tokens.map((token, i) => (
                    <TokenCard key={i} {...token} />
                ))}
            </div>

        </div>
    );
}