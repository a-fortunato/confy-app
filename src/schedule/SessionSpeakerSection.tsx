import React, { useEffect, useMemo } from 'react'
import { ActivityIndicator, Text } from 'react-native-paper'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { getSpeakers } from '../redux/actions'
import { Speaker } from '../types'
import DetailsDivider from './DetailsDivider'
import SpeakerBadge from './SpeakerBadge'

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
  speakerName: string
  speakers: Speaker[]

  getSpeakers(): void
}

const speakersTitle = 'Speakers'
const SessionSpeakerSection: React.FunctionComponent<Props> = props => {
  const { speakerName, speakers } = props
  if (!speakerName) return null
  const currentSpeaker = useMemo(() => speakers.find(speaker => speaker.name === speakerName), [
    speakerName,
    speakers,
  ])
  useEffect(() => {
    if (!speakers.length || !currentSpeaker) {
      props.getSpeakers()
    }
  }, [currentSpeaker, speakers])
  return (
    <>
      <DetailsDivider />
      <Text>{speakersTitle}</Text>
      {!currentSpeaker ? (
        <ActivityIndicator />
      ) : (
        <SpeakerBadge name={speakerName} image={currentSpeaker.image} />
      )}
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionSpeakerSection)
