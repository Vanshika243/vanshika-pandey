import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-slate-100 sm:px-10">
      <div className="relative mx-auto w-full max-w-3xl rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-glow backdrop-blur-xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">404</p>
          <h1 className="mt-4 text-5xl font-semibold text-white sm:text-6xl">Page not found</h1>
          <p className="mt-4 text-base leading-7 text-slate-400">
            The page you’re looking for doesn’t exist or has been moved. Let’s get you back to the portfolio.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-4 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Back to home
          </Link>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-950/90 px-6 py-4 text-center text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-white"
          >
            Contact support
          </a>
        </div>
      </div>
    </main>
  );
}
