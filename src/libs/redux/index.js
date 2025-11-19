const Redux = {
    createStore(reducer, preloadedState) {
        let state = reducer(preloadedState, { type: "@@redux/INITa.b.c.d.e" });

        const listeners = [];

        return {
            getState() {
                return state;
            },
            dispatch(action) {
                state = reducer(state, action);
                listeners.forEach((listener) => listener());
            },
            subscribe(listener) {
                listeners.push(listener);

                return () => {
                    const index = listeners.indexOf(listener);
                    if (index !== -1) listeners.splice(index, 1);
                };
            },
        };
    },
};

const createStore = Redux.createStore;

export { createStore };
