import {useEffect, useState }  from 'react';

declare global {
    interface Window {
        solana?: any;
    }
}

export default function WalletsButton() {
    const [walletAddress, setWalletAddress] = useState<string | null>(null);

    const connectWallet = async () => {
        if (window.solana) {
            try {
                const response = await window.solana.connect();
                setWalletAddress(response.publicKey.toString());
            } catch (err) {
                console.error("Wallet connection failed", err);
            }
        } else {
            alert("Phantom Wallet not found. Install it first.");
        }
    };

    useEffect(() => {
        if (window.solana?.isPhantom) {
            window.solana.on("connect", () => {
                setWalletAddress(window.solana.publicKey.toString());
            });
        }
    }, []);

    return (
        <button
        onClick={connectWallet}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
        {walletAddress ? `Connected: ${walletAddress.slice(0, 6)}...` : "Connect Phantom"}
        </button>
    );
}