"use client";

import { useState, type ChangeEvent } from "react";

export function ImageGallery({ images, onChange, onUpload }: {
  images: string[];
  onChange: (urls: string[]) => void;
  onUpload: (file: File) => Promise<string>;
}) {
  const [busy, setBusy] = useState(false);
  const [urlInput, setUrlInput] = useState("");

  async function handleFiles(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    if (!files.length) return;
    setBusy(true);
    try {
      const urls: string[] = [];
      for (const file of files) {
        const url = await onUpload(file);
        urls.push(url);
      }
      onChange([...images, ...urls]);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Upload failed");
    } finally {
      setBusy(false);
      event.target.value = "";
    }
  }

  function addUrl() {
    const url = urlInput.trim();
    if (!url) return;
    onChange([...images, url]);
    setUrlInput("");
  }

  function remove(index: number) {
    onChange(images.filter((_, i) => i !== index));
  }

  return (
    <div className="grid gap-3 md:col-span-2">
      <span className="text-sm font-medium text-ink">Gallery images ({images.length})</span>
      {images.length > 0 ? (
        <div className="grid grid-cols-3 gap-3">
          {images.map((url, i) => (
            <div key={i} className="relative">
              <img src={url} alt={`Image ${i + 1}`} className="h-28 w-full rounded-2xl border border-hairline object-cover" />
              <button type="button" onClick={() => remove(i)} className="absolute right-1 top-1 grid h-6 w-6 place-items-center rounded-full bg-graphite text-xs text-canvas">×</button>
            </div>
          ))}
        </div>
      ) : null}
      <label className="cursor-pointer rounded-2xl border border-hairline px-4 py-2 text-sm text-ink">
        {busy ? "Uploading…" : "Upload images"}
        <input type="file" accept="image/*" multiple onChange={handleFiles} disabled={busy} className="hidden" />
      </label>
      <div className="flex gap-2">
        <input value={urlInput} onChange={(e) => setUrlInput(e.target.value)} placeholder="…or paste an image URL and click Add" className="min-h-10 flex-1 rounded-2xl border border-hairline bg-white px-3 text-sm text-ink" />
        <button type="button" onClick={addUrl} className="rounded-2xl border border-hairline px-4 text-sm text-ink">Add</button>
      </div>
    </div>
  );
}
