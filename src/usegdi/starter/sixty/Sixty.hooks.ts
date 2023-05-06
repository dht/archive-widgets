import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

const devices = [
  {
    id: 'tablet',
    width: 1334,
    height: 664,
    heightFullScreen: 800,
  },
  {
    id: 'macbook',
    width: 1512,
    height: 1070,
    heightFullScreen: 1180,
  },
];

const MAX_WIDTH_DELTA = 80;
const MAX_HEIGHT_DELTA = 80;

export function useDevice() {
  const { height, width } = useWindowSize();
  const [device, setDevice] = useState('unknown');
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const item = devices.find((d) => {
      const dWidth = Math.abs(d.width - width);
      const dHeight = Math.abs(d.height - height);
      const dHeightFullScreen = Math.abs(d.heightFullScreen - height);

      return (
        dWidth <= MAX_WIDTH_DELTA &&
        (dHeight <= MAX_HEIGHT_DELTA || dHeightFullScreen <= MAX_HEIGHT_DELTA)
      );
    });

    if (item) {
      setDevice(item.id);
    } else {
      setDevice('unknown');
    }
  }, [height, width]);

  useEffect(() => {
    switch (device) {
      case 'tablet':
        setZoom(0.84);
        break;
      case 'macbook':
        setZoom(1.44);
        break;
      default:
        setZoom(height / 1330);
        break;
    }
  }, [height, device]);

  return [device, zoom] as const;
}
