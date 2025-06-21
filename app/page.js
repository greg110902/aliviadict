'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import Card from "./components/card";


export default function Home() {
  const[data, setData] = useState([])
  const [loaded, setLoaded] = useState(false)

    useEffect(() => {
    const fetchData = async () => {
       const d = await fetch("https://get-words.gwgh1g21.workers.dev/")

        setData(await d.json())
        setLoaded(true)
       }
    if (!loaded) {
      fetchData()
    }
    
  }, [data, loaded])

  console.log("Felching")
  if (loaded && data) {
    console.log(data)
    return (
      <div>
      {data.map((word) =>{
      return (<>
        <Card data={word} ></Card>
      </>)
    })}
    </div>
  )
} else {
  return (
    <>Loading...</>
  )
}
}
