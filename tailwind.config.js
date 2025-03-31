/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			poppins: ['var(--font-poppins)'],
  		},
  		colors: {
  			// Main brand colors
  			'brand': {
  				'orange': '#ff5f00', // Updated from '#FF4500' to '#ff5f00'
  				'peach': '#db8a74',  // The peachy background color
  				'dark': '#0F1729',   // Dark navy background
  				'gold': '#FFD700',   // Golden yellow used in headings
  			},
  			// Text colors
  			'text': {
  				'primary': '#FFFFFF',
  				'secondary': '#FFD700', // Golden text
  				'accent': '#ff5f00',    // Updated from '#FF4500' to '#ff5f00'
  			},
  			// UI Elements
  			'ui': {
  				'card': '#1A1F35',      // Dark card backgrounds
  				'overlay': '#0F172980', // Semi-transparent overlay
  				'gradient': {
  					'start': '#ff5f00', // Updated from '#FF4500' to '#ff5f00'
  					'end': '#0F1729',
  				}
  			},
  			// Button colors
  			'button': {
  				'primary': '#ff5f00',   // Updated from '#FF4500' to '#ff5f00'
  				'primary-hover': '#ff7033', // Adjusted hover state
  				'secondary': '#E97777', // Pink/coral color for secondary buttons
  				'secondary-hover': '#E98888',
  			},
  			// Featured section
  			'featured': {
  				'bg': '#ff5f00',    // Updated from '#FF4500' to '#ff5f00'
  				'text': '#FFD700',
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-party': 'linear-gradient(to bottom, #FF4500, #0F1729)',
  		},
  		animation: {
  			marquee: 'marquee 25s linear infinite',
  		},
  		keyframes: {
  			marquee: {
  				'0%': { transform: 'translateX(0%)' },
  				'100%': { transform: 'translateX(-100%)' },
  			},
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
