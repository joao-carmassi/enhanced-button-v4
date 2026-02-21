'use client';
import { Button } from '@/components/ui/button';
import { CustomButton } from '@/components/ui/custom-button';

export default function Home() {
  return (
    <section className='min-h-screen grid place-items-center'>
      <div className='flex gap-3'>
        <Button>Click me</Button>
        <CustomButton>Click me</CustomButton>
      </div>
    </section>
  );
}
