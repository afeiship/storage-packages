declare var wx: any;

const localStorage =
  typeof wx === 'undefined'
    ? self.localStorage
    : {
        getItem: (key: string) => wx.getStorageSync(key),
        setItem: (key: string, val: string) => wx.setStorageSync(key, val),
        removeItem: (key: string) => wx.removeStorageSync(key),
        clear: () => wx.clearStorageSync(),
      };

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
