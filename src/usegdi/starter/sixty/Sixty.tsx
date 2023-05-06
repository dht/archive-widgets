import React, { useMemo, useState } from 'react';
import { HudWrapper, TV, Wrapper } from './Sixty.style';
import {
  BabylonScene,
  Hud,
  IHudConfig,
  IHudItem,
  IHudTimeline,
  ModelViewer,
  Scene,
  useBoard,
} from 'isokit';
import { useMeasure, useWindowSize } from 'react-use';
import { useCustomEvent } from 'igrid';
import { useSelector } from '@gdi/store-base';
import { useDevice } from './Sixty.hooks';
import classnames from 'classnames';

export type SixtyProps = {
  scene: IBoardConfig;
  showHud: boolean;
  hud: {
    config: IHudConfig;
    items: IHudItem[];
    timeline: IHudTimeline;
  };
  onBoardLoaded: (scene: Scene, debugBabylon: boolean) => void;
};

export function Sixty(props: SixtyProps) {
  const { board, hud } = props;
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();
  const [device, zoom] = useDevice();

  const [showHud, setShowHud] = useState(false);

  useCustomEvent('startHud', (data) => {
    setShowHud(data.show);
  });

  const isReady = useBoard(board, props.onBoardLoaded);

  const config = useMemo(
    () => ({
      ...hud.config,
      width: width - 50,
      height: height - 50,
    }),
    [width, height]
  );

  function renderHud() {
    if (!config || !width || !isReady || !showHud) {
      return null;
    }

    return (
      <HudWrapper>
        <Hud config={config} items={hud.items} timeline={hud.timeline} />
      </HudWrapper>
    );
  }

  // zoom to have height of 1330px
  const style = useMemo(() => {
    return {
      zoom,
    };
  }, [zoom]);

  return (
    <Wrapper style={style} className='Sixty-wrapper' data-testid='Sixty-wrapper'>
      {renderHud()}
      <TV ref={ref}>
        <BabylonScene useSelector={useSelector} />
      </TV>
    </Wrapper>
  );
}

export default Sixty;
