import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge class names using clsx and tailwind-merge
 * @param args - Class names to merge
 * @returns Merged class names
 */
export function cn(...args: (string | undefined | null | boolean)[]) {
    return twMerge(clsx(args));
}
