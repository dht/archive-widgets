import { Triangles } from '@gdi/ui';
import type { Scene } from 'isokit';
import { BabylonScene, createTorus, loadBoard, startRender } from 'isokit';
import { useEffect } from 'react';
import { useMeasure } from 'react-use';
import { invokeEvent } from 'shared-base';
import { Content, Patch, Wrapper, WrapperBackground } from './Babylon.style';

const DEBUG_BABYLONJS = false;

export type BabylonProps = {
  board: IBoardConfig;
  onNudgeBoard: (delta: number) => void;
  onBoardLoaded: (scene: Scene, debugBabylon: boolean) => void;
};

export function Babylon(props: BabylonProps) {
  const { board } = props;

  useEffect(() => {
    invokeEvent('load_babylonjs_scene', (scene: Scene) => {
      loadBoard(board);
      startRender();
      createTorus(scene);
      props.onBoardLoaded(scene, DEBUG_BABYLONJS);
    });
  }, [board]);

  return (
    <Wrapper className='Babylon-wrapper' data-testid='Babylon-wrapper'>
      <Patch />

      <BabylonBackground board={board} />

      <Content>
        <BabylonScene />
      </Content>
    </Wrapper>
  );
}

export function BabylonBackground(props: any) {
  const { board } = props;
  const { backgroundType, backgroundValues } = board ?? {};
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();

  if (backgroundType !== 'triangles') {
    return null;
  }

  const { paletteIndex } = backgroundValues ?? {};

  return (
    <WrapperBackground ref={ref}>
      <Triangles width={width} height={height} paletteIndex={paletteIndex} />
    </WrapperBackground>
  );
}

export default Babylon;
