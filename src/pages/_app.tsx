import type, { AppProps } from 'next/app';
import "antd/dist/antd.css";
import "../styles/global.scss";
import {Provider, useStore} from "react-redux";
import {persistor, wrapper} from "../core/app.store";
import {PersistGate} from "redux-persist/integration/react";

function MyApp({ Component, pageProps }: AppProps) {

    const store = useStore();

    return (
        <>
            <Provider store={store}>
                {/*<PersistGate persistor={persistor} loading={null}>*/}
                    {/*<Layout>*/}
                    <Component {...pageProps} />
                    {/*</Layout>*/}
                {/*</PersistGate>*/}
            </Provider>
        </>
        )


}

export default wrapper.withRedux(MyApp);
