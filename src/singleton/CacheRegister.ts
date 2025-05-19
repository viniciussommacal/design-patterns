class CacheRegister {
  private static instance?: CacheRegister;

  private cache: Map<string, any> = new Map();

  private constructor() {}

  public static getInstance() {
    if (CacheRegister.instance == null) {
      CacheRegister.instance = new CacheRegister();
    }

    return CacheRegister.instance;
  }

  public set(key: string, value: any): void {
    this.cache.set(key, value);
  }

  public get(key: string): any {
    return this.cache.get(key);
  }

  public clear(): void {
    this.cache.clear();
  }
}

export default CacheRegister;
