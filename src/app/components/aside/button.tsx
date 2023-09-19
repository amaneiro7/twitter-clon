export function CommonButton ({ text }: { text: string }) {
  return (
        <button
            type="button"
            className='bg-sky-500 font-bold rounded-full px-5 py-2 self-end disabled:opacity-40 disabled:pointer-events-none'
        >
            {text}
        </button>
  )
}
