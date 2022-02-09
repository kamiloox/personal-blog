import { IconType } from 'react-icons';
import { SiTypescript, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';
import { Category } from '../../../types/types';

export const icons: Record<Category, { icon: IconType; color: string }> = {
  [Category.Typescript]: {
    icon: SiTypescript,
    color: '#007acc',
  },
  [Category.Javascript]: {
    icon: SiJavascript,
    color: '#f0db4f',
  },
  [Category.Html]: {
    icon: SiHtml5,
    color: '#f06529',
  },
  [Category.Css]: {
    icon: SiCss3,
    color: '#3c99dc',
  },
};
