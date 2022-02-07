import { IconType } from 'react-icons';
import { SiTypescript, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';
import { Category } from '../../../types/types';

export const icons: Record<Category, { icon: IconType; color: string }> = {
  typescript: {
    icon: SiTypescript,
    color: '#007acc',
  },
  javascript: {
    icon: SiJavascript,
    color: '#f0db4f',
  },
  html: {
    icon: SiHtml5,
    color: '#f06529',
  },
  css: {
    icon: SiCss3,
    color: '#3c99dc',
  },
};
