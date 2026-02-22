'use client';

import {
  BundledLanguage,
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
} from '@/components/kibo-ui/code-block';
import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Github } from 'lucide-react';

const button = [
  {
    language: 'jsx',
    filename: 'button.tsx',
    code: `import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { Spinner } from '@/components/ui/spinner';

/**
 * @author: @joao-carmassi
 * @description: Slide Text Button with animated vertical text transition
 * @version: 1.0.0
 * @date: 2026-22-02
 * @license: MIT
 * @website: https://joao-carmassi.github.io/enhanced-button-v4/
 * @github: https://github.com/joao-carmassi/enhanced-button-v4
 */

interface IconProps {
  icon: React.ElementType;
  iconPlacement: 'left' | 'right';
}

interface IconRefProps {
  icon?: never;
  iconPlacement?: undefined;
}

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export type ButtonIconProps = IconProps | IconRefProps;

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      effect: {
        expandIcon: 'group gap-0 relative',
        ringHover:
          'transition-all duration-300 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2',
        shine:
          'before:animate-shine relative overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-no-repeat',
        shineHover:
          'relative overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] before:duration-1000',
        gooeyRight:
          'relative z-0 overflow-hidden duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-gradient-to-r before:from-white/40 before:transition-transform before:duration-1000  hover:before:translate-x-[0%] hover:before:translate-y-[0%]',
        gooeyLeft:
          'relative z-0 overflow-hidden duration-500 after:absolute after:inset-0 after:-z-10 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-gradient-to-l after:from-white/40 after:transition-transform after:duration-1000  hover:after:translate-x-[0%] hover:after:translate-y-[0%]',
        underline:
          'relative !no-underline after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300',
        hoverUnderline:
          'relative !no-underline after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300',
        rainbow:
          'relative animate-rainbow hover:brightness-110 border-0 bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,oklch(66.2%_0.225_25.9),oklch(90.7%_0.231_133),oklch(69.6%_0.165_251),oklch(80.2%_0.134_225),oklch(60.4%_0.26_302))] bg-[length:200%] text-primary-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.125rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,oklch(66.2%_0.225_25.9),oklch(90.7%_0.231_133),oklch(69.6%_0.165_251),oklch(80.2%_0.134_225),oklch(60.4%_0.26_302))] before:[filter:blur(0.75rem)] dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,oklch(66.2%_0.225_25.9),oklch(90.7%_0.231_133),oklch(69.6%_0.165_251),oklch(80.2%_0.134_225),oklch(60.4%_0.26_302))]',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-xs': "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant = 'default',
  size = 'default',
  effect,
  icon: Icon,
  iconPlacement,
  asChild = false,
  loading = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> &
  ButtonIconProps & {
    asChild?: boolean;
    loading?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      data-variant={variant}
      data-size={size}
      className={cn(
        buttonVariants({ variant, effect, size, className }),
        loading && effect === 'expandIcon' && 'gap-2',
      )}
      disabled={loading || props.disabled}
      {...props}
    >
      {!loading &&
        Icon &&
        iconPlacement === 'left' &&
        (effect === 'expandIcon' ? (
          <div className='w-0 translate-x-[0%] pr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pr-2 group-hover:opacity-100'>
            <Icon />
          </div>
        ) : (
          <Icon />
        ))}
      <Slottable>{props.children}</Slottable>
      {loading && <Spinner />}
      {!loading &&
        Icon &&
        iconPlacement === 'right' &&
        (effect === 'expandIcon' ? (
          <div className='w-0 translate-x-full pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100'>
            <Icon />
          </div>
        ) : (
          <Icon />
        ))}
    </Comp>
  );
}

export { Button, buttonVariants };`,
  },
];

const global = [
  {
    language: 'css',
    filename: 'global.css',
    code: `@theme inline {
  --animate-shine: shine 3s ease-out infinite;
  @keyframes shine {
    0% {
      background-position: 200% 0;
    }
    25% {
      background-position: -200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  --animate-rainbow: rainbow 3s linear infinite;
  @keyframes rainbow {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 200%;
    }
  }

  --animate-button-pulsating: button-pulsating 1.5s ease-out infinite;
  @keyframes button-pulsating {
    0% {
      box-shadow: 0 0 0 0 var(--button-pulse-color, currentColor);
    }
    70% {
      box-shadow: 0 0 0 8px transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  --animate-pulse: pulse var(--duration) ease-out infinite;
  @keyframes pulse {
    0%,
    100% {
      boxshadow: 0 0 0 0 var(--pulse-color);
    }
    50% {
      boxshadow: 0 0 0 8px var(--pulse-color);
    }
  }
}

[data-variant='default'] {
  --button-pulse-color: var(--primary);
}
[data-variant='destructive'] {
  --button-pulse-color: var(--destructive);
}
[data-variant='secondary'] {
  --button-pulse-color: var(--secondary-foreground);
}
[data-variant='outline'] {
  --button-pulse-color: var(--ring);
}
[data-variant='ghost'] {
  --button-pulse-color: var(--ring);
}`,
  },
];

