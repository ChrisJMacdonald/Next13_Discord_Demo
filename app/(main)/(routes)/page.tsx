import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <p className='text-3xl font-bold text-indigo-500'>
        Hello
        <Button>Click me!</Button>
      </p>
    </div> 
  )
}
