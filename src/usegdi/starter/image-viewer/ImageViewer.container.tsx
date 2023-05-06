import { selectors, useSelector } from '@gdi/store-base';
import ImageViewer from './ImageViewer';

export type ImageViewerContainerProps = {};

export function ImageViewerContainer(_props: ImageViewerContainerProps) {
  const imageUrl = useSelector(selectors.raw.$rawAppState).imageUrl;

  return <ImageViewer imageUrl={imageUrl} />;
}

export default ImageViewerContainer;
