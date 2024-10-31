import {defineStore} from "pinia";
import {useRouter} from "vue-router"
import {ref} from "vue";

export const useDataStore = defineStore('data', () => {
    const router = useRouter();

    const getData = (id: number) => {
        return fetch(`http://localhost:3030/schedule/${id}`)
            .then((res) => res.json())
            .catch((_) => router.push(`/404`))
    }

    const getTickets = () => {
        return fetch(`http://localhost:3030/tickets`)
            .then((res) => res.json())
            .catch((_) => router.push(`/404`))
    }

    const addTime = (timeStamp: string, mins: number): string => {
        let totalMins = Number(mins) + Number(timeStamp.slice(3,5))
        let totalHours = Number(timeStamp.slice(0,2))
        if (totalMins >= 60) {
            (totalHours === 23) ? totalHours=0 : totalHours++;
            totalMins= totalMins - 60;
            if (totalHours >= 10) {
                return  (totalMins >= 10) ? `${totalHours}:${totalMins}` : `${totalHours}:0${totalMins}`;
            }
            return (totalMins >= 10) ? `0${totalHours}:${totalMins}` : `0${totalHours}:0${totalMins}`;
        }
        return timeStamp.slice(0,3) + `${(totalMins >= 10) ? totalMins : `0${totalMins}`}`
    }

    const startTime = ref<string>(``)


    return {getData, addTime, getTickets, startTime}
})
