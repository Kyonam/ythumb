-- Create thumbnails table
CREATE TABLE IF NOT EXISTS public.thumbnails (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
    prompt TEXT NOT NULL,
    image_url TEXT,
    status TEXT DEFAULT 'pending', -- pending, processing, completed, failed
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.thumbnails ENABLE ROW LEVEL SECURITY;

-- Policies for public.thumbnails
CREATE POLICY "Users can view their own thumbnails" ON public.thumbnails
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own thumbnails" ON public.thumbnails
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own thumbnails" ON public.thumbnails
    FOR DELETE USING (auth.uid() = user_id);

-- Create storage bucket for images
INSERT INTO storage.buckets (id, name, public)
VALUES ('images', 'images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for 'images' bucket
-- Allow anyone to view thumbnails (since we want to share/display them)
CREATE POLICY "Public Access" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'images');

-- Allow authenticated users to upload their generated images
CREATE POLICY "Authenticated users can upload images" 
ON storage.objects FOR INSERT 
TO authenticated 
WITH CHECK (bucket_id = 'images');

-- Allow owners to delete their own images
CREATE POLICY "Users can delete their own images" 
ON storage.objects FOR DELETE 
TO authenticated 
USING (bucket_id = 'images' AND (storage.foldername(name))[1] = auth.uid()::text);
