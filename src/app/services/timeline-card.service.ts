import { Injectable } from "@angular/core";
import { TimelineCard } from "../models/timeline-card.model";

@Injectable({
    providedIn: "root"
})

export class TimelineCardService {
    timelineCards: TimelineCard[] = [
        {
            id: 1,
            date: "2025",
            schoolName: "NIMP",
            place: "Paris",
            description: "Bachelor of Science in Computer Science"
        },
        {
            id: 2,
            date: "2024",
            schoolName: "ISA",
            place: "Austria",
            description: "Bachelor of Science in Computer Science"
        },
        {
            id: 1,
            date: "2023",
            schoolName: "Ecole de Campremy",
            place: "Salzburg",
            description: "Bachelor of Science in Computer Science"
        },
        {
            id: 2,
            date: "2022",
            schoolName: "University of Applied Sciences Salzburg",
            place: "Paris",
            description: "Bachelor of Science in Computer Science"
        },
        {
            id: 1,
            date: "2019",
            schoolName: "Ecole de emerde",
            place: "Salzburg",
            description: "Bachelor of Science in Computer Science"
        },
        {
            id: 2,
            date: "2001",
            schoolName: "College pv",
            place: "Austria",
            description: "Bachelor of Science in Computer Science"
        },
        {
            id: 1,
            date: "2000",
            schoolName: "Lycee felix faure",
            place: "Paris",
            description: "Bachelor of Science in Computer Science"
        },
        {
            id: 2,
            date: "1980",
            schoolName: "ESIEE",
            place: "New york",
            description: "Bachelor of Science in Computer Science"
        },
    ];

    getTimelineCards(): TimelineCard[] {
        return this.timelineCards;
    }
}