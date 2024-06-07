import AppHeader from 'src/components/AppHeader';
import ControllPanel from 'src/components/ControllPanel';
import Burger from 'src/components/Burger';
import MaxWidthContentWrapper from 'src/components/MaxWidthContentWrapper';

import { MAX_APP_WIDTH } from 'src/CONSTANTS';

import './home-page.scss';

const HomePage = () => {
  return (
    <div className="home-page">
      <MaxWidthContentWrapper maxWidth={MAX_APP_WIDTH}>
        <AppHeader text="Burger Creator" className="home-page__header" />

        <div className="home-page__creator">
          <ControllPanel />
          <Burger />
        </div>
      </MaxWidthContentWrapper>
    </div>
  );
};

export default HomePage;
