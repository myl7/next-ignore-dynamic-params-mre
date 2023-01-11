export default function Page({ params: { slug } }: { params: { slug: string } }) {
  if (slug != '1') {
    console.log('Why slug can be not 1?')
  }

  return (
    <main>
      Here is <strong>{slug}</strong>
    </main>
  )
}

export async function generateStaticParams() {
  return [{ slug: '1' }]
}

export const dynamicParams = false
