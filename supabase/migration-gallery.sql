-- Add a gallery images array (migrating any existing single image_url into it)
alter table public.products add column if not exists images jsonb not null default '[]'::jsonb;
alter table public.projects add column if not exists images jsonb not null default '[]'::jsonb;

update public.products set images = jsonb_build_array(image_url) where coalesce(image_url, '') <> '' and images = '[]'::jsonb;
update public.projects set images = jsonb_build_array(image_url) where coalesce(image_url, '') <> '' and images = '[]'::jsonb;
