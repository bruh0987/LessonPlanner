import { int, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const timetableTable = sqliteTable("timetables", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
})

export const lessonTypeTable = sqliteTable("lesson_types", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  short_name: text(),
})

export const lessonTable = sqliteTable("lessons", {
  id: int().primaryKey({ autoIncrement: true }),
  timetable_id: int()
    .notNull()
    .references(() => timetableTable.id),
  lesson_type: int()
    .notNull()
    .references(() => lessonTypeTable.id),
  startTime: text().notNull(),
  endTime: text().notNull(),
  room: int(),
  day: int().notNull(),
})
