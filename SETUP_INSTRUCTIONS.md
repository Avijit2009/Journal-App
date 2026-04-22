# 🗄️ SUPABASE SQL — Run this first!

Go to: Supabase Dashboard → SQL Editor → New Query → Paste this → Click Run

```sql
create table entries (
  id uuid primary key default uuid_generate_v4(),
  user_id text not null,
  title text default 'Untitled',
  content text not null,
  created_at timestamp with time zone default now()
);

-- Only let users see their own entries
alter table entries enable row level security;

create policy "Users can manage their own entries"
on entries for all
using (user_id = auth.uid()::text)
with check (user_id = auth.uid()::text);
```

---

# 🚀 HOW TO DEPLOY YOUR JOURNAL (No PC needed)

## Step 1 — Create a GitHub account
Go to github.com → Sign up (free)

## Step 2 — Upload your files to GitHub
1. Go to github.com → Click "+" → "New repository"
2. Name it: my-journal-app
3. Make it Private
4. Click "Create repository"
5. Click "uploading an existing file"
6. Upload ALL the files from this project

## Step 3 — Get your Clerk SECRET key
1. Go to clerk.com → Your app → API Keys
2. Copy the "Secret key" (starts with sk_test_...)
3. You need this for Vercel

## Step 4 — Deploy on Vercel
1. Go to vercel.com → Sign up with GitHub
2. Click "Add New Project"
3. Import your GitHub repo
4. Click "Environment Variables" and add ALL of these:

   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = pk_test_c3BlY2lhbC1tYXJtb3NldC00MC5jbGVyay5hY2NvdW50cy5kZXYk
   CLERK_SECRET_KEY = (your secret key from clerk)
   NEXT_PUBLIC_SUPABASE_URL = https://xhrmdxcujyafozndpofs.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhocm1keGN1anlhZm96bmRwb2ZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4NjYzODUsImV4cCI6MjA5MjQ0MjM4NX0.Gtt36b7ArToaBnQK0n_GiDKxsLfVv9d5TnlXPD3U1l0
   NEXT_PUBLIC_CLERK_SIGN_IN_URL = /sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL = /sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL = /dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL = /dashboard

5. Click "Deploy"
6. Wait 2 minutes → Your journal is LIVE! 🎉

Your URL will be: https://my-journal-app.vercel.app
