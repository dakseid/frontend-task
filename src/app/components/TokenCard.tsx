interface Props {
    mint: string;
    name: string;
    symbol: string;
    logo: string;
}

export default function TokenCard({ mint, name, symbol, logo }: Props) {
    return (
        <div className="border p-4 rounded-lg shadow-md flex items-center gap-4">
            {logo && <img src={logo} alt={name} className="w-12 h-12 rounded-full"/>}
            <div>
                <h2 className="font-bold">{name} ({symbol})</h2>
                <p className="text-sm text-gray-500">Mint: {mint}</p>
            </div>
        </div>
    );
}