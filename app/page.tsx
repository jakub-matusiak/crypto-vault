import Hero from './components/Hero';
import AssetsList from './components/assets/AssetsList';

export default async function Home() {
  return (
    <main className='py-4'>
      <Hero />
      <AssetsList />
    </main>
  );
}
