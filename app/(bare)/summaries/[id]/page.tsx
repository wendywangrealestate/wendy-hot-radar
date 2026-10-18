import { notFound } from "next/navigation";
import SummaryCard, { type SummaryCardData } from "@/components/SummaryCard";
import { radarItems } from "@/data/radar";
import { reports } from "@/data/reports";

export function generateStaticParams() {
  return [
    ...radarItems.map((i) => ({ id: i.id })),
    ...reports.map((r) => ({ id: `report-${r.slug}` })),
  ];
}

function getCardData(id: string): SummaryCardData | null {
  const item = radarItems.find((i) => i.id === id);
  if (item) {
    return {
      kicker: "每日精选",
      date: item.date,
      title: item.title,
      points: item.points,
      noteLabel: "WENDY 点评",
      note: item.wendyNote,
      source: item.source,
      heat: item.heat,
    };
  }
  if (id.startsWith("report-")) {
    const r = reports.find((x) => `report-${x.slug}` === id);
    if (r) {
      return {
        kicker: "市场报告",
        date: r.date,
        title: r.title,
        points: r.points,
        noteLabel: "核心判断",
        note: r.excerpt,
        source: "TRREB / Bank of Canada / Royal LePage / Urbanation",
      };
    }
  }
  return null;
}

export default async function SummaryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = getCardData(id);
  if (!data) notFound();
  return (
    <div className="flex min-h-screen items-start justify-center bg-black">
      <SummaryCard data={data} />
    </div>
  );
}
