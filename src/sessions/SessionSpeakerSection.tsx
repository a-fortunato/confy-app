import React from 'react'
import { Text } from 'react-native-paper'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import DetailsDivider from './DetailsDivider'
import { getSpeakers } from './redux/actions'
import { Speaker } from './types'
// import SpeakerBadge from './SpeakerBadge'

const mapStateToProps = (state: { speakers: Speaker[] }) => {
  return {
    speakers: state.speakers,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getSpeakers: () => dispatch(getSpeakers()),
  }
}

interface Props {
  speakers: Speaker['id'][]
  // speakers: Speaker[]

  getSpeakers(): void
}

const speakersTitle = 'Speakers'
const SessionSpeakerSection: React.FunctionComponent<Props> = props => {
  const { speakers = [] } = props
  if (!speakers.length) return null
  // const currentSpeaker =
  //   useMemo(() => speakers.find(speakerId => speakerId === speakerName), [
  //   speakerName,
  //   speakers,
  // ])
  // useEffect(() => {
  //   if (!speakers.length || !currentSpeaker) {
  //     props.getSpeakers()
  //   }
  // }, [currentSpeaker, speakers])
  return (
    <>
      <DetailsDivider />
      <Text>{speakersTitle}</Text>
      {/*{!currentSpeaker ? (*/}
      {/*  <ActivityIndicator />*/}
      {/*) : (*/}
      {/*  <SpeakerBadge name={speakerName} image={currentSpeaker.avatar.src} />*/}
      {/*)}*/}
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionSpeakerSection)
