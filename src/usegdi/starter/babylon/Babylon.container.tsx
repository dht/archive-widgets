import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import type { Scene } from 'isokit';
import { animateCamera } from 'isokit';
import { useEffect, useMemo, useState } from 'react';
import { Babylon } from './Babylon';

export type BabylonContainerProps = {
  sceneUrl: string;
  scene: any;
};

export const BabylonContainer = (props: BabylonContainerProps) => {
  const { scene: board } = props;

  const dispatch = useDispatch();

  const camera = useSelector(selectors.raw.$rawCamera);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    animateCamera(camera);
  }, [camera, isLoaded]);

  const callbacks = useMemo(
    () => ({
      onBoardLoaded: (scene: Scene, debugBabylon: boolean) => {
        setIsLoaded(true);
        dispatch({
          type: 'BABYLON_LOADED',
          scene,
          debugBabylon,
        });
      },
      onNudgeBoard: (delta: number) => {},
    }),
    [board]
  );

  if (!board) {
    return null;
  }

  return (
    <Babylon
      board={board as IBoardConfig}
      onBoardLoaded={callbacks.onBoardLoaded}
      onNudgeBoard={callbacks.onNudgeBoard}
    />
  );
};

export default BabylonContainer;
