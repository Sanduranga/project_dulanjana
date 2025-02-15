interface Bedroom {
  id: number
  name: string
  price: number
  image: string
  description: string
}

async function getBedroom(id: string): Promise<Bedroom> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bedrooms`)
  return res.json()
}

export default async function BedroomPage() {
  // const bedroom = await getBedroom(params.id)

  return (
    <div className="max-w-2xl mx-auto">
      <h1>Bedroom</h1>
    </div>
  )
}
