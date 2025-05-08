import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import type * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ArrowDown } from 'lucide-react';

const TocDropdownMenu = (
    props: {
        sections: { id: string; title: string }[];
        tocTitle: string;
    } & React.ComponentProps<typeof DropdownMenuPrimitive.Root>
) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="w-full">
                <Button
                    variant="outline"
                    id="toc-mobile-trigger"
                    className="w-full justify-between"
                >
                    <span id="toc-mobile-selected-title" className="truncate">
                        {props.tocTitle}
                    </span>
                    <ArrowDown className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-[var(--radix-dropdown-menu-trigger-width)]"
                align="start"
            >
                <DropdownMenuLabel className="sr-only">
                    {props.tocTitle}
                </DropdownMenuLabel>

                {props.sections.map(section => (
                    <DropdownMenuItem key={section.id} asChild>
                        <a
                            href={`#${section.id}`}
                            className={cn('toc-link-mobile w-full text-sm')}
                            data-section-id={section.id}
                            data-section-title={section.title}
                        >
                            {section.title}
                        </a>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default TocDropdownMenu;
