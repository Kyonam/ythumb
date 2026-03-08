import { Metadata } from 'next';
import AuthContent from '@/components/main/auth-content';

export const metadata: Metadata = {
    title: 'Sign In | ythumb AI',
    description: 'Sign in to your ythumb AI account to start creating viral YouTube thumbnails.',
};

export default function AuthPage() {
    return <AuthContent />;
}
