'use strict';

export default {
    state: {
        unreadMessages: 0,
        unreadMessagesLoading: false
    },
    actions: {
        updateUnreadMessages: (state, payload) => {
            if (state.unreadMessagesLoading === false) {
                return null;
            }
            state.unreadMessagesLoading = true;
            HttpClient.post('/back/updateUnreadMessages.php')
                .then((successResult) => {
                    state.unreadMessagesLoading = successResult.data.unreadMessages;
                }).catch((messages) => {
                    // если сервер вернул 500-ку, то клиент увидит нотификацию: Error: Request failed with status code 500
                    Vue.prototype.$notify({
                        type: 'warn',
                        text: String(messages),
                    });
                }).finally(() => {
                    state.unreadMessagesLoading = false;
                });
        }
    },
};
