'use client'

export default function Card({data}) {
    return (
        <div className="flex justify-center py-5">
        <div className={`w-4/5 p-3 rounded bg-pink-100`}>
            <h1 className="text-pink-600 text-3xl">
                {data.word}
            </h1>
            <h2 className="text-xl">
                {data.definition}
            </h2>
        </div>
        </div>
    )

}