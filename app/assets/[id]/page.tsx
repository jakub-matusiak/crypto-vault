export default async function Asset({ params }: { params: { id: string }}) {
  const response = await fetch(`https://api.coincap.io/v2/assets/${params.id}`);
  const asset = await response.json();
  const { data } = asset;

  return (
    <main className='p-4'>
      <h1 className='text-3xl font-bold'>{ data.name }</h1>
      <p>{ data.priceUsd }</p>
    </main>
  );
}