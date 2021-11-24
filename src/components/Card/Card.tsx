import { useColorModeValues } from '@/utils/hooks/useColorModeValues';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export const Card: React.FC<{
  title?: string;
  value?: string;
  textFooter?: string;
}> = ({ title, value, textFooter }) => {
  const { bgTertiary, textSecondary } = useColorModeValues();
  return (
    <Box
      width="100%"
      borderRadius="md"
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      textAlign="center"
      px="5"
      py="2"
      height="10rem"
      minWidth="10rem"
      maxWidth="100%"
      backgroundColor={bgTertiary}
    >
      <Heading as="h2" fontSize={{ base: `2xl`, md: `3xl` }}>
        {title}
      </Heading>
      <Stack spacing={2} isInline justifyContent="center">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor="redAccent"
          borderRadius={4}
        >
          <Text
            color="white"
            fontWeight="bold"
            textAlign="left"
            lineHeight={10}
            display="flex"
            width="100%"
            m="auto"
            pl="2"
            pr="2"
          >
            {value}
          </Text>
        </Box>
      </Stack>
      {textFooter && <Text color={textSecondary}>{textFooter}</Text>}
    </Box>
  );
};
