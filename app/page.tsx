'use client'
import Image from 'next/image'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {

  const [inputValue, setInputValue] = useState('')
  
  const {push} = useRouter()
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    push(`/prediction/${inputValue}`)
  }


  return (
    <div>
      <div>
        <h1>Enter Your name</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input 
          type='text' 
          placeholder='Type Your Name ...' 
          onChange={(e) => setInputValue(e.target.value)} 
          value={inputValue}>
          </input>
          <button  type='submit'>Predict a data</button>
        </form>
        </div>
  )
}
