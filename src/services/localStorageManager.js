class localStorageManager {
  static setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getItem(key) {
    const value = localStorage.getItem(key);
    const finalValue = value ? JSON.parse(value) : null;
    try {
      return JSON.parse(finalValue);
    } catch (e) {
      return finalValue;
    }
  }

  static removeItem(key) {
    localStorage.removeItem(key);
  }

  static clear() {
    localStorage.clear();
  }


  static businessName() {
    const name = "ativo"
    return name
  }


  static async signOut() {
    const dadosInternos = ['@Auth:']

    await dadosInternos.forEach((keyStorageDelete) => {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith(keyStorageDelete)) {
          localStorage.removeItem(key);
        }
      }
    })
  }


}

export default localStorageManager