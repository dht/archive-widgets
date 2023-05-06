import { useDispatch, useSelector } from '@gdi/store-base';
import { Scene, setRedux } from 'isokit';
import { useMemo, useState } from 'react';
import Sixty from './Sixty';
import { useMount } from 'react-use';

export type SixtyContainerProps = {
  sceneUrl: string;
  scene: any;
  hudUrl: string;
  hud: any;
};

export function SixtyContainer(props: SixtyContainerProps) {
  const { scene: board, hud } = props;
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState(false);

  useMount(() => {
    setRedux(useSelector, useDispatch);
    setIsReady(true);
  });

  const callbacks = useMemo(
    () => ({
      onBoardLoaded: (scene: Scene, debugBabylon: boolean) => {
        if (!scene) {
          return;
        }

        dispatch({
          type: 'SIXTY_LOADED',
          scene,
          debugBabylon,
        });
      },
      onNudgeBoard: (delta: number) => {},
    }),
    []
  );

  if (!isReady) {
    return null;
  }

  return <Sixty board={board} hud={hud} onBoardLoaded={callbacks.onBoardLoaded} />;
}

export default SixtyContainer;
