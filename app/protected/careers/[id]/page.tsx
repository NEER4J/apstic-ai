"use client";

import { CareerEditor } from "@/components/admin/career-editor";
import { use } from "react";

export default function EditCareerPage({ params }: { params: Promise<{ id: string }> }) {
  const resolved = use(params);
  return <CareerEditor careerId={resolved.id} />;
}

