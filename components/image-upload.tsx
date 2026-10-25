"use client";

import { useState, type ChangeEvent } from "react";

export function ImageUpload({ value, onChange, onUpload }: {
  value: string;
  onChange: (url: string) => void;
  onUpload: (file: File) => Promise<string>;
}) {
  const [busy, setBusy] = useState(false);

  async function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setBusy(true);
    try {
      const url = await onUpload(file);
      onChange(url);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Upload failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="grid gap-2 md:col-span-2">
      <span className="text-sm font-medium text-ink">Preview image</span>
      {value ? (
        <img src={value} alt="Preview" className="h-32 w-44 rounded-2xl border border-hairline object-cover" />
      ) : null}
      <input type="file" accept="image/*" onChange={handleFile} disabled={busy} className="text-sm text-ink" />
      {busy ? <span className="text-xs text-faint">Uploading…</span> : null}
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="…or paste an image URL"
        className="min-h-10 rounded-2xl border border-hairline bg-white px-3 text-sm text-ink"
      />
    </div>
  );
}
