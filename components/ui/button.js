export function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition font-medium ${className}`}
    >
      {children}
    </button>
  )
}
