import { useEffect } from 'react';
import { Wrapper, Image } from './ImageViewer.style';

export type ImageViewerProps = {
  imageUrl?: string;
};

export function ImageViewer(props: ImageViewerProps) {
  const { imageUrl } = props;

  useEffect(() => {}, [imageUrl]);

  return (
    <Wrapper className='ImageViewer-wrapper' data-testid='ImageViewer-wrapper'>
      <Image alt='' src={imageUrl} draggable={false} />
    </Wrapper>
  );
}

export default ImageViewer;
