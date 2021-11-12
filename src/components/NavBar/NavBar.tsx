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
import ButtonColorMode from '../ButtonColorMode/ButtonColorMode';

interface Route {
  href: string;
  children: string;
}
type Routes = Route[];

const RoutesComponents: React.FC<{ routes: Routes; isOnHambuguer: boolean }> =
  ({ routes, isOnHambuguer = false }) => {
    const color = useColorModeValue(`light.text_primary`, `dark.text_primary`);
    const hamburguerColor = `light.text_primary`;
    const router = useRouter();
    const path = router.asPath;
    return (
      <>
        {routes.map((el) => (
          <Link key={el.children} href={el.href} passHref>
            <ChakraLink p={5} borderRadius={5}>
              <Text
                color={isOnHambuguer ? hamburguerColor : color}
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
      </>
    );
  };

export const NavBar: React.FC = () => {
  const [, mobile] = useMobile(`(max-width: 480px`, []);

  const route1: Route = {
    href: `/arg`,
    children: `Arg`,
  };
  // const route2: Route = {
  //   href: `/news`,
  //   children: `News`,
  // };

  // const route3: Route = {
  //   href: `/crypto`,
  //   children: `Crypto`,
  // };

  // const routes: Routes = [route1, route2, route3];
  const routes: Routes = [route1];
  return (
    <>
      {mobile ? (
        <HeaderMenu>
          <RoutesComponents routes={routes} isOnHambuguer />
        </HeaderMenu>
      ) : (
        <HStack w="100%">
          <RoutesComponents routes={routes} isOnHambuguer={false} />
          <ButtonColorMode />
        </HStack>
      )}
    </>
  );
};
