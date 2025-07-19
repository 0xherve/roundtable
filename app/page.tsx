import ContactSection from '@/components/Contacts';
import HeroSection from '@/components/Hero'
import SolutionSection from '@/components/Mission';
import ProblemSection from '@/components/Problem';
import PrototypeSection from '@/components/PrototypeSection';
import ChallengeSection from '@/components/challenges';
import PrototypeTeaser from '@/components/PrototypeTeaser'
import TeamSection from '@/components/TeamSection';

export default function Home() {
  return (
   <main>
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <ChallengeSection />
    <PrototypeSection />
    <PrototypeTeaser />
    <TeamSection />
   </main>
  );
}
