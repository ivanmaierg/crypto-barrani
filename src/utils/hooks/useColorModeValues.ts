import { useColorModeValue } from '@chakra-ui/react';

export const useColorModeValues = () => {
  const {
    bgPrimary,
    bgSecondary,
    bgTertiary,
    borderColor,
    textPrimary,
    textSecondary,
  } = useColorModeValue(
    {
      bgPrimary: `light.background_primary`,
      bgSecondary: `light.background_secondary`,
      bgTertiary: `light.background_tertiary`,
      borderColor: `light.border`,
      textPrimary: `light.text_primary`,
      textSecondary: `light.text_secondary`,
    },
    {
      bgPrimary: `dark.background_primary`,
      bgSecondary: `dark.background_secondary`,
      bgTertiary: `dark.background_tertiary`,
      borderColor: `dark.border`,
      textPrimary: `dark.text_primary`,
      textSecondary: `dark.text_secondary`,
    },
  );
  return {
    bgPrimary,
    bgSecondary,
    bgTertiary,
    borderColor,
    textPrimary,
    textSecondary,
  };
};
