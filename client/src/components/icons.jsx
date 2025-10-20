
export const UserIcon = ({ 
  size = 30, 
  color = 'currentColor', 
  strokeWidth = 1.5,
  ...props 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 30 30" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path 
      d="M15 15C18.4518 15 21.25 12.2018 21.25 8.75C21.25 5.29822 18.4518 2.5 15 2.5C11.5482 2.5 8.75 5.29822 8.75 8.75C8.75 12.2018 11.5482 15 15 15Z" 
      stroke={color} 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M25.7377 27.5C25.7377 22.6625 20.9252 18.75 15.0002 18.75C9.07519 18.75 4.2627 22.6625 4.2627 27.5" 
      stroke={color} 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);


export const BagIcon = ({ 
  size = 30, 
  color = 'currentColor', 
  strokeWidth = 1.5,
  ...props 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 30 30" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path 
      d="M9.375 9.58739V8.37489C9.375 5.56239 11.6375 2.79989 14.45 2.53739C17.8 2.21239 20.625 4.84989 20.625 8.13739V9.86239" 
      stroke={color} 
      strokeWidth={strokeWidth} 
      strokeMiterlimit="10" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M11.25 27.5H18.75C23.775 27.5 24.675 25.4875 24.9375 23.0375L25.875 15.5375C26.2125 12.4875 25.3375 10 20 10H10C4.66253 10 3.78753 12.4875 4.12503 15.5375L5.06253 23.0375C5.32503 25.4875 6.22503 27.5 11.25 27.5Z" 
      stroke={color} 
      strokeWidth={strokeWidth} 
      strokeMiterlimit="10" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M19.3691 15H19.3803" 
      stroke={color} 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M10.6181 15H10.6294" 
      stroke={color} 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);


export const SearchIcon = ({ 
  size = 32, 
  color = 'currentColor', 
  strokeWidth = 2,
  ...props 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path 
      d="M15.3332 28C22.3288 28 27.9998 22.3289 27.9998 15.3333C27.9998 8.33769 22.3288 2.66663 15.3332 2.66663C8.33756 2.66663 2.6665 8.33769 2.6665 15.3333C2.6665 22.3289 8.33756 28 15.3332 28Z" 
      stroke={color} 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M29.3332 29.3333L26.6665 26.6666" 
      stroke={color} 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);


export const ChevronLeftIcon = ({ 
  size = 24, 
  color = "currentColor", 
  strokeWidth = 1.5,
  ...props 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path 
      d="M15.0898 19.92L8.56984 13.4C7.79984 12.63 7.79984 11.37 8.56984 10.6L15.0898 4.08" 
      stroke={color} 
      strokeWidth={strokeWidth} 
      strokeMiterlimit="10" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);


export const ChevronRightIcon = ({ 
  size = 24, 
  color = "currentColor", 
  strokeWidth = 1.5,
  ...props 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path 
      d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.08" 
      stroke={color} 
      strokeWidth={strokeWidth} 
      strokeMiterlimit="10" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);


export const FilterIcon = ({ 
  size = 30, 
  color = "currentColor", 
  strokeWidth = 2,
  ...props 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 30 30" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path 
      d="M6.75 2.625H23.25C24.625 2.625 25.75 3.75 25.75 5.125V7.875C25.75 8.875 25.125 10.125 24.5 10.75L19.125 15.5C18.375 16.125 17.875 17.375 17.875 18.375V23.75C17.875 24.5 17.375 25.5 16.75 25.875L15 27C13.375 28 11.125 26.875 11.125 24.875V18.25C11.125 17.375 10.625 16.25 10.125 15.625L5.375 10.625C4.75 10 4.25 8.875 4.25 8.125V5.25C4.25 3.75 5.375 2.625 6.75 2.625Z" 
      stroke={color} 
      strokeWidth={strokeWidth} 
      strokeMiterlimit="10" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M13.6625 2.625L7.5 12.5" 
      stroke={color} 
      strokeWidth={strokeWidth} 
      strokeMiterlimit="10" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);


export const SortIcon = ({ 
  size = 24, 
  color = "currentColor", 
  strokeWidth = 1.5,
  ...props 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path 
      d="M3 7H21" 
      stroke={color} 
      strokeWidth={strokeWidth} 
      strokeLinecap="round"
    />
    <path 
      d="M6 12H18" 
      stroke={color} 
      strokeWidth={strokeWidth} 
      strokeLinecap="round"
    />
    <path 
      d="M10 17H14" 
      stroke={color} 
      strokeWidth={strokeWidth} 
      strokeLinecap="round"
    />
  </svg>
);