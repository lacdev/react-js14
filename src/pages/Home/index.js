import React from 'react'

//Component
import Greet from '../../components/Greet'
import Counter from '../../components/Counter'

export default function Home() {
  return (
    <div>
      <Greet firstName="Fego" />
      <Counter />
    </div>
  )
}
