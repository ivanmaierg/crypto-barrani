import { Box, ChakraProvider } from "@chakra-ui/react"
import { myTheme } from '../src/theme/theme';

export const decorators = [
    (Story) => (
            <Box width="25rem">
                <Story />
            </Box>),
]


export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    chakra: { theme: myTheme } 
};