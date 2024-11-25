import { notFound } from "next/navigation";
import React from "react";

export default async function Company({
  params,
}: {
  params: Promise<{ code: String }>;
}) {
  notFound();
  const { code } = await params;
  return <div>对应的页面{code}</div>;
}
