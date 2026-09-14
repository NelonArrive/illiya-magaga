import { CompanyNewsList } from '@/widgets/company-news/ui/CompanyNewsList';
import { mockCompanyName, mockNewsArticles } from '@/entities/news/model/mock-data';

export default function CompanyNewsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <CompanyNewsList companyName={mockCompanyName} articles={mockNewsArticles} />
    </main>
  );
}
