import React, { useMemo } from 'react';
import { Wrapper } from './ProductTour.style';
import { ModelViewer, Scene } from 'isokit';
import { data } from './ProductTour.data';
import { useMeasure } from 'react-use';
import ProductTour from './ProductTour';
import { useDispatch } from '@gdi/store-base';

export type ProductTourContainerProps = {
  sceneUrl: string;
  scene: any;
  hudUrl: string;
  hud: any;
};

export function ProductTourContainer(props: ProductTourContainerProps) {
  const { scene: board, hud } = props;

  const dispatch = useDispatch();

  const callbacks = useMemo(
    () => ({
      onBoardLoaded: (scene: Scene, debugBabylon: boolean) => {
        dispatch({
          type: 'PRODUCT_TOUR_LOADED',
          scene,
          debugBabylon,
        });
      },
      onNudgeBoard: (delta: number) => {},
    }),
    []
  );

  return <ProductTour board={board} hud={hud} onBoardLoaded={callbacks.onBoardLoaded} />;
}

export default ProductTourContainer;
