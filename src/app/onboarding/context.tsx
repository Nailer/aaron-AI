"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GoalData {
  goalDescription: string;
  annualIncome: number;
  timeframe: string;
  riskAppetite: 'CONSERVATIVE' | 'MODERATE' | 'AGGRESSIVE';
  incomePredictability: string;
  savingsTarget: string;
  aiInterventionPreference: string;
  adviceFormatPreference: string;
  additionalInfo: string;
}

interface OnboardingContextType {
  data: GoalData;
  updateData: (updates: Partial<GoalData>) => void;
}

const defaultData: GoalData = {
  goalDescription: "",
  annualIncome: 125000,
  timeframe: "2 Years (Target 2028)",
  riskAppetite: "MODERATE",
  incomePredictability: "",
  savingsTarget: "",
  aiInterventionPreference: "",
  adviceFormatPreference: "",
  additionalInfo: "",
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<GoalData>(defaultData);

  const updateData = (updates: Partial<GoalData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  };

  return (
    <OnboardingContext.Provider value={{ data, updateData }}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
}
