import { useMediaQuery } from '@chakra-ui/react';

export const useMobile = (
  media: string,
  [mobileStyle, notMobileStyle]: string[],
) => {
  const [mobile] = useMediaQuery(media);
  const isMobile = mobile ? mobileStyle : notMobileStyle;
  return { isMobile, mobile };
};
