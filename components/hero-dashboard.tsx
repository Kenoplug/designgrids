"use client";

import { motion } from "framer-motion";
import { Activity, ArrowUpRight, Layers3, MousePointer2 } from "lucide-react";

export function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-xl lg:max-w-none"
    >
      <div className="rounded-3xl border border-hairline bg-white p-4">
        <div className="rounded-2xl border border-hairline bg-card">
          <div className="flex items-center justify-between border-b border-hairline px-4 py-3">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-divider" />
              <span className="h-2.5 w-2.5 rounded-full bg-faint" />
              <span className="h-2.5 w-2.5 rounded-full bg-divider" />
            </div>
            <span className="text-xs text-faint">Studio Command</span>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-[0.72fr_1.28fr]">
            <div className="space-y-3">
              {["Research", "Wireframes", "Design", "Handoff"].map((item, index) => (
                <div key={item} className="rounded-2xl border border-hairline bg-white p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-ink">{item}</span>
                    <span className="text-xs text-faint">{index === 2 ? "Live" : "Q" + (index + 1)}</span>
                  </div>
                  <div className="mt-3 h-1.5 rounded-full bg-black/5">
                    <div className="h-full rounded-full bg-graphite" style={{ width: `${42 + index * 14}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="min-h-80 rounded-2xl border border-hairline bg-grid bg-[length:32px_32px] p-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-hairline bg-white p-4">
                  <Activity className="h-5 w-5 text-ink" />
                  <p className="mt-6 text-3xl font-semibold text-ink">+38%</p>
                  <p className="text-sm text-pencil">Conversion lift</p>
                </div>
                <div className="rounded-2xl border border-hairline bg-white p-4">
                  <Layers3 className="h-5 w-5 text-ink" />
                  <p className="mt-6 text-3xl font-semibold text-ink">62</p>
                  <p className="text-sm text-pencil">Components</p>
                </div>
              </div>
              <div className="mt-3 rounded-2xl border border-hairline bg-white p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-ink">UX insight velocity</p>
                  <ArrowUpRight className="h-4 w-4 text-ink" />
                </div>
                <div className="mt-5 flex h-24 items-end gap-2">
                  {[44, 58, 36, 72, 64, 88, 78, 96].map((height) => (
                    <span key={height} className="flex-1 rounded-t bg-graphite" style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
              <motion.div
                animate={{ x: [0, 16, 4, 20, 0], y: [0, -8, 12, 4, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-hairline bg-graphite px-4 py-2 text-sm font-medium text-canvas"
              >
                <MousePointer2 className="h-4 w-4" /> Prototype review
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