function Hero(): React.ReactNode {
  return (
    <section className='min-h-screen grid place-items-center px-6 py-6 md:py-12'>
      <div className='container flex items-center justify-center flex-col gap-6 max-w-4xl w-full min-w-0'>
        <Button
          asChild
          effect={'rainbow'}
          size={'icon'}
          className='rounded-full'
        >
          <a
            href='https://github.com/joao-carmassi/enhanced-button'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Github />
          </a>
        </Button>

        <h1 className='text-3xl font-medium sm:text-6xl text-center'>
          Enhanced Button V4{' '}
          <span className='animate-text-gradient bg-linear-to-r from-zinc-900 via-zinc-500 to-zinc-500 bg-size-[150%_auto] bg-clip-text leading-tight text-transparent '>
            a shadcn-button component.
          </span>
        </h1>

        <p className='text-center text-muted-foreground font-semibold'>
          Easily expand the regular shadcn-button component with new button
          styles, without the need of creating new additional button components.
        </p>

        <Tabs defaultValue='button' className='w-full'>
          <TabsList>
            <TabsTrigger value='button'>button.tsx</TabsTrigger>
            <TabsTrigger value='global'>global.css</TabsTrigger>
          </TabsList>
          <TabsContent value='button'>
            {' '}
            <CodeBlock data={button} defaultValue={button[0].language}>
              <CodeBlockHeader>
                <CodeBlockFiles>
                  {(item) => (
                    <CodeBlockFilename
                      key={item.language}
                      value={item.language}
                    >
                      {item.filename}
                    </CodeBlockFilename>
                  )}
                </CodeBlockFiles>
                <CodeBlockCopyButton />
              </CodeBlockHeader>
              <CodeBlockBody className='max-h-100'>
                {(item) => (
                  <CodeBlockItem key={item.language} value={item.language}>
                    <CodeBlockContent
                      language={item.language as BundledLanguage}
                    >
                      {item.code}
                    </CodeBlockContent>
                  </CodeBlockItem>
                )}
              </CodeBlockBody>
            </CodeBlock>
          </TabsContent>
          <TabsContent value='global'>
            <CodeBlock data={global} defaultValue={global[0].language}>
              <CodeBlockHeader>
                <CodeBlockFiles>
                  {(item) => (
                    <CodeBlockFilename
                      key={item.language}
                      value={item.language}
                    >
                      {item.filename}
                    </CodeBlockFilename>
                  )}
                </CodeBlockFiles>
                <CodeBlockCopyButton />
              </CodeBlockHeader>
              <CodeBlockBody className='max-h-100'>
                {(item) => (
                  <CodeBlockItem key={item.language} value={item.language}>
                    <CodeBlockContent
                      language={item.language as BundledLanguage}
                    >
                      {item.code}
                    </CodeBlockContent>
                  </CodeBlockItem>
                )}
              </CodeBlockBody>
            </CodeBlock>
          </TabsContent>
        </Tabs>

        <p className='text-sm font-medium'>
          ✨ Simply copy & paste the code above and use it in your project.{' '}
          <HoverCard openDelay={10} closeDelay={100}>
            <HoverCardTrigger asChild>
              <a
                href='https://github.com/jakobhoeg/enhanced-button'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                See original project
              </a>
            </HoverCardTrigger>
            <HoverCardContent className='flex w-64 flex-col gap-0.5 dark'>
              <div className='font-semibold'>@jakobhoeg</div>
              <div>
                An enhanced version of the default shadcn-button component
              </div>
              <div className='text-muted-foreground mt-1 text-xs'>
                Feb 3, 2024
              </div>
            </HoverCardContent>
          </HoverCard>
        </p>
      </div>
    </section>
  );
}

export default Hero;
