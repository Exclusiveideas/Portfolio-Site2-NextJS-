import { ChakraProvider } from "@chakra-ui/provider";
import Layout from '../components/layouts/main';
import Fonts from '../components/fonts'
import theme from "../lib/theme";
import { AnimatePresence } from "framer-motion";
import Footer from "../components/footer";

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
            <Footer />
        </ChakraProvider>
    )
}

export default Website