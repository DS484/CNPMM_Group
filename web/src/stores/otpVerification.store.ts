import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type otpVerificationState = {
  email: string | null;
};

type otpVerificationActions = {
  setEmail: (email: string | null) => void;
};

export const useOtpVerificationStore = create(
  persist<otpVerificationState & otpVerificationActions>(
    set => ({
      email: null,
      setEmail: email => set({ email })
    }),
    {
      name: 'verify-otp'
    }
  )
);