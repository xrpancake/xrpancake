import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { Wrapper, Scrollable, Container } from './styles';

type Props = {
  title?: string;
};

const Breadcrumbs: FC<Props> = ({ title }) => {
  return (
    <Wrapper>
      <Scrollable>
        <Container>
          <ul>
            <li>
              <Link href="/">
                <a>XRPP</a>
              </Link>
            </li>
            <li>
              <span>{title}</span>
            </li>
          </ul>
        </Container>
      </Scrollable>
    </Wrapper>
  );
};

export default Breadcrumbs;
