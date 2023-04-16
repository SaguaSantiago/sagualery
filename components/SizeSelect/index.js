import CustomSelect from '../CustomComponents/CustomSelect'

export default function SizeSelect({ type, ...rest }) {
  return (
    <CustomSelect {...rest} defaultValue=''>
      {type === 'photo' ? (
        <>
          <option value=''>Size</option>
          <option value='large'>Large (24mp)</option>
          <option value='medium'>Medium (12mp)</option>
          <option value='small'>Small (4mp)</option>
        </>
      ) : (
        <>
          <option value=''>Size</option>
          <option value='large'>Large (4k)</option>
          <option value='medium'>Medium (Full HD)</option>
          <option value='small'>Small (HD)</option>
        </>
      )}
    </CustomSelect>
  )
}
