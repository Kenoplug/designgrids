-- Add image_url columns (idempotent)
alter table public.products add column if not exists image_url text not null default '';
alter table public.projects add column if not exists image_url text not null default '';

-- Create a public storage bucket for preview images
insert into storage.buckets (id, name, public)
values ('images', 'images', true)
on conflict (id) do nothing;

-- Allow public read access to images
drop policy if exists "public read images" on storage.objects;
create policy "public read images" on storage.objects
for select using (bucket_id = 'images');
