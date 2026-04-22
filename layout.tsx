import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Folio — Your Private Journal",
  description: "A beautiful private journal to capture your thoughts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <nav className="nav">
            <Link href="/" className="nav-logo">
              Folio<span>.</span>
            </Link>
            <div className="nav-actions">
              <Show when="signed-out">
                <SignInButton mode="modal">
                  <button className="btn btn-ghost">Sign In</button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="btn btn-primary">Start Writing</button>
                </SignUpButton>
              </Show>
              <Show when="signed-in">
                <Link href="/dashboard" className="btn btn-ghost">My Journal</Link>
                <UserButton afterSignOutUrl="/" />
              </Show>
            </div>
          </nav>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
