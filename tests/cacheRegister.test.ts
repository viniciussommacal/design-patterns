import CacheRegister from '../src/singleton/CacheRegister';

describe('Teste CacheRegister', () => {
  const cacheRegister1 = CacheRegister.getInstance();
  const cacheRegister2 = CacheRegister.getInstance();

  it('Deve retornar a mesma instancia', () => {
    expect(cacheRegister1).toBe(cacheRegister2);
  });

  it('Instância deve ser do tipo Cache Register', () => {
    expect(cacheRegister1).toBeInstanceOf(CacheRegister);
  });

  it('Deve retornar o mesmo valor da propriedade na chamada get', () => {
    const key = 'courseName';
    const value = 'Pós Full Stack';

    cacheRegister1.set(key, value);
    const valueCacheRegister1 = cacheRegister1.get(key);
    const valueCacheRegister2 = cacheRegister2.get(key);

    expect(valueCacheRegister1).toBe(valueCacheRegister2);
  });
});
