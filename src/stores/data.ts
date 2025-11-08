import {TicketsResponseAPI} from "../types.ts";

export const useDataStore = defineStore('data', () => {
    const router = useRouter();

    const getData = (id: number) => {
        return fetch(`http://uowmbusapi.onrender.com/schedule/${id}`)
            .then((res) => res.json())
            .catch((_) => router.push(`/404`))
    }

    const getTickets = async (): Promise<TicketsResponseAPI> => {
        try {
            const res = await fetch(`https://uowmbusapi.onrender.com/tickets`);
            if (!res.ok) throw new Error("Network response was not ok");
            return await res.json() as TicketsResponseAPI;
        } catch (_) {
            router.push(`/404`);
            throw new Error("Failed to fetch tickets");
        }
    };

    const getBusStops = () => {
        return fetch(`https://uowmbusapi.onrender.com/stops`)
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

    const dateToTimeStamp = (hours: number, mins: number) :string => {
        if (hours >= 24 || mins >= 60 || hours<0 || mins<0) return 'Wrong Arguments';
        if (mins < 10) {
            if (hours > 9) {
                return `${hours}:0${mins}`;
            }
            return `0${hours}:0${mins}`;
        }
        return (hours > 9) ?  `${hours}:${mins}` : `0${hours}:${mins}`;
    }

    const startTime = ref<string>(``)

    const getDistanceFromLatLonInKm = (lat1: number,lon1: number,lat2: number,lon2: number): number => {
        let R = 6371; // Radius of the earth in km
        let dLat = deg2rad(lat2-lat1);  // deg2rad below
        let dLon = deg2rad(lon2-lon1);
        let a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2)
        ;
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return parseFloat((R * c).toFixed(2));
    }

    const deg2rad = (deg: number): number => deg * (Math.PI/180);

     const normalizeGreek = (text: string): string => {
        text = text.replace(/Ά|Α|ά/g, 'α')
            .replace(/Έ|Ε|έ/g, 'ε')
            .replace(/Ή|Η|ή/g, 'η')
            .replace(/Ί|Ϊ|Ι|ί|ΐ|ϊ/g, 'ι')
            .replace(/Ό|Ο|ό/g, 'ο')
            .replace(/Ύ|Ϋ|Υ|ύ|ΰ|ϋ/g, 'υ')
            .replace(/Ώ|Ω|ώ/g, 'ω')
            .replace(/Σ|ς/g, 'σ');
        return text;
    }

    return {getData, addTime, getTickets, startTime, dateToTimeStamp, getBusStops, deg2rad, getDistanceFromLatLonInKm, normalizeGreek}
})
