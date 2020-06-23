import React from 'react'
import { Text } from 'react-native-paper'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import DetailsDivider from './DetailsDivider'
import TypeItem from './TypeItem'
import { getTypes } from './redux/actions'
import { Type } from './types'

const mapStateToProps = (state: { types: Type[] }) => {
  return {
    types: state.types,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getTypes: () => dispatch(getTypes()),
  }
}

interface Props {
  type: Type
  types: Type[]

  getTypes(): void
}

const typeTitle = 'Type'
const SessionTypeSection: React.FunctionComponent<Props> = props => {
  const { type } = props
  if (!type) return null
  // const foundType = useMemo(() => types.find(type => type.name === typeName), [])
  // useEffect(() => {
  //   if (!types.length || !type) {
  //     props.getTypes()
  //   }
  // }, [foundType, types])

  return (
    <>
      <DetailsDivider />
      <Text>{typeTitle}</Text>
      <TypeItem name={type.name} color={type.color} />
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionTypeSection)
