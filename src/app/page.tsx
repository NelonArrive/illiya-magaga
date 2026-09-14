import {
	mockCompanyName,
	mockNewsArticles
} from '@/entities/news/model/mock-data'
import { CompanyNewsList } from '@/widgets/company-news/ui/CompanyNewsList'

export default function Home() {
	return (
		<main className='mx-auto max-w-6xl px-4 py-8'>
			<CompanyNewsList
				companyName={mockCompanyName}
				articles={mockNewsArticles}
			/>
		</main>
	)
}
