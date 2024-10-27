import {defineStore} from "pinia";
import {useRouter} from "vue-router"

export const useDataStore = defineStore('data', () => {
    const router = useRouter();

    const getData = (id) => {
        return fetch(`http://localhost:3030/schedule/${id}`)
            .then((res) => res.json())
            .catch((e) => router.push(`/404`))
    }

    return {getData}
})
