import { Hono } from "hono"
import { createDb, db } from "./db"
import { lessonTable, lessonTypeTable, timetableTable } from "./db/schema"
import { and, asc, eq, sql } from "drizzle-orm"

type Variables = {
  db: ReturnType<typeof createDb>
}

const app = new Hono<{
  Bindings: Cloudflare.Env
  Variables: Variables
}>()

let db: Variables["db"]

app.use("*", async (c, next) => {
  if (!db) {
    db = createDb(c.env)
  }

  c.set("db", db)
  await next()
})

app.get("/health", (c) => {
  return new Response("OK", { status: 200 })
})

app.get("/timetables", async (c) => {
  const timetables = await db.select().from(timetableTable)
  console.log(timetables)
  return c.json(timetables)
})

app.get("/timetable/:id", async (c) => {
  const { id } = c.req.param()
  const day = c.req.query("day")
  const timetableId = parseInt(id)
  if (day) {
    const lessons = await db
      .select({
        id: lessonTable.id,
        day: lessonTable.day,
        startTime: lessonTable.startTime,
        endTime: lessonTable.endTime,
        room: lessonTable.room,

        lessonType: {
          name: lessonTypeTable.name,
          short_name: lessonTypeTable.short_name,
        },
      })
      .from(lessonTable)
      .innerJoin(lessonTypeTable, eq(lessonTable.lesson_type, lessonTypeTable.id))
      .where(and(eq(lessonTable.timetable_id, timetableId), eq(lessonTable.day, parseInt(day))))
      .orderBy(asc(lessonTable.startTime))
    return c.json(lessons)
  } else {
    const lessons = await db
      .select({
        id: lessonTable.id,
        day: lessonTable.day,
        startTime: lessonTable.startTime,
        endTime: lessonTable.endTime,
        room: lessonTable.room,

        lessonType: {
          name: lessonTypeTable.name,
          short_name: lessonTypeTable.short_name,
        },
      })
      .from(lessonTable)
      .innerJoin(lessonTypeTable, eq(lessonTable.lesson_type, lessonTypeTable.id))
      .where(eq(lessonTable.timetable_id, timetableId))
      .orderBy(asc(lessonTable.day), asc(lessonTable.startTime))
    const days: (typeof lessons)[] = Array.from({ length: 7 }, () => [])

    for (const lesson of lessons) {
      days[lesson.day].push(lesson)
    }

    return c.json(days)
  }
})

export default app
