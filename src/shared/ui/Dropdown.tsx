'use client'

import { CheckIcon, ChevronDownIcon } from '@/shared/icons'
import { useEffect, useRef, useState, type ReactNode } from 'react'

export interface DropdownOption {
	value: string
	label: string
}

interface DropdownProps {
	options: DropdownOption[]
	value: string
	onChange: (value: string) => void
	icon?: ReactNode
	className?: string
}

export function Dropdown({
	options,
	value,
	onChange,
	icon,
	className = ''
}: DropdownProps) {
	const [isOpen, setIsOpen] = useState(false)
	const rootRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const selectedLabel =
		options.find(option => option.value === value)?.label ?? ''

	return (
		<div
			ref={rootRef}
			className={`relative inline-block ${className}`}
		>
			<button
				type='button'
				onClick={() => setIsOpen(prev => !prev)}
				className='flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50'
			>
				{icon}
				{selectedLabel}
				<ChevronDownIcon
					className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
				/>
			</button>

			{isOpen && (
				<ul className='absolute right-0 z-10 mt-2 w-56 overflow-hidden rounded-lg border border-gray-200 bg-white py-1 shadow-lg'>
					{options.map(option => (
						<li key={option.value}>
							<button
								type='button'
								onClick={() => {
									onChange(option.value)
									setIsOpen(false)
								}}
								className={`flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm hover:bg-gray-50 ${
									option.value === value
										? 'bg-gray-100 font-medium text-gray-900'
										: 'text-gray-700'
								}`}
							>
								<span className='flex h-4 w-4 items-center justify-center'>
									{option.value === value && <CheckIcon className='h-4 w-4' />}
								</span>
								{option.label}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
