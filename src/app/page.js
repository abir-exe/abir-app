"use client"


export default function Home() {

  const fun = () => {
    alert("hello world!")
  }

  return (
    <main >
     <h1>Motin</h1>
     <button onClick={fun}>Click Me</button>
    </main>
  )
}
