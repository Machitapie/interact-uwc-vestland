import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "pk90lq2s";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const sanity = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});

export type ProjectDoc = {
  _id: string;
  title: string;
  subtitle?: string;
  status: "active" | "planning" | "upcoming" | "exploring" | "future" | "completed";
  summary?: string;
  partners?: string[];
  lead?: string;
  startDate?: string;
  endDate?: string;
  order?: number;
  featured?: boolean;
};

export async function getProjects(): Promise<ProjectDoc[]> {
  try {
    return await sanity.fetch<ProjectDoc[]>(
      `*[_type == "project"] | order(coalesce(order, 100) asc, _createdAt desc){
        _id, title, subtitle, status, summary, partners, lead, startDate, endDate, order, featured
      }`,
      {},
      { next: { revalidate: 60 } }
    );
  } catch (e) {
    console.warn("Sanity fetch failed; using fallback", e);
    return [];
  }
}
