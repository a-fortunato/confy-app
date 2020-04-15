import React, { useEffect, useMemo } from 'react'
import { Text } from 'react-native-paper'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { getTypes } from '../redux/actions'
import { Type } from '../types'
import DetailsDivider from './DetailsDivider'
import TypeItem from './TypeItem'

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
  typeName: string
  types: Type[]

  getTypes(): void
}

const typeTitle = 'Type'
const SessionTypeSection: React.FunctionComponent<Props> = props => {
  const { typeName, types } = props
  if (!typeName) return null
  const foundType = useMemo(() => types.find(type => type.name === typeName), [])
  useEffect(() => {
    if (!types.length || !foundType) {
      props.getTypes()
    }
  }, [foundType, types])

  return (
    <>
      <DetailsDivider />
      <Text>{typeTitle}</Text>
      <TypeItem name={typeName} color={foundType.color} />
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionTypeSection)
