'use client'

import type { NewsArticle } from '@/entities/news/model/types'
import { CategoryFilter } from '@/features/news-filters/ui/CategoryFilter'
import { NewsCard } from '@/features/news/ui/NewsCard'
import { useMemo, useState } from 'react'

interface CompanyNewsListProps {
	companyName: string
	articles: NewsArticle[]
}

export function CompanyNewsList({
	companyName,
	articles
}: CompanyNewsListProps) {
	const [selectedCategory, setSelectedCategory] = useState('all')

	const categories = useMemo(
		() => [
			'all',
			...Array.from(new Set(articles.map(article => article.category)))
		],
		[articles]
	)

	const categoryFilterVisible = categories.length > 2

	const filteredArticles = useMemo(
		() =>
			selectedCategory === 'all'
				? articles
				: articles.filter(article => article.category === selectedCategory),
		[articles, selectedCategory]
	)

	return (
		<section className='flex flex-col gap-6'>
			<div className='flex flex-wrap items-center justify-between gap-4'>
				<div>
					<h1 className='text-2xl font-semibold text-gray-900'>News</h1>
					<p className='mt-1 text-sm text-gray-500'>
						Recent news articles mentioning {companyName}
					</p>
				</div>

				{categoryFilterVisible && (
					<CategoryFilter
						categories={categories}
						selected={selectedCategory}
						onChange={setSelectedCategory}
					/>
				)}
			</div>

			{filteredArticles.length === 0 ? (
				<div className='rounded-xl border border-dashed border-gray-200 p-12 text-center'>
					<p className='font-medium text-gray-900'>No news articles found</p>
					<p className='mt-1 text-sm text-gray-500'>
						News articles will appear here once detected.
					</p>
				</div>
			) : (
				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					{filteredArticles.map(article => (
						<NewsCard
							key={article.id}
							article={article}
						/>
					))}
				</div>
			)}
		</section>
	)
}
