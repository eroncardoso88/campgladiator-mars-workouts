export interface BaseRecord {
  id: string;
 }

export interface Database<T extends BaseRecord> {
  set(newValue: T): void
  get(id: string): T | undefined
  getAll(): Record<string, T> | undefined
}

export function createDatabase<T extends BaseRecord>() {
  class InMemoryDatabase implements Database<T> {
    private db: Record<string, T> = {}

    public set(newValue: T): void {
      this.db[newValue.id] = newValue
    }

    public get(id:string): T | undefined {
      return this.db[id]
    }

    public getAll(): Record<string, T> {
      return this.db
    }
  }
  return InMemoryDatabase
}
