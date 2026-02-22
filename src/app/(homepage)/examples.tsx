import ButtonExample from '@/components/button-example';

import { buttonExamples } from './button-examples-list';

function Examples(): React.ReactNode {
  return (
    <section className='px-6 py-6 md:py-12'>
      <div className='container mx-auto space-y-10 w-full min-w-0'>
        <div className='space-y-2'>
          <h2 className='text-xl font-medium sm:text-4xl text-center'>
            Examples & Usage
          </h2>

          <p className='text-center text-muted-foreground font-semibold'>
            All the button variants below are available in the new shadcn-button
            component. Easily reuse them anywhere in your project.
          </p>
        </div>

        {buttonExamples.map((section) => (
          <div key={section.title} className='space-y-4'>
            <h3 className='text-lg font-semibold sm:text-2xl'>
              {section.title}
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center'>
              {section.items.map((item, index) => (
                <ButtonExample
                  key={index}
                  button={item.button}
                  code={item.code}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Examples;
