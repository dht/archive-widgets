import type { IElement, IWidgets } from 'igrid';
import { lazy } from 'react';
import { Youtube } from './youtube/Youtube';

const Babylon = lazy(() => import('./babylon/Babylon.container'));
const Chat = lazy(() => import('./chat/Chat'));
const Facebook = lazy(() => import('./facebook/Facebook'));
const Flow = lazy(() => import('./flow/Flow.container'));
const Footer = lazy(() => import('./footer/Footer'));
const Github = lazy(() => import('./github/Github'));
const ImageViewer = lazy(() => import('./image-viewer/ImageViewer.container'));
const Instagram = lazy(() => import('./instagram/Instagram'));
const Logger = lazy(() => import('./logger/Logger.container'));
const Logo = lazy(() => import('./logo/Logo.container'));
const Mode = lazy(() => import('./mode/Mode'));
const Multi = lazy(() => import('./multi/Multi.container'));
const NoMobile = lazy(() => import('./no-mobile/NoMobile'));
const Pinterest = lazy(() => import('./pinterest/Pinterest'));
const Playback = lazy(() => import('./playback/Playback.container'));
const ProductTour = lazy(() => import('./product-tour/ProductTour.container'));
const Sixty = lazy(() => import('./sixty/Sixty.container'));
const SoundPlayer = lazy(() => import('./sound-player/SoundPlayer.container'));
const Soundboard = lazy(() => import('./soundboard/Soundboard.container'));
const Spotify = lazy(() => import('./spotify/Spotify'));
const StartPlay = lazy(() => import('./start-play/StartPlay.container'));
const Subtext = lazy(() => import('./subtext/Subtext'));
const TikTok = lazy(() => import('./tikTok/TikTok'));
const Transcript = lazy(() => import('./transcript/Transcript.container'));
const Twitter = lazy(() => import('./twitter/Twitter'));
const Variables = lazy(() => import('./variables/Variables.container'));
const Welcome = lazy(() => import('./welcome/Welcome'));

export const starter: IWidgets = {
  'com.usegdi.starter.sixty': {
    id: 'com.usegdi.starter.sixty',
    name: 'Sixty',
    description: 'Sixty',
    component: (instance: IElement) => <Sixty {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.product-tour': {
    id: 'com.usegdi.starter.product-tour',
    name: 'ProductTour',
    description: 'ProductTour',
    component: (instance: IElement) => <ProductTour {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.multi': {
    id: 'com.usegdi.starter.multi',
    name: 'Multi',
    description: 'Multi',
    component: (instance: IElement) => <Multi {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.variables': {
    id: 'com.usegdi.starter.variables',
    name: 'Variables',
    description: 'Variables widget',
    component: (instance: IElement) => <Variables {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.subtext': {
    id: 'com.usegdi.starter.subtext',
    name: 'Subtext',
    description: 'Subtext widget',
    component: (instance: IElement) => <Subtext {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.image-viewer': {
    id: 'com.usegdi.image-viewer',
    name: 'ImageViewer',
    description: 'ImageViewer widget',
    component: (instance: IElement) => <ImageViewer {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.soundboard': {
    id: 'com.usegdi.starter.soundboard',
    name: 'Soundboard',
    description: 'Soundboard widget',
    component: (instance: IElement) => <Soundboard {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.welcome': {
    id: 'com.usegdi.starter.welcome',
    name: 'Welcome',
    description: 'welcome widget',
    component: (instance: IElement) => <Welcome {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.no-mobile': {
    id: 'com.usegdi.starter.no-mobile',
    name: 'No mobile',
    description: 'no mobile',
    component: (instance: IElement) => <NoMobile {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.footer': {
    id: 'com.usegdi.starter.footer',
    name: 'Footer',
    description: 'footer',
    component: (instance: IElement) => <Footer {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.logo': {
    id: 'com.usegdi.starter.logo',
    name: 'Logo',
    description: 'logo',
    component: (instance: IElement) => <Logo {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.github': {
    id: 'com.usegdi.starter.github',
    name: 'Github',
    description: 'github',
    component: (instance: IElement) => <Github {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.mode': {
    id: 'com.usegdi.starter.mode',
    name: 'Mode',
    description: 'Mode',
    component: (instance: IElement) => <Mode {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.flow': {
    id: 'com.usegdi.starter.flow',
    name: 'Flow',
    description: 'Flow',
    component: (instance: IElement) => <Flow {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.playback': {
    id: 'com.usegdi.starter.playback',
    name: 'Playback',
    description: 'Playback',
    component: (instance: IElement) => <Playback {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.chat': {
    id: 'com.usegdi.starter.chat',
    name: 'Chat',
    description: 'Chat',
    component: (instance: IElement) => <Chat {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.babylon': {
    id: 'com.usegdi.starter.babylon',
    name: 'Babylon',
    description: 'Babylon',
    component: (instance: IElement) => <Babylon {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.transcript': {
    id: 'com.usegdi.starter.transcript',
    name: 'Transcript',
    description: 'Transcript',
    component: (instance: IElement) => <Transcript {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.logger': {
    id: 'com.usegdi.starter.logger',
    name: 'Logger',
    description: 'Logger',
    component: (instance: IElement) => <Logger {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.start-play': {
    id: 'com.usegdi.starter.start-play',
    name: 'StartPlay',
    description: 'StartPlay',
    component: (instance: IElement) => <StartPlay {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.sound-player': {
    id: 'com.usegdi.starter.sound-player',
    name: 'SoundPlayer',
    description: 'SoundPlayer',
    component: (instance: IElement) => <SoundPlayer {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.spotify': {
    id: 'com.usegdi.starter.spotify',
    name: 'Spotify',
    description: 'Spotify',
    component: (instance: IElement) => <Spotify {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.facebook': {
    id: 'com.usegdi.starter.facebook',
    name: 'Facebook',
    description: 'Facebook',
    component: (instance: IElement) => <Facebook {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.twitter': {
    id: 'com.usegdi.starter.twitter',
    name: 'Twitter',
    description: 'Twitter',
    component: (instance: IElement) => <Twitter {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.instagram': {
    id: 'com.usegdi.starter.instagram',
    name: 'Twitter',
    description: 'Twitter',
    component: (instance: IElement) => <Instagram {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.pinterest': {
    id: 'com.usegdi.starter.pinterest',
    name: 'Twitter',
    description: 'Twitter',
    component: (instance: IElement) => <Pinterest {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.tiktok': {
    id: 'com.usegdi.starter.tiktok',
    name: 'Twitter',
    description: 'Twitter',
    component: (instance: IElement) => <TikTok {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
  'com.usegdi.starter.youtube': {
    id: 'com.usegdi.starter.youtube',
    name: 'Twitter',
    description: 'Twitter',
    component: (instance: IElement) => <Youtube {...(instance.props as any)} />,
    size: {
      defaultSize: {
        x: 10,
        y: 10,
      },
    },
    tags: ['starter'],
  },
};
