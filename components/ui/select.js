export function Select({ options = [], value, onChange, placeholder = "Select", className = "" }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`w-full border border-gray-300 px-4 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    >
      <option value="">{placeholder}</option>
      {options.map((opt, i) => (
        <option key={i} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}
