import { formatCategoryLabel } from '@/entities/news/lib/format'
import { FilterIcon } from '@/shared/icons'
import { Dropdown } from '@/shared/ui/Dropdown'

interface CategoryFilterProps {
	categories: string[]
	selected: string
	onChange: (category: string) => void
}

export function CategoryFilter({
	categories,
	selected,
	onChange
}: CategoryFilterProps) {
	const options = categories.map(category => ({
		value: category,
		label: category === 'all' ? 'All Categories' : formatCategoryLabel(category)
	}))

	return (
		<Dropdown
			options={options}
			value={selected}
			onChange={onChange}
			icon={<FilterIcon className='h-4 w-4 text-gray-500' />}
		/>
	)
}
