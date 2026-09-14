export interface NewsArticle {
  id: string;
  title: string;
  summary: string | null;
  url: string;
  publishedAt: string | null; 
  category: string;
  tags: string[];
  imageUrl: string | null;
  confidence: number; 
  sourceName: string | null;
}
