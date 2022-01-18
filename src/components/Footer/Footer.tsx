import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react';
// import { ReactNode } from 'react';

// const ListHeader = ({ children }: { children: ReactNode }) => (
//   <Text fontWeight="500" fontSize="lg" mb={2}>
//     {children}
//   </Text>
// );

export function Footer() {
  return (
    <Box
      bg={useColorModeValue(`gray.50`, `gray.900`)}
      color={useColorModeValue(`gray.700`, `gray.200`)}
      w="100%"
      mt="5rem"
    >
      <Container as={Stack} maxW="6xl" py={10} px={10}>
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 3 }}
          justifyContent="center"
          spacing={8}
        >
          <Stack align="flex-start">
            <Link href="/overview">Overview</Link>
            <Stack direction="row" align="center" spacing={2}>
              <Link href="/features">Features</Link>
              <Tag
                size="sm"
                bg={useColorModeValue(`green.300`, `green.800`)}
                ml={2}
                color="white"
              >
                New
              </Tag>
            </Stack>
            <Link href="/tutorials">Tutorials</Link>
          </Stack>
          <Stack align="flex-start">
            <Link>Acerca de</Link>
            <Link href="/contact">Contacto</Link>
          </Stack>
          <Stack align="flex-start">
            <Link href="/cookies">Cookies</Link>
            <Link href="/privacy">Privacidad</Link>
            <Link href="/terms">Terminos de servicio</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align="center"
          _before={{
            content: `""`,
            borderBottom: `1px solid`,
            borderColor: useColorModeValue(`gray.200`, `gray.700`),
            flexGrow: 1,
          }}
          _after={{
            content: `""`,
            borderBottom: `1px solid`,
            borderColor: useColorModeValue(`gray.200`, `gray.700`),
            flexGrow: 1,
          }}
        />
        <Text pt={6} fontSize="sm" textAlign="center">
          © 2022 Crypto Barrani. Todos los derechos reservados
        </Text>
      </Box>
    </Box>
  );
}
