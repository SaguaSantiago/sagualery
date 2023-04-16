export default function CustomSelect({ children, className, ...rest }) {
  return (
    <select
      {...rest}
      className={
        'hover:cursor-pointer h-8 px-2 mr-2 focus:outline-none rounded-sm focus:border-emerald-600 box-border focus:border-2 ' +
        className
      }
    >
      {children}
    </select>
  )
}
