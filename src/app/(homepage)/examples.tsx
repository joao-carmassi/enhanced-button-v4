import ButtonExample from '@/components/button-example';
import { Button } from '@/components/ui/button';

function Examples(): React.ReactNode {
  return (
    <section className='px-6 py-6 md:py-12'>
      <div className='container mx-auto space-y-6 w-full min-w-0'>
        <h2 className='text-xl font-medium sm:text-4xl text-center'>
          Examples & Usage
        </h2>

        <p className='text-center text-muted-foreground font-semibold'>
          All the button variants below are available in the new shadcn-button
          component. Easily reuse them anywhere in your project.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center'>
          <ButtonExample
            button={<Button>Click me</Button>}
            code={[
              {
                filename: 'Button.tsx',
                language: 'tsx',
                code: `<Button>
  Click me
</Button>`,
              },
            ]}
          />
          <ButtonExample
            button={<Button>Click me</Button>}
            code={[
              {
                filename: 'Button.tsx',
                language: 'tsx',
                code: `<Button>
  Click me
</Button>`,
              },
            ]}
          />
          <ButtonExample
            button={<Button>Click me</Button>}
            code={[
              {
                filename: 'Button.tsx',
                language: 'tsx',
                code: `<Button>
  Click me
</Button>`,
              },
            ]}
          />
          <ButtonExample
            button={<Button>Click me</Button>}
            code={[
              {
                filename: 'Button.tsx',
                language: 'tsx',
                code: `<Button>
  Click me
</Button>`,
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default Examples;
