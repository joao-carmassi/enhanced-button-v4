'use client';

import { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Star,
  Heart,
  Search,
  Download,
  Upload,
  Trash2,
  Plus,
  Minus,
  Check,
  X,
  Send,
  Mail,
  Bell,
  Settings,
  User,
  Home,
  Zap,
  Globe,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  ChevronRight,
  ChevronLeft,
  Copy,
  RotateCcw,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Variant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link';
type Effect =
  | 'none'
  | 'expandIcon'
  | 'ringHover'
  | 'shine'
  | 'shineHover'
  | 'gooeyRight'
  | 'gooeyLeft'
  | 'underline'
  | 'hoverUnderline'
  | 'pulsating'
  | 'rainbow';
type Size =
  | 'icon'
  | 'icon-xs'
  | 'icon-sm'
  | 'icon-lg'
  | 'xs'
  | 'sm'
  | 'default'
  | 'lg';
type IconPlacement = 'left' | 'right';

const icons: { label: string; icon: LucideIcon }[] = [
  { label: 'None', icon: X },
  { label: 'Arrow Right', icon: ArrowRight },
  { label: 'Arrow Left', icon: ArrowLeft },
  { label: 'Arrow Up', icon: ArrowUp },
  { label: 'Arrow Down', icon: ArrowDown },
  { label: 'Star', icon: Star },
  { label: 'Heart', icon: Heart },
  { label: 'Search', icon: Search },
  { label: 'Download', icon: Download },
  { label: 'Upload', icon: Upload },
  { label: 'Trash', icon: Trash2 },
  { label: 'Plus', icon: Plus },
  { label: 'Minus', icon: Minus },
  { label: 'Check', icon: Check },
  { label: 'Send', icon: Send },
  { label: 'Mail', icon: Mail },
  { label: 'Bell', icon: Bell },
  { label: 'Settings', icon: Settings },
  { label: 'User', icon: User },
  { label: 'Home', icon: Home },
  { label: 'Zap', icon: Zap },
  { label: 'Globe', icon: Globe },
  { label: 'Lock', icon: Lock },
  { label: 'Unlock', icon: Unlock },
  { label: 'Eye', icon: Eye },
  { label: 'Eye Off', icon: EyeOff },
  { label: 'Chevron Right', icon: ChevronRight },
  { label: 'Chevron Left', icon: ChevronLeft },
];

export default function ButtonPlayground() {
  const [text, setText] = useState('Click me');
  const [variant, setVariant] = useState<Variant>('default');
  const [effect, setEffect] = useState<Effect>('none');
  const [size, setSize] = useState<Size>('default');
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [iconKey, setIconKey] = useState('None');
  const [iconPlacement, setIconPlacement] = useState<IconPlacement>('right');
  const [rounded, setRounded] = useState(false);
  const [copied, setCopied] = useState(false);

  const selectedIconEntry = icons.find((i) => i.label === iconKey);
  const hasIcon = iconKey !== 'None' && selectedIconEntry;
  const isIconOnly = ['icon', 'icon-xs', 'icon-sm', 'icon-lg'].includes(size);

  function generateCode() {
    const props: string[] = [];
    if (variant !== 'default') props.push(`variant='${variant}'`);
    if (effect !== 'none') props.push(`effect='${effect}'`);
    if (size !== 'default') props.push(`size='${size}'`);
    if (hasIcon && !isIconOnly) {
      props.push(`icon={${iconKey.replace(/ /g, '')}}`);
      props.push(`iconPlacement='${iconPlacement}'`);
    }
    if (disabled) props.push('disabled');
    if (loading) props.push('loading');
    if (rounded) props.push("className='rounded-full'");

    const propsStr = props.length ? ' ' + props.join(' ') : '';
    const child = isIconOnly
      ? `\n  <${hasIcon ? iconKey.replace(/ /g, '') : 'Star'} />\n`
      : `\n  ${text || ''}\n`;

    return `<Button${propsStr}>${child}</Button>`;
  }

  function handleCopy() {
    navigator.clipboard.writeText(generateCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleReset() {
    setText('Click me');
    setVariant('default');
    setEffect('none');
    setSize('default');
    setDisabled(false);
    setLoading(false);
    setIconKey('None');
    setIconPlacement('right');
    setRounded(false);
  }

  return (
    <section className='px-6 py-6 md:py-12 '>
      <div className='container mx-auto w-full min-w-0'>
        <div className='space-y-2 mb-8'>
          <h2 className='text-xl font-medium sm:text-4xl md:text-center'>
            Button Playground
          </h2>
          <p className='md:text-center text-muted-foreground font-semibold'>
            Customize the button using the controls below and see your changes
            live.
          </p>
        </div>

        <div className='flex flex-col lg:flex-row gap-8 items-center bg-muted rounded-2xl p-3 inset-shadow-sm'>
          {/* Preview */}
          <div className='grid place-items-center w-full mt-5 lg:mt-0'>
            {(() => {
              const PreviewIcon = hasIcon
                ? selectedIconEntry.icon
                : isIconOnly
                  ? Star
                  : undefined;
              const commonProps = {
                variant,
                effect: effect === 'none' ? undefined : effect,
                size,
                disabled: disabled || loading,
                loading,
                className: rounded ? 'rounded-full' : undefined,
              };
              if (PreviewIcon && !isIconOnly) {
                return (
                  <Button
                    {...commonProps}
                    icon={PreviewIcon}
                    iconPlacement={iconPlacement}
                  >
                    {text || '\u00A0'}
                  </Button>
                );
              }
              return (
                <Button {...commonProps}>
                  {isIconOnly && PreviewIcon ? (
                    <PreviewIcon />
                  ) : (
                    text || '\u00A0'
                  )}
                </Button>
              );
            })()}
          </div>

          {/* Controls */}
          <div className='w-full lg:w-96 shrink-0 rounded-xl bg-card p-6 space-y-5 shadow-md inset-shadow-2xs'>
            {/* Text */}
            <div className='space-y-1.5'>
              <Label htmlFor='btn-text'>Label text</Label>
              <Input
                id='btn-text'
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Button text…'
                disabled={isIconOnly}
              />
              {isIconOnly && (
                <p className='text-xs text-muted-foreground'>
                  Text is hidden for icon-only sizes.
                </p>
              )}
            </div>

            {/* Variant */}
            <div className='space-y-1.5'>
              <Label htmlFor='btn-variant'>Variant</Label>
              <Select
                value={variant}
                onValueChange={(v) => setVariant(v as Variant)}
              >
                <SelectTrigger id='btn-variant' className='w-full'>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {(
                    [
                      'default',
                      'destructive',
                      'outline',
                      'secondary',
                      'ghost',
                      'link',
                    ] as Variant[]
                  ).map((v) => (
                    <SelectItem key={v} value={v}>
                      {v.charAt(0).toUpperCase() + v.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Effect */}
            <div className='space-y-1.5'>
              <Label htmlFor='btn-effect'>Effect</Label>
              <Select
                value={effect}
                onValueChange={(v) => setEffect(v as Effect)}
              >
                <SelectTrigger id='btn-effect' className='w-full'>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {(
                    [
                      'none',
                      'expandIcon',
                      'ringHover',
                      'shine',
                      'shineHover',
                      'gooeyRight',
                      'gooeyLeft',
                      'underline',
                      'hoverUnderline',
                      'pulsating',
                      'rainbow',
                    ] as Effect[]
                  ).map((ef) => (
                    <SelectItem key={ef} value={ef}>
                      {ef === 'none'
                        ? 'None'
                        : ef.replace(/([A-Z])/g, ' $1').trim()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Size */}
            <div className='space-y-1.5'>
              <Label htmlFor='btn-size'>Size</Label>
              <Select value={size} onValueChange={(v) => setSize(v as Size)}>
                <SelectTrigger id='btn-size' className='w-full'>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {(
                    [
                      'icon-xs',
                      'icon-sm',
                      'icon',
                      'icon-lg',
                      'xs',
                      'sm',
                      'default',
                      'lg',
                    ] as Size[]
                  ).map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Icon */}
            <div className='space-y-1.5'>
              <Label htmlFor='btn-icon'>Icon</Label>
              <Select value={iconKey} onValueChange={setIconKey}>
                <SelectTrigger id='btn-icon' className='w-full'>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {icons.map(({ label }) => (
                    <SelectItem key={label} value={label}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Icon placement */}
            {hasIcon && !isIconOnly && (
              <div className='space-y-1.5'>
                <Label htmlFor='btn-icon-placement'>Icon placement</Label>
                <Select
                  value={iconPlacement}
                  onValueChange={(v) => setIconPlacement(v as IconPlacement)}
                >
                  <SelectTrigger id='btn-icon-placement' className='w-full'>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='left'>Left</SelectItem>
                    <SelectItem value='right'>Right</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Checkboxes */}
            <div className='flex flex-wrap gap-6 pt-1'>
              <div className='flex items-center gap-2'>
                <Checkbox
                  id='btn-disabled'
                  checked={disabled}
                  onCheckedChange={(v) => setDisabled(v === true)}
                />
                <Label htmlFor='btn-disabled' className='cursor-pointer'>
                  Disabled
                </Label>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox
                  id='btn-loading'
                  checked={loading}
                  onCheckedChange={(v) => setLoading(v === true)}
                />
                <Label htmlFor='btn-loading' className='cursor-pointer'>
                  Loading
                </Label>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox
                  id='btn-rounded'
                  checked={rounded}
                  onCheckedChange={(v) => setRounded(v === true)}
                />
                <Label htmlFor='btn-rounded' className='cursor-pointer'>
                  Rounded full
                </Label>
              </div>
            </div>

            {/* Actions */}
            <div className='flex gap-3 pt-1'>
              <Button
                className='flex-1'
                onClick={handleCopy}
                icon={copied ? Check : Copy}
                iconPlacement='left'
              >
                {copied ? 'Copied!' : 'Copy code'}
              </Button>
              <Button
                variant='ghost'
                onClick={handleReset}
                icon={RotateCcw}
                iconPlacement='left'
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
