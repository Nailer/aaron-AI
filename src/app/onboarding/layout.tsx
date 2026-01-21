import { OnboardingProvider } from './context';

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <OnboardingProvider>
      <div className="min-h-screen bg-[#0B0E14] text-white selection:bg-blue-500/30">
        {children}
      </div>
    </OnboardingProvider>
  );
}
