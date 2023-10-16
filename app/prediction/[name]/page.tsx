import Image from 'next/image'

export default function Page({ params }:any ) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {params.name}
    </main>
  )
}
