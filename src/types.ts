interface LinkList {
    name: string;
    icon: string;
    href: string;
}

interface Card {
    color?: string;
    text?: string;
    borderColor?: string;
    shadow?: boolean;
}

interface Tracking {
    resolvedSchedule: string,
    nextArrival: string,
    nextDeparture: string,
    mapURL: string,
    mins: number,
    arrivalTime: string,
    departureTime: string,
    id: string,
    test: boolean
}

interface TimingTable {
    timeTable: string[],
    secondTimeTable: string[],
    startTime: string,
    arrivalTime: string,
    departureTime: string,
    mins: number
}

interface TicketVal {
    url: string;
    inside: string;
    outside: string;
}

interface Zone {
    name: string;
    name_el: string;
    category: {
        norm: TicketVal;
        low: TicketVal;
        stud: TicketVal;
    }
}

interface TicketsResponseAPI {
    zoneA: Zone;
    zoneB: Zone;
}

function exists(type: unknown): type is NonNullable<typeof type> {
    return type !== null && type!== undefined;
}

export {exists, type TicketsResponseAPI, type LinkList, type Card, type Tracking, type TimingTable };