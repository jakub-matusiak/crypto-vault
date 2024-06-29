import Image from 'next/image';

export default function Hero() {
  return (
    <div className='hero-content flex-col lg:flex-row mb-8'>
      <Image src='/hero-image.png' className='max-w-sm' width={300} height={300} alt='' />
      <div>
        <h1 className='text-2xl sm:text-3xl font-bold'>Manage Your Cryptocurrency Portfolio with Confidence!</h1>
        <p className='py-4 sm:py-6'>Track all your investments in one place with our advanced cryptocurrency portfolio management tool. Monitor the market in real-time, analyze performance, and make informed investment decisions. Gain full control over your assets - easily and securely.</p>
      </div>
    </div>
  );
}
