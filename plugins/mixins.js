import Vue from 'vue';

Vue.mixin({
    beforeMount() {
        if (this.$route && this.$route.query && this.$route.query['disable-mem-leak-test']
                && typeof this.$route.query['disable-mem-leak-test'].toUpperCase === 'function') {
            let query = this.$route.query['disable-mem-leak-test'].toUpperCase();
            let compName = (typeof this._name === 'string') ? this._name.replace(/<|>/g, '').toUpperCase() : null;
            if (!compName || (query.indexOf(compName) === -1)) return;
            console.log('noo!');
        }
        console.log('well?', this._name);
    },
    beforeDestroy() {
        console.log('ah shit!');
    }
})