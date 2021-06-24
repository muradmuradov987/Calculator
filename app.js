const mycontainer = {
    data() {
        return {
            number: "",
        }
    },



    methods: {
        append(value) {
            this.number = this.number + value;
        },

        del() {
            this.number = this.number.substring(0, this.number.length - 1);
        },

        clear() {
            window.location.reload();
        },

        equal() {
            return this.number = eval(this.number);
        },

    },

}


Vue.createApp(mycontainer).mount("#container")