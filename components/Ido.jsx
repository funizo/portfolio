import Image from "next/image";
import Link from "next/link";
import Data from "@/public/document/data";

export default function Ido() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            {Data.map((a, i) => (
                <div
                    key={i}
                    className="h-[200px] border border-gray-300 p-2 hover:border-green-500 cursor-pointer"
                >
                    <div className="w-12 h-12 mb-2 flex space-x-2">
                        <Image
                            src={a.img}
                            width={36}
                            height={36}
                            alt={a.id}
                            className="mb-2"
                        />
                        {a.img2 && (
                            <Image
                                src={a.img2}
                                width={36}
                                height={36}
                                alt={a.id}
                                className="mb-2"
                            />
                        )}
                    </div>

                    <h1 className="font-bold mb-1">{a.id}</h1>
                    <div className="text-sm">
                        <p>{a.comment1}</p>
                        <p>{a.comment2}</p>
                        <p>{a.comment3}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
