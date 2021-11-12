import { useMediaQuery } from '@chakra-ui/react';

export const useMobile = <T>(
  media: string,
  [mobileStyle, notMobileStyle]: T[],
): [T, boolean] => {
  const [mobile] = useMediaQuery(media);
  const isMobile = mobile ? mobileStyle : notMobileStyle;
  return [isMobile, mobile];
};
