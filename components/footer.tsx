import { cn } from '@/lib/utils'
import { WebLinkSettings } from '@/config/system-settings'
import { ThemeToggle } from '@/components/theme-toggle'
import { Github, Facebook } from 'lucide-react'

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    const getIcon = (name: string) => {
        switch (name.toLowerCase()) {
            case 'github':
                return <Github className='h-4 w-4' />
            case 'juejin':
                return <Facebook className='h-4 w-4' />
            default:
                return null
        }
    }

    return (
        <footer
            className={cn(
                'mt-auto border-t border-border/40',
                'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80'
            )}
        >
            <div className='mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8 lg:px-20'>
                <div className='py-8'>
                    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4'>
                        <div className='space-y-3'>
                            <div className='text-xl font-semibold text-foreground'>Resume My</div>
                            <p className='text-sm text-muted-foreground'>© 2024-PRESENT({currentYear}). by Norush</p>
                        </div>
                        {WebLinkSettings.map(section => (
                            <div key={section.type} className='space-y-3'>
                                <h3 className='text-sm font-semibold text-muted-foreground'>
                                    {section.type === 'me' ? 'Connect' : 'Navigation'}
                                </h3>
                                <ul className='space-y-2'>
                                    {section.children.map(link => (
                                        <li key={link.name}>
                                            <a
                                                href={link.link}
                                                className='flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary'
                                                target={link.blank ? '_blank' : '_self'}
                                                rel='noopener'
                                            >
                                                {getIcon(link.name)}
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className='space-y-3'>
                            <h3 className='text-sm font-semibold text-muted-foreground'>Theme</h3>
                            <div className='flex items-center gap-2'>
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
