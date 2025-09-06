import React from 'react';
import { RealtimeVoiceSession } from './RealtimeVoiceSession.web';

export const RealtimeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <RealtimeVoiceSession />
            {children}
        </>
    );
};