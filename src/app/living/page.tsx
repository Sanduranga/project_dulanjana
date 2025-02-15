interface Living {
  id: number
  name: string
  price: number
  image: string
  description: string
}

async function getLiving(id?: string): Promise<Living> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/livings`)
  return res.json()
}

export default async function LivingPage() {
  //   const living = await getLiving()

  return (
    <div className="max-w-2xl mx-auto">
      <h1>Living</h1>
    </div>
  )
}
