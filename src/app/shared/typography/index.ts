import { KeyValuePair, ResolvableTo } from 'tailwindcss/types/config'

export const typography: ResolvableTo<KeyValuePair<string, [fontSize: string, lineHeight: string]>> = {
  'sm': ['14px', '22.4px'],
  'base': ['16px', '25.6px'],
  'lg': ['18px', '28.8px'],
  'xl': ['22px', '26.4px'],
  '2xl': ['26px', '31.2px'],
  '3xl': ['30px', '36px'],
  '4xl': ['34px', '40.8px'],
  '5xl': ['38px', '45.6px'],
  '6xl': ['42px', '50.4px'],
}
