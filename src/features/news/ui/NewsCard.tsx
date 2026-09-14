'use client'

import {
	formatCategoryLabel,
	formatConfidence,
	formatRelativeTime
} from '@/entities/news/lib/format'
import type { NewsArticle } from '@/entities/news/model/types'
import {
	BookmarkIcon,
	ExternalLinkIcon,
	NewspaperIcon,
	ShareIcon
} from '@/shared/icons'
import { Badge } from '@/shared/ui/Badge'
import { Button } from '@/shared/ui/Button'
import { IconButton } from '@/shared/ui/IconButton'
import { useState } from 'react'

interface NewsCardProps {
	article: NewsArticle
}

export function NewsCard({ article }: NewsCardProps) {
	const [imageFailed, setImageFailed] = useState(false)
	const showImage = Boolean(article.imageUrl) && !imageFailed
	const confidenceLabel = formatConfidence(article.confidence)

	return (
		<article className='flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm'>
			<div className='relative h-44 w-full bg-gray-100'>
				{showImage ? (
					// eslint-disable-next-line @next/next/no-img-element
					<img
						src={article.imageUrl ?? undefined}
						alt={article.title}
						className='h-full w-full object-cover'
						onError={() => setImageFailed(true)}
					/>
				) : (
					<div className='flex h-full w-full items-center justify-center'>
						<NewspaperIcon className='h-10 w-10 text-gray-300' />
					</div>
				)}
			</div>

			<div className='flex flex-1 flex-col gap-3 p-4'>
				<div className='flex items-center justify-between gap-2'>
					<Badge>{formatCategoryLabel(article.category)}</Badge>
					<span className='whitespace-nowrap text-xs text-gray-400'>
						{formatRelativeTime(article.publishedAt)}
					</span>
				</div>

				<h3 className='line-clamp-2 text-base font-semibold text-gray-900'>
					{article.title}
				</h3>

				{article.summary && (
					<p className='line-clamp-3 text-sm text-gray-500'>
						{article.summary}
					</p>
				)}

				{article.tags.length > 0 && (
					<div className='flex flex-wrap gap-1.5'>
						{article.tags.map(tag => (
							<span
								key={tag}
								className='rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-500'
							>
								{tag}
							</span>
						))}
					</div>
				)}

				<div className='mt-auto flex flex-col gap-2 pt-1'>
					{(confidenceLabel || article.sourceName) && (
						<div className='flex items-center gap-2'>
							{confidenceLabel && (
								<Badge variant='outline'>{confidenceLabel}</Badge>
							)}
							{article.sourceName && (
								<span className='text-xs text-gray-400'>
									{article.sourceName}
								</span>
							)}
						</div>
					)}

					<div className='flex items-center gap-2'>
						<Button
							variant='secondary'
							className='flex-1'
							onClick={() =>
								window.open(article.url, '_blank', 'noopener,noreferrer')
							}
						>
							<ExternalLinkIcon className='h-4 w-4' />
							Read Article
						</Button>
						<IconButton aria-label='Bookmark article'>
							<BookmarkIcon className='h-4 w-4' />
						</IconButton>
						<IconButton aria-label='Share article'>
							<ShareIcon className='h-4 w-4' />
						</IconButton>
					</div>
				</div>
			</div>
		</article>
	)
}
