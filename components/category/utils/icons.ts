import { IconType } from 'react-icons';
import { SiTypescript, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';
import { Category } from '../../../types/types';

export const icons: Record<Category, IconType> = {
  [Category.Typescript]: SiTypescript,
  [Category.Javascript]: SiJavascript,
  [Category.Html]: SiHtml5,
  [Category.Css]: SiCss3,
};
