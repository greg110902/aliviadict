'use client'
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
})

const italic = Inter({
    subsets: ['latin'],
    display: 'swap',
    style: 'italic',
})
 

export default function Card({data}) {
    console.log(data.usage)
    return (
        <div className="flex justify-center py-5">
        <div className={`w-4/5 p-3 rounded-2xl bg-pink-100`}>
            <h1 className="text-pink-600 text-3xl">
                {data.word}
            </h1>
            <h2 className="text-xl">
                {data.definition}
            </h2>
            {data.usage != null ? data.usage.replace(/\[|\]/g,'').split(',').map(use => {
                return <div className={`${italic.className} italic my-3`} key={use}>{use}</div>
            }) : <></>}
        </div>
        </div>
    )

}