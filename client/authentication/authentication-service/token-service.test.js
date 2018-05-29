import tokenService from './token-service';

jest.mock('client/common/storage');
import * as storage from 'client/common/storage'; // eslint-disable-line

describe('Browser storage service', () => {
  let service = undefined;// eslint-disable-line
  const key = 'key';
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5qYzRSRGd6UWpjNE5FRXdPRVJHT0VNME56UkVOVUpFTkRoRU1UQkJRekE0UkVVNE9UTkROUSJ9.eyJuaWNrbmFtZSI6ImZha2UiLCJuYW1lIjoiZmFrZUBmYWtlLmNvbSIsInBpY3R1cmUiOiJodHRwOi8vcmVzLmNsb3VkaW5hcnkuY29tL3JlZHN0b25lL2ltYWdlL3VwbG9hZC92MTUyNDY0Nzc3NS91c2Vycy9hdmF0YXJzL2tlZTcxNHVlZmhlanVkYXlrenFkLmpwZyIsInVwZGF0ZWRfYXQiOiIyMDE4LTA1LTA3VDA3OjIxOjIxLjQzN1oiLCJlbWFpbCI6ImZha2VAZmFrZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOi8vbGVvbi10cnVzdC5ldS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWFiMGM3YjM3MWI1YWQwZTYyOTk3Y2MxIiwiYXVkIjoidUttZ2dPMnpCVm15ZlNhby1JQ0tHYXFjcjdFS2tfa3ciLCJpYXQiOjE1MjU2Nzc2ODEsImV4cCI6MTUyNTcxMzY4MX0.dbxXTcghHiVPQm9HiGjgnIAoNAM2Y2pwuqG9dTWadPob5esNozAgAbdluBvgm7duOxUSQeZLbfAtmvU5qUU_oUGFYPJmPw40WeHH-J4d_K97qgKDDuH8xKuFwjSn-NoWK-T6r1uLjVUX4-37wxrP4pY0tYiZ9_gJabeWZX-QQqNW2lYePexaLwu39kG9VckXT7raL6jn6INeqcmwpiYkrF_JxOeLqmkjBKcqdUcC-1sWOkeWxFSiURSRsFADPr0-IBnVGq_lKf0Aj_5XwbZgYDB8KDBiXiG1rrhdbHRRfd45YqKPMUJ02PPU-x0lHgwgWCj_AXPBwQa2PUp96kbv3w';
  beforeAll(() => {
    const memo = {};
    const memoryStorage = {
      getItem: k => memo[k],
      removeItem: (k) => {
        delete memo[k];
      },
      setItem: (k, value) => {
        memo[k] = value;
      },
    };
    storage.default.mockImplementation(() => memoryStorage);
    service = tokenService(key);
  });

  it('should store token data under specified key', () => {
    service.setToken(token);
    const actual = service.getToken();
    const expected = token;
    expect(actual).toEqual(expected);
  });
  it('should remove token data under specified key', () => {
    service.removeToken();
    const actual = service.getToken();
    const expected = undefined;
    expect(actual).toEqual(expected);
  });
  it('should get token data under specified key', () => {
    service.setToken(token);
    const actual = service.getToken();
    const expected = token;
    expect(actual).toEqual(expected);
  });
  it('should decode token data under specified key', () => {
    const actual = service.decode(token);
    const expected = 'fake@fake.com';

    expect(actual).toHaveProperty('email', expected);
  });
});
