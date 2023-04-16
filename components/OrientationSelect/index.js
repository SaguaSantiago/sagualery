import CustomSelect from '../CustomComponents/CustomSelect'

export default function OrientationSelect(props) {
  return (
    <CustomSelect {...props} defaultValue=''>
      <option value=''>Orientation (all)</option>
      <option value='portrait'>Portrait</option>
      <option value='square'>Square</option>
      <option value='landscape'>Landscape</option>
    </CustomSelect>
  )
}
