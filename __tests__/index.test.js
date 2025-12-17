describe('src/index.js', () => {
  test('logs startup message', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    require('../src/index.js');
    expect(spy).toHaveBeenCalledWith('Hello from scaffold: felipe');
    spy.mockRestore();
  });
});
