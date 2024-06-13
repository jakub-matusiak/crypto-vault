import Hero from './components/Hero';
import AssetsList from './components/assets/AssetsList';

async function getInitialAssets() {
  const response = await fetch('https://api.coincap.io/v2/assets');

  if (!response.ok) {
    throw new Error('Failed to fetch initial assets!');
  }

  const data = await response.json();

  return data.data;
}

export default async function Home() {
  const initialAssets = await getInitialAssets();

  return (
    <main className='py-4'>
      <Hero />
      <AssetsList initialAssets={initialAssets} />
    </main>
  );
}
