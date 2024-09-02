class LocalStorageService {
  get(key: string) {
    try {
      const result = localStorage.getItem(key);
      return result ? JSON.parse(result) : null;
    } catch (e) {
      console.log(e)
    }
  }

  set(key: string, value: any) {
    localStorage.setItem(key, value)
  }
};

export default new LocalStorageService();