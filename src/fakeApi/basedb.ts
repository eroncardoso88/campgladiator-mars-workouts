export interface BaseRecord {
  id: string;
 }

export const timeout = () => Math.floor(Math.random() * (2.5 - 0.25 + 1)) + 0.25

export interface Database<T extends BaseRecord> {
  set(newValue: T): void
  get(id: string): Promise<T | undefined>
  getAll(): Promise<Record<string, T>> | undefined
}

export function createDatabase<T extends BaseRecord>() {
  class InMemoryDatabase implements Database<T> {
    private db: Record<string, T> = {}

    public set(newValue: T): void {
      this.db[newValue.id] = newValue
    }

    public get(id:string): Promise<T | undefined> {
      return new Promise((resolve) => {
        setTimeout(
          () => resolve(this.db[id]),
          timeout()
        );
      });
    }

    public getAll(): Promise<Record<string, T>> {
      return new Promise((resolve) => {
        setTimeout(
          () => resolve(this.db),
          timeout()
        );
      });
    }
  }
  return InMemoryDatabase
}
