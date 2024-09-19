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
    localStorage.setItem(key, JSON.stringify(value))
  }

  remove(key: string) {
    localStorage.removeItem(key)
  }
};

export default new LocalStorageService();