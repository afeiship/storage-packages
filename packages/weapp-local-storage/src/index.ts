declare var wx: any;

class WeappLocalStorage {
  public static setItem(key: string, value: any) {
    wx.setStorageSync(key, value);
  }

  public static getItem(key: string) {
    return wx.getStorageSync(key);
  }

  public static removeItem(key: string) {
    wx.removeStorageSync(key);
  }

  public static clear() {
    wx.clearStorageSync();
  }

  public static keys() {
    return wx.getStorageInfoSync().keys;
  }
}

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = WeappLocalStorage;
}

export default WeappLocalStorage;
