'use client';

import {
  BundledLanguage,
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockItem,
} from './kibo-ui/code-block';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface Props {
  button: React.ReactNode;
  code: {
    filename: string;
    language: BundledLanguage;
    code: string;
  }[];
}

function ButtonExample({ button, code }: Props): React.ReactNode {
  return (
    <Tabs defaultValue='example' className='w-full h-60'>
      <TabsList>
        <TabsTrigger value='example'>Example</TabsTrigger>
        <TabsTrigger value='code'>Code</TabsTrigger>
      </TabsList>
      <TabsContent value='example'>
        <div className='flex items-center justify-center shadow-lg inset-shadow-2xs h-full rounded-md bg-popover'>
          {button}
        </div>
      </TabsContent>
      <TabsContent value='code'>
        {' '}
        <CodeBlock data={code} defaultValue={code[0].language}>
          <CodeBlockHeader className='justify-end'>
            <CodeBlockCopyButton />
          </CodeBlockHeader>
          <CodeBlockBody className='max-h-100'>
            {(item) => (
              <CodeBlockItem key={item.language} value={item.language}>
                <CodeBlockContent language={item.language as BundledLanguage}>
                  {item.code}
                </CodeBlockContent>
              </CodeBlockItem>
            )}
          </CodeBlockBody>
        </CodeBlock>
      </TabsContent>
    </Tabs>
  );
}

export default ButtonExample;
