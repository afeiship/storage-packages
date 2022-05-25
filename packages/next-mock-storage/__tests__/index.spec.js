(function() {
  const NxMockStorage = require('../src');

  describe('NxMockStorage.methods', function() {
    test('api set/get/remove/clear worked', function() {
      // set/get
      var mockStorage = NxMockStorage.getInstance();
      mockStorage.setItem('k1', 'v1');
      mockStorage.setItem('k2', 'v2');
      mockStorage.setItem('k3', 'v3');
      expect(mockStorage.getItem('k1')).toBe('v1');
      expect(mockStorage.getItem('k2')).toBe('v2');

      // remove
      mockStorage.removeItem('k2');
      expect(mockStorage.getItem('k2')).toBe(null);

      // clear
      mockStorage.clear();
      expect(mockStorage.getItem('k1')).toBe(null);
      expect(mockStorage.getItem('k3')).toBe(null);
    });
  });
})();
