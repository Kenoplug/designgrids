import type { Metadata } from "next";
import { AdminDashboard } from "@/components/admin-dashboard";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Manage products and projects for DesignGrids Studio."
};

export default function AdminPage() {
  return <AdminDashboard />;
}
