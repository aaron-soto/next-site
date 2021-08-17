import '../styles/globals.css';
import { useAnalytics } from '@/lib/analytics';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  useAnalytics();

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
