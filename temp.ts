import { db } from "./src/db"
import { lessonTable } from "./src/db/schema"

await db.insert(lessonTable).values([
  // Poniedziałek (Day 1)
  { timetable_id: 1, lesson_type: 2, startTime: "08:15", endTime: "09:00", room: 207, day: 1 }, // GW
  { timetable_id: 1, lesson_type: 3, startTime: "09:10", endTime: "09:55", room: 206, day: 1 }, // język polski
  { timetable_id: 1, lesson_type: 4, startTime: "10:05", endTime: "10:50", room: null, day: 1 }, // wf
  { timetable_id: 1, lesson_type: 6, startTime: "11:00", endTime: "11:45", room: 18, day: 1 }, // hiszp
  { timetable_id: 1, lesson_type: 5, startTime: "11:00", endTime: "11:45", room: 17, day: 1 }, // niem
  { timetable_id: 1, lesson_type: 5, startTime: "11:00", endTime: "11:45", room: 100, day: 1 }, // niem
  { timetable_id: 1, lesson_type: 6, startTime: "11:00", endTime: "11:45", room: 19, day: 1 }, // hiszp
  { timetable_id: 1, lesson_type: 7, startTime: "11:55", endTime: "12:40", room: 207, day: 1 }, // matematyka
  { timetable_id: 1, lesson_type: 8, startTime: "13:00", endTime: "13:45", room: 204, day: 1 }, // EZ
  { timetable_id: 1, lesson_type: 1, startTime: "14:05", endTime: "14:50", room: 126, day: 1 }, // fizyka

  // Wtorek (Day 2)
  { timetable_id: 1, lesson_type: 9, startTime: "08:15", endTime: "09:00", room: 123, day: 2 }, // biologia
  { timetable_id: 1, lesson_type: 6, startTime: "09:10", endTime: "09:55", room: 18, day: 2 }, // hiszp
  { timetable_id: 1, lesson_type: 5, startTime: "09:10", endTime: "09:55", room: 20, day: 2 }, // niem
  { timetable_id: 1, lesson_type: 5, startTime: "09:10", endTime: "09:55", room: 100, day: 2 }, // niem
  { timetable_id: 1, lesson_type: 6, startTime: "09:10", endTime: "09:55", room: 19, day: 2 }, // hiszp
  { timetable_id: 1, lesson_type: 3, startTime: "10:05", endTime: "10:50", room: 206, day: 2 }, // język polski
  { timetable_id: 1, lesson_type: 10, startTime: "11:00", endTime: "11:45", room: 209, day: 2 }, // chemia
  { timetable_id: 1, lesson_type: 7, startTime: "11:55", endTime: "12:40", room: 207, day: 2 }, // matematyka
  { timetable_id: 1, lesson_type: 7, startTime: "13:00", endTime: "13:45", room: 207, day: 2 }, // matematyka
  { timetable_id: 1, lesson_type: 11, startTime: "14:05", endTime: "14:50", room: 205, day: 2 }, // filozofia
  { timetable_id: 1, lesson_type: 12, startTime: "15:00", endTime: "15:45", room: 205, day: 2 }, // e (etyka)

  // Środa (Day 3)
  { timetable_id: 1, lesson_type: 13, startTime: "09:10", endTime: "09:55", room: 126, day: 3 }, // rel
  { timetable_id: 1, lesson_type: 14, startTime: "10:05", endTime: "10:50", room: 211, day: 3 }, // inf
  { timetable_id: 1, lesson_type: 14, startTime: "10:05", endTime: "10:50", room: 214, day: 3 }, // inf
  { timetable_id: 1, lesson_type: 14, startTime: "11:00", endTime: "11:45", room: 211, day: 3 }, // inf
  { timetable_id: 1, lesson_type: 14, startTime: "11:00", endTime: "11:45", room: 214, day: 3 }, // inf
  { timetable_id: 1, lesson_type: 7, startTime: "11:55", endTime: "12:40", room: 207, day: 3 }, // matematyka
  { timetable_id: 1, lesson_type: 15, startTime: "13:00", endTime: "13:45", room: 200, day: 3 }, // ang
  { timetable_id: 1, lesson_type: 15, startTime: "13:00", endTime: "13:45", room: 210, day: 3 }, // ang
  { timetable_id: 1, lesson_type: 16, startTime: "14:05", endTime: "14:50", room: 206, day: 3 }, // historia
  { timetable_id: 1, lesson_type: 17, startTime: "15:00", endTime: "15:45", room: 206, day: 3 }, // BiZ

  // Czwartek (Day 4)
  { timetable_id: 1, lesson_type: 4, startTime: "08:15", endTime: "09:00", room: null, day: 4 }, // wf
  { timetable_id: 1, lesson_type: 1, startTime: "09:10", endTime: "09:55", room: 104, day: 4 }, // fiz
  { timetable_id: 1, lesson_type: 15, startTime: "09:10", endTime: "09:55", room: 100, day: 4 }, // ang
  { timetable_id: 1, lesson_type: 15, startTime: "10:05", endTime: "10:50", room: 200, day: 4 }, // ang
  { timetable_id: 1, lesson_type: 1, startTime: "10:05", endTime: "10:50", room: 104, day: 4 }, // fiz
  { timetable_id: 1, lesson_type: 18, startTime: "11:00", endTime: "11:45", room: 107, day: 4 }, // edb
  { timetable_id: 1, lesson_type: 3, startTime: "11:55", endTime: "12:40", room: 206, day: 4 }, // język polski
  { timetable_id: 1, lesson_type: 3, startTime: "13:00", endTime: "13:45", room: 206, day: 4 }, // język polski
  { timetable_id: 1, lesson_type: 19, startTime: "14:05", endTime: "14:50", room: null, day: 4 }, // prog F (P1)
  { timetable_id: 1, lesson_type: 19, startTime: "14:05", endTime: "14:50", room: 214, day: 4 }, // prog F

  // Piątek (Day 5)
  { timetable_id: 1, lesson_type: 16, startTime: "08:15", endTime: "09:00", room: 123, day: 5 }, // historia
  { timetable_id: 1, lesson_type: 15, startTime: "09:10", endTime: "09:55", room: 200, day: 5 }, // ang
  { timetable_id: 1, lesson_type: 15, startTime: "09:10", endTime: "09:55", room: 124, day: 5 }, // ang
  { timetable_id: 1, lesson_type: 7, startTime: "10:05", endTime: "10:50", room: 207, day: 5 }, // matematyka
  { timetable_id: 1, lesson_type: 20, startTime: "11:00", endTime: "11:45", room: 117, day: 5 }, // geografia
  { timetable_id: 1, lesson_type: 4, startTime: "11:55", endTime: "12:40", room: null, day: 5 }, // wf
])
