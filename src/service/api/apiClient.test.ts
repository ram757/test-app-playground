import ApiClient from "./apiClient";

describe('ApiClient', () => {
  let jsonTransformer: unknown;
  beforeEach(() => {
    jsonTransformer = jest.fn().mockReturnValue({});
    jest.spyOn(global, 'fetch').mockReturnValue(Promise.resolve({ json: jsonTransformer } as any));
  });
  
  describe('get', () => {
    it('should be called with expected parameters and parse as JSON', async () => {
      const result = await ApiClient.get('myUrl');

      expect(global.fetch).toHaveBeenCalledWith('myUrl', {"headers": {"Accept": "application/json", "Content-Type": "application/json"}, "method": "GET"});
      expect(jsonTransformer).toHaveBeenCalled();
      expect(result).toEqual({});
    });
  });
});