import CustomSelect from '../CustomComponents/CustomSelect'

export default function ColorSelect(props) {
  return (
    <CustomSelect {...props} defaultValue=''>
      <option value=''>Color</option>
      <option value='red'>Red</option>
      <option value='orange'>Orange</option>
      <option value='orange'>Yellow</option>
      <option value='green'>Green</option>
      <option value='turquoise'>Turquoise</option>
      <option value='blue'>Blue</option>
      <option value='violet'>Violet</option>
      <option value='pink'>Pink</option>
      <option value='brown'>Brown</option>
      <option value='black'>Black</option>
      <option value='gray'>Gray</option>
      <option value='white'>White</option>
    </CustomSelect>
  )
}
