const HTML_ENTITIES: Record<string, string> = {
  '&amp;': '&',
  '&quot;': '"',
  '&#39;': "'",
  '&lt;': '<',
  '&gt;': '>',
};

export function decodeHtmlEntities(text: string): string {
  return text.replace(/&amp;|&quot;|&#39;|&lt;|&gt;/g, (match) => HTML_ENTITIES[match]);
}

export function cleanArticleTitle(title: string): string {
  return decodeHtmlEntities(title.trim());
}

export function cleanArticleSummary(summary: string | null): string | null {
  if (!summary) return null;
  const cleaned = decodeHtmlEntities(summary.trim());
  return cleaned.length > 0 ? cleaned : null;
}

export function formatRelativeTime(publishedAt: string | null): string {
  if (!publishedAt) return 'Date unknown';

  const publishedDate = new Date(publishedAt);
  if (Number.isNaN(publishedDate.getTime())) return 'Date unknown';

  const diffMs = Date.now() - publishedDate.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

  if (diffHours < 24) {
    return `${Math.max(diffHours, 0)}h ago`;
  }

  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d ago`;
}

export function formatConfidence(confidence: number): string | null {
  if (confidence >= 1) return null;
  return `${Math.round(confidence * 100)}% match`;
}

export function formatCategoryLabel(category: string): string {
  return category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
