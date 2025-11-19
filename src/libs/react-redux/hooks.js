import { useContext, useEffect, useMemo, useState } from "react";
import Context from "./Context";

export function useStore() {
    const store = useContext(Context);
    if (store === undefined) {
        throw new Error(
            "could not find react-redux context value; please ensure the component is wrapped in a <Provider> at Redux"
        );
    }

    return store;
}

export function useDispatch() {
    const store = useStore();
    return store.dispatch;
}

export function useSelector(selector) {
    const store = useStore();
    const initState = useMemo(() => store.getState(), [store]);
    const initValue = selector(initState);
    const [value, setValue] = useState(initValue);

    useEffect(() => {
        if (initValue === store.getState()) {
            console.warn(
                "Selector unknown returned a different result when called with the same parameters. This can lead to unnecessary rerenders"
            );
        }
    }, []);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const newState = store.getState();
            if (newState === initState) return;

            const newValue = selector(newState);
            if (value !== newValue) setValue(newValue);
        });

        return unsubscribe;
    }, [selector, value, store, initState]);

    return value;
}
