import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  DropdownContainer,
  DropdownItems,
  DropdownHeading,
  DropdownItem,
} from './styles';

type Props = {
  popperRef: any;
  styles: any;
  attributes: any;
  visible: boolean;
};

type ItemProps = {
  title: string;
  href: string;
};

const navItems: Array<ItemProps> = [
  {
    title: `Tokenomics`,
    href: `/`,
  },
  {
    title: `Dashboard`,
    href: `/dashboard`,
  },
];

const externalItems: Array<ItemProps> = [
  {
    title: `📣 Join our Telegram`,
    href: `https://t.me/XRPPBSC`,
  },
  {
    title: `💎 Buy on PancakeSwap`,
    href: `https://pancakeswap.finance/swap#/swap?outputCurrency=0x5760ed58d66ba764c4c3073fc58aa471ea442efc`,
  },
  {
    title: `📈 Watch our chart`,
    href: `https://poocoin.app/tokens/0x5760ed58d66ba764c4c3073fc58aa471ea442efc`,
  },
  {
    title: `📖 Read our white paper`,
    href: `https://www.xrpancake.com/whitepaper.pdf`,
  },
  {
    title: `🔒 LP Locked on Mudra`,
    href: `https://mudra.website/?certificate=yes&type=0&lp=0xacdd54de5ff27377a9135e96a0ee0a2855057a67`,
  },
];

const Dropdown = ({ popperRef, styles, attributes, visible }: Props) => {
  const { asPath } = useRouter();

  return (
    <div
      ref={popperRef}
      style={{ zIndex: 99, ...styles.popper }}
      {...attributes.popper}
    >
      <DropdownContainer id="dropdown" style={styles.offset} visible={visible}>
        <DropdownItems>
          <DropdownHeading id="dropdown" className="tablet-show">
            Menu
          </DropdownHeading>
          {navItems.map((item: ItemProps) => (
            <DropdownItem key={item.title} className="tablet-show">
              <Link href={item.href}>
                <a
                  id="dropdown"
                  aria-label={item.title}
                  className={asPath === item.href ? `active` : ``}
                >
                  {item.title}
                </a>
              </Link>
            </DropdownItem>
          ))}
          <DropdownHeading id="dropdown" className="tablet-show">
            External links
          </DropdownHeading>
          {externalItems.map((item: ItemProps) => (
            <DropdownItem key={item.title}>
              <a
                id="dropdown"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.title}
              >
                {item.title}
              </a>
            </DropdownItem>
          ))}
        </DropdownItems>
      </DropdownContainer>
    </div>
  );
};

export default Dropdown;
