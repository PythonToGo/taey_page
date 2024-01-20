import { useTheme } from 'next-themes'



export default function DarkModeToggleButton() 
{
        const { theme, setTheme } = useTheme()
            // getter  setter
        // theme : current  value
        // setTheme : change the current value 
        return (
            <>
                <button 
                    className="
                        inline-flex items-center
                        bg-orange-100 
                        border-0 py-1 px-3 
                        focus:outline-none 
                        hover:bg-orange-200 rounded text-base mt-4 md:mt-0
                        "
                        type= "button"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark' )}
                        >
                        {/* light mode icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            className="visible dark:invisible dark:w-0 dark:w-0 h-4 w-4"
                            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                        
                        {/* dark mode */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" 
                            className="visible dark:invisible light:w-0 light:w-0 h-5 w-5"
                            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
    `                       <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg> */}

                </button>
            </>
        );
}