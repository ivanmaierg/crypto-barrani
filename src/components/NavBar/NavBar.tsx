/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import Link from 'next/link';
import {
  Text,
  HStack,
  Link as ChakraLink,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useMobile } from '@/utils/hooks/useMobile';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';

export const NavBar: React.FC = () => {
  const color = useColorModeValue(`light.text_primary`, `dark.text_primary`);

  const { mobile } = useMobile(`(max-width: 480px`, []);
  const router = useRouter();
  const path = router.asPath;
  const route1 = {
    href: `/`,
    children: `Home`,
  };
  const route2 = {
    href: `/news`,
    children: `News`,
  };

  const route3 = {
    href: `/crypto`,
    children: `Crypto`,
  };

  const routes = [route1, route2, route3];
  return (
    <>
      <HStack w="100%" display={mobile ? `none` : `flex`}>
        {routes.map((el) => (
          <Link key={el.children} href={el.href} passHref>
            <ChakraLink p={5} borderRadius={5}>
              <Text
                color={color}
                style={
                  path === el.href
                    ? {
                        fontWeight: `bold`,
                      }
                    : {}
                }
              >
                {el.children}
              </Text>
            </ChakraLink>
          </Link>
        ))}
      </HStack>
      <HeaderMenu display={mobile} />
    </>
  );
};
