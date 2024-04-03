import React from 'react';
import { ScrollView } from 'react-native';
import { Spacer } from './Spacer';
import { Button } from './Button';
import TrackPlayer from 'react-native-track-player';

const onUpdateNotificationMetadata = async () => {
  const randomTitle = Math.random().toString(36).substring(7);
  await TrackPlayer.updateNowPlayingMetadata({
    artwork: `https://rntp.dev/example/Longing.jpeg`,
  });
};

const onUpdateCurrentTrackMetadata = async (bugfix = true) => {
  const currentTrackIndex = await TrackPlayer.getActiveTrackIndex();
  if (currentTrackIndex !== undefined) {
    const randomTitle = Math.random().toString(36).substring(7);
    await TrackPlayer.updateMetadataForTrack(
      currentTrackIndex,
      {
        artwork: `https://rntp.dev/example/Longing.jpeg`,
      },
      bugfix
    );
  }
};

const onReset = async () => {
  await TrackPlayer.reset();
};

export const ActionSheet: React.FC = () => {
  return (
    <ScrollView>
      <Spacer />
      <Button
        title={'Update Notification Metadata Randomly'}
        onPress={onUpdateNotificationMetadata}
        type={'primary'}
      />
      <Button
        title={'Update Current Track Metadata Randomly'}
        onPress={onUpdateCurrentTrackMetadata}
        type={'primary'}
      />
      <Button
        title={'Update Current Track Metadata (bugged)'}
        onPress={() => onUpdateCurrentTrackMetadata(false)}
        type={'primary'}
      />
      <Button title={'Reset'} onPress={onReset} type={'primary'} />
    </ScrollView>
  );
};
