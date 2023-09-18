import { IconNotes, IconBell, IconBrandX, IconMail, IconUser, IconDotsCircleHorizontal } from '@tabler/icons-react'

const DEFAULT_STYLE = 'w-8 h-8 mr-2'
export const GithubIcon = ({ className = DEFAULT_STYLE }) => (
    <svg
        className={className}
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
    >
        <path
            fillRule="evenodd"
            d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
            clipRule="evenodd"
        />
    </svg>
)
export const LogoIcon = ({ className = DEFAULT_STYLE }) => <IconBrandX className={className}/>

export const HomeIcon = ({ className = DEFAULT_STYLE }) => (
    <svg
        className={className}
        aria-hidden="true"
        fill='currentColor'
        viewBox="0 0 24 24"
    >
        <path
            d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"
        />
    </svg>
)

export const SearchIcon = ({ className = DEFAULT_STYLE }) => (
    <svg
        className={className}
        aria-hidden="true"
        fill='currentColor'
        viewBox="0 0 24 24"
    >
        <path
            d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z">
        </path>
    </svg>
)

export const NotificationIcon = ({ className = DEFAULT_STYLE }) => <IconBell className={className} />

export const MessageIcon = ({ className = DEFAULT_STYLE }) => <IconMail className={className} />

export const ListIcon = ({ className = DEFAULT_STYLE }) => <IconNotes className={className} />

export const ProfileIcon = ({ className = DEFAULT_STYLE }) => <IconUser className={className} />

export const OptionsIcon = ({ className = DEFAULT_STYLE }) => <IconDotsCircleHorizontal className={className} />

export const NewPostIcon = ({ className = DEFAULT_STYLE }) => (
    <svg
        className={className}
        aria-hidden="true"
        fill='currentColor'
        viewBox="0 0 24 24"
    >
        <path
            d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"
        />
    </svg>
)
