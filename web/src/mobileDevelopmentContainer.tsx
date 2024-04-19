import i18n from '@utils/i18n';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import MobileApp from './views/Mobile/Mobile';

import './index.css';

import { HashRouter } from 'react-router-dom';
import { NuiProvider } from 'react-fivem-hooks';
import { IPhoneSettings } from '@project-error/npwd-types';

const mockedSetting = {
  label: 'idk',
  value: 'idk',
};

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const mockedSettings: IPhoneSettings = {
  language: mockedSetting,
  iconSet: mockedSetting,
  wallpaper: mockedSetting,
  frame: mockedSetting,
  theme: mockedSetting,
  zoom: mockedSetting,
  streamerMode: false,
  ringtone: mockedSetting,
  callVolume: 0,
  notiSound: mockedSetting,
  TWITTER_notiFilter: mockedSetting,
  TWITTER_notiSound: mockedSetting,
  TWITTER_notiSoundVol: 0,
  TWITTER_notifyNewFeedTweet: false,
  MARKETPLACE_notifyNewListing: false,
};

const Root = () => (
  <HashRouter>
    <NuiProvider>
      <Container>
        <MobileApp i18n={i18n} settings={mockedSettings} />
      </Container>
    </NuiProvider>
  </HashRouter>
);

ReactDOM.render(<Root />, document.getElementById('mobile-app'));
