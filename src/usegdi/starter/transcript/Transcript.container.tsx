import type { ITranscriptLine } from '@gdi/store-base';
import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import { useEffect } from 'react';
import { Transcript } from './Transcript';
import { useSpeakers } from './Transcript.hooks';

export type TranscriptContainerProps = {
  transcriptLines?: ITranscriptLine[];
  transcriptLinesUrl?: string;
};

export function TranscriptContainer(props: TranscriptContainerProps) {
  const { transcriptLinesUrl, transcriptLines } = props;
  const transcript = useSelector(selectors.base.$transcript);
  const currentIndex = useSelector(selectors.base.$transcriptCurrentIndex);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'BOOTSTRAP_TRANSCRIPT',
      transcriptLines,
    });
  }, [transcriptLinesUrl]);

  const speakers = useSpeakers(transcript);

  return <Transcript sentences={transcript} speakers={speakers} currentIndex={currentIndex} />;
}

export default TranscriptContainer;
