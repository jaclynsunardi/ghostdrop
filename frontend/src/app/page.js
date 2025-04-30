"use client";

import {useEffect, useState} from "react";

export default function Home() {

  const [message, setMessage] = useState('Loading')

  useEffect(() => {
    fetch("http://localhost:3000").then(
      response => response.json()
    ).then(
      data => {
        console.log(data)
        setMessage(data.message)
      }
    )
  }, [])
  return (
    <div>{message}</div>
  );
}
