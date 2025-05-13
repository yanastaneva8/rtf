import { redirect } from 'next/navigation';

export default function RootRedirect() {
  redirect('/en'); // or '/bg' if Bulgarian is your default
}
