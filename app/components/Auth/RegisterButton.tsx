import { useFormStatus } from 'react-dom';

export default function RegisterButton() {
  const { pending } = useFormStatus();

  return (
    <button type='submit' className='btn btn-primary mt-4 px-8' aria-disabled={pending} disabled={pending}>{pending ? 'Submitting...' : 'Register'}</button>
  );
}
