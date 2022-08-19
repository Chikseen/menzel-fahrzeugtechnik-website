<template>
    <div @mouseup="$router.push('/contact')">
        <p v-if="$device.isDesktop">{{ openingState.status }}</p>
        <p>{{ openingState.text }}</p>
        <p>{{ openingState.time }}</p>
    </div>
</template>

<script>
import date from '~/date.js'
import api from '~/apiService'

export default {
    name: "HeaderOpeningHours",
    data() {
        return {
            weekdayOpen: [],
        }
    },
    computed: {
        openingState() {
            const now = new Date()
            const today = (now.getDay() + 6) % 7
            const days = [...this.weekdayOpen]
            let state = {}
            const nowTime = date.dateObjectToHHMM(now)

            if (days[today] && !days[today].close >= nowTime) {
                const open = date.dateObjectToHHMM(days[today].open)
                const close = date.dateObjectToHHMM(days[today].close)

                if (open <= nowTime && close >= nowTime) {
                    state.status = 'Geöffnet'
                    state.text = 'schließt um'
                    state.time = close
                } else {
                    state.status = 'Geschlossen'
                    state.text = 'öffnet um'
                    state.time = open
                }
            } else {
                for (let i = today; i < today + 7; i++) {
                    const nextOpenDay = i % 7
                    if (days[nextOpenDay]) {
                        const open = date.dateObjectToHHMM(days[nextOpenDay].open)
                        const close = date.dateObjectToHHMM(days[nextOpenDay].close)

                        if (open <= nowTime && close >= nowTime) {
                            state.status = 'Geöffnet'
                            state.text = 'schließt um'
                            state.time = close
                        } else {
                            state.status = 'Geschlossen'
                            state.text = `öffnet am ${days[nextOpenDay].name} um`
                            state.time = open
                        }
                        break
                    }
                }
            }
            return state
        },
    },
    methods: {
        async getData() {
            const data = await api.get('Openinghours/Weekdays')
            this.$store.commit('setOpenTime', data)
            this.weekdayOpen = data
        },
    },
    mounted() {
        this.getData()
    },
}
</script>

<style lang="scss">
.header {
    &_quickConntact {
        cursor: pointer;
        max-width: 200px;
        color: rgb(185, 185, 185);
        transition: all 0.25s;
        font-size: 0.8rem;

        p {
            margin: 2px;
        }

        &_timeing {
            padding-left: 100px;
        }

        margin: auto;
    }

    &_quickConntact:hover {
        color: rgb(230, 230, 230);
    }
}
</style>