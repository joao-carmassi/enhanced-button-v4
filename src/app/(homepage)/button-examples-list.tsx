import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

export type ButtonExampleItem = {
  button: React.ReactNode;
  code: {
    filename: string;
    language: 'tsx';
    code: string;
  }[];
};

export type ButtonExampleSection = {
  title: string;
  items: ButtonExampleItem[];
};

export const buttonExamples: ButtonExampleSection[] = [
  {
    title: 'Variants',
    items: [
      {
        button: <Button>Default</Button>,
        code: [
          {
            filename: 'Button.tsx',
            language: 'tsx',
            code: `<Button>
  Default
</Button>`,
          },
        ],
      },
      {
        button: <Button variant='destructive'>Destructive</Button>,
        code: [
          {
            filename: 'Button.tsx',
            language: 'tsx',
            code: `<Button variant="destructive">
  Destructive
</Button>`,
          },
        ],
      },
      {
        button: <Button variant='outline'>Outline</Button>,
        code: [
          {
            filename: 'Button.tsx',
            language: 'tsx',
            code: `<Button variant="outline">
  Outline
</Button>`,
          },
        ],
      },
      {
        button: <Button variant='secondary'>Secondary</Button>,
        code: [
          {
            filename: 'Button.tsx',
            language: 'tsx',
            code: `<Button variant="secondary">
  Secondary
</Button>`,
          },
        ],
      },
      {
        button: <Button variant='ghost'>Ghost</Button>,
        code: [
          {
            filename: 'Button.tsx',
            language: 'tsx',
            code: `<Button variant="ghost">
  Ghost
</Button>`,
          },
        ],
      },
      {
        button: <Button variant='link'>Link</Button>,
        code: [
          {
            filename: 'Button.tsx',
            language: 'tsx',
            code: `<Button variant="link">
  Link
</Button>`,
          },
        ],
      },
    ],
  },
  {
    title: 'Effects',
    items: [
      {
        button: <Button effect='ringHover'>Ring Hover</Button>,
        code: [
          {
            filename: 'Button.tsx',
            language: 'tsx',
            code: `<Button effect="ringHover">
  Ring Hover
</Button>`,
          },
        ],
      },
      {
        button: <Button effect='shine'>Shine</Button>,
        code: [
          {
            filename: 'Button.tsx',
            language: 'tsx',
            code: `<Button effect="shine">
  Shine
</Button>`,
          },
        ],
      },
      {
        button: <Button effect='shineHover'>Shine Hover</Button>,
        code: [
          {
            filename: 'Button.tsx',
            language: 'tsx',
            code: `<Button effect="shineHover">
  Shine Hover
</Button>`,
          },
        ],
      },
      {
        button: <Button effect='gooeyRight'>Gooey Right</Button>,
        code: [
          {
            filename: 'Button.tsx',
            language: 'tsx',
            code: `<Button effect="gooeyRight">
  Gooey Right
</Button>`,
          },
        ],
      },
      {
        button: <Button effect='gooeyLeft'>Gooey Left</Button>,
        code: [
          {
            filename: 'Button.tsx',
            language: 'tsx',
            code: `<Button effect="gooeyLeft">
  Gooey Left
</Button>`,
          },
        ],
      },
      {
        button: (
          <Button variant='link' effect='underline'>
            Underline
          </Button>
        ),
        code: [
          {
            filename: 'Button.tsx',
            language: 'tsx',
            code: `<Button variant="link" effect="underline">
  Underline
</Button>`,
          },
        ],
      },
      {
        button: (
          <Button variant='link' effect='hoverUnderline'>
            Hover Underline
          </Button>
        ),
        code: [
          {
            filename: 'Button.tsx',
            language: 'tsx',
            code: `<Button variant="link" effect="hoverUnderline">
  Hover Underline
</Button>`,
          },
        ],
      },
      {
        button: <Button effect='rainbow'>Rainbow</Button>,
        code: [
          {
            filename: 'Button.tsx',
            language: 'tsx',
            code: `<Button effect="rainbow">
  Rainbow
</Button>`,
          },
        ],
      },
      {
        button: (
          <Button effect='expandIcon' icon={ArrowRight} iconPlacement='right'>
            Expand Icon Right
          </Button>
        ),
        code: [
          {
            filename: 'Button.tsx',
            language: 'tsx',
            code: `<Button effect="expandIcon" icon={ArrowRight} iconPlacement="right">
  Expand Icon Right
</Button>`,
          },
        ],
      },
      {
        button: (
          <Button effect='expandIcon' icon={ArrowLeft} iconPlacement='left'>
            Expand Icon Left
          </Button>
        ),
        code: [
          {
            filename: 'Button.tsx',
            language: 'tsx',
            code: `<Button effect="expandIcon" icon={ArrowLeft} iconPlacement="left">
  Expand Icon Left
</Button>`,
          },
        ],
      },
    ],
  },
  {
    title: 'Loading',
    items: [
      {
        button: <Button loading>Default</Button>,
        code: [
          {
            filename: 'Button.tsx',
            language: 'tsx',
            code: `<Button loading>
  Default
</Button>`,
          },
        ],
      },
      {
        button: (
          <Button variant='destructive' loading>
            Destructive
          </Button>
        ),
        code: [
          {
            filename: 'Button.tsx',
            language: 'tsx',
            code: `<Button variant="destructive" loading>
  Destructive
</Button>`,
          },
        ],
      },
      {
        button: (
          <Button variant='outline' loading>
            Outline
          </Button>
        ),
        code: [
          {
            filename: 'Button.tsx',
            language: 'tsx',
            code: `<Button variant="outline" loading>
  Outline
</Button>`,
          },
        ],
      },
      {
        button: (
          <Button effect='ringHover' loading>
            Ring Hover
          </Button>
        ),
        code: [
          {
            filename: 'Button.tsx',
            language: 'tsx',
            code: `<Button effect="ringHover" loading>
  Ring Hover
</Button>`,
          },
        ],
      },
      {
        button: (
          <Button effect='shine' loading>
            Shine
          </Button>
        ),
        code: [
          {
            filename: 'Button.tsx',
            language: 'tsx',
            code: `<Button effect="shine" loading>
  Shine
</Button>`,
          },
        ],
      },
      {
        button: (
          <Button effect='rainbow' loading>
            Rainbow
          </Button>
        ),
        code: [
          {
            filename: 'Button.tsx',
            language: 'tsx',
            code: `<Button effect="rainbow" loading>
  Rainbow
</Button>`,
          },
        ],
      },
    ],
  },
];
