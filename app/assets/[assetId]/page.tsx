import Breadcrumbs from '@/app/components/Breadcrumbs';
import Summary from '@/app/components/AssetDetails/Summary';

export default async function AssetDetails({ params }: { params: { assetId: string }}) {
  return (
    <main className='p-2'>
      <Breadcrumbs />
      <Summary assetId={params.assetId} />
    </main>
  );
}
