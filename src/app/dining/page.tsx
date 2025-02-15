interface Dining {
  id: number
  name: string
  price: number
  image: string
  description: string
}

async function getDining(id: string): Promise<Dining> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dining`)
  return res.json()
}

export default async function DiningPage() {
  // const dining = await getDining(params.id)

  return (
    <div className="max-w-2xl mx-auto">
      <h1>Dining</h1>
    </div>
  )
}
