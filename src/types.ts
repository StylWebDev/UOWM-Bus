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

export {type LinkList, type Card, type Tracking, type TimingTable };