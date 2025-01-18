import { Metadata } from 'next';
import Hero from './hero';

export const metadata: Metadata = {
  title: 'XLearn - Learn Programming & Frameworks',
};

export default function Home() {
  return <Hero />;
}
