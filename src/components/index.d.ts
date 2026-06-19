import { ReactNode, MouseEventHandler } from 'react';

export declare function NavBar(props: {
  onBreathWithMe?: MouseEventHandler;
  onBookSession?: MouseEventHandler;
}): JSX.Element;

export declare function SectionDark(props: {
  children?: ReactNode;
  centered?: boolean;
  className?: string;
  id?: string;
}): JSX.Element;

export declare function SectionLight(props: {
  children?: ReactNode;
  centered?: boolean;
  className?: string;
  id?: string;
}): JSX.Element;

export declare function HeadlineDark(props: {
  boldLine?: string;
  italicLine?: string;
}): JSX.Element;

export declare function HeadlineLight(props: {
  children?: ReactNode;
  as?: string;
}): JSX.Element;

export declare function Button(props: {
  children?: ReactNode;
  variant?: 'solid' | 'outline';
  onClick?: MouseEventHandler;
}): JSX.Element;

export declare function BoxBreath(props?: Record<string, never>): JSX.Element;

export declare function Card(props: {
  subtitle?: string;
  title?: string;
  description?: string;
  price?: string;
  ctaLabel?: string;
  variant?: 'dark' | 'light';
  onCta?: MouseEventHandler;
}): JSX.Element;

export declare function FAQItem(props: {
  question: string;
  answer: string;
}): JSX.Element;

export declare function ContactBlock(props: {
  headline?: string;
  body?: string;
  email?: string;
  phone?: string;
  whatsapp?: string;
}): JSX.Element;

export declare function JourneySelector(props: {
  onPrivate?: MouseEventHandler;
  onGroup?: MouseEventHandler;
}): JSX.Element;

export declare function ParallaxDivider(props: {
  imageSrc: string;
  quote?: string;
  label?: string;
}): JSX.Element;

export declare function WhatIsBreathwork(props?: Record<string, never>): JSX.Element;

export declare function BreathCircle(props?: Record<string, never>): JSX.Element;
