import Link from 'next/link';

import LogoSVG from './LogoSVG';

import { Wrapper } from './styles';

const Logo = () => (
  <Wrapper>
    <span>
      <Link href="/" aria-label="XRPP Token">
        <a>
          <LogoSVG />
        </a>
      </Link>
    </span>
  </Wrapper>
);

export default Logo;
