import config from 'client/common/config';
import authenticationService, {mixUpClaims} from './authentication-service';

jest.mock('client/common/request');
import * as lib from 'client/common/request'; // eslint-disable-line

test('should authenticate make http request', async () => {
  const expected = {
    access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5qYzRSRGd6UWpjNE5FRXdPRVJHT0VNME56UkVOVUpFTkRoRU1UQkJRekE0UkVVNE9UTkROUSJ9.eyJpc3MiOiJodHRwczovL2xlb24tdHJ1c3QuZXUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDVhYjBjN2IzNzFiNWFkMGU2Mjk5N2NjMSIsImF1ZCI6WyJodHRwczovL2xlb24tdHJ1c3QuZXUuYXV0aDAuY29tL2FwaS92Mi8iLCJodHRwczovL2xlb24tdHJ1c3QuZXUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTUyNTY3NzY4MSwiZXhwIjoxNTI1NzY0MDgxLCJhenAiOiJ1S21nZ08yekJWbXlmU2FvLUlDS0dhcWNyN0VLa19rdyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgYWRkcmVzcyBwaG9uZSByZWFkOmN1cnJlbnRfdXNlciB1cGRhdGU6Y3VycmVudF91c2VyX21ldGFkYXRhIiwiZ3R5IjoicGFzc3dvcmQifQ.AeCUhHoDkiYkRjb2QMDfvLZm_pUrgBSN2RMgEzhZiRaQTIbtWXchq_Cxq0FgslPvvUactHZVFIImREVlIBlQlcKofbEfjM4_qZ39JzXJCaX7PMhBXWs7ISRKf6S61tZwWQ-u8j7X8LLdd7w8KA95IHUK9BCSTA6rTV10w8YWejJGajpsOcnmg94px3K4iSxQrlZCrX-7TIh_WhKYTJNWhU_-hiTDpL46_fNkByxOrX6VkKUQnN-YL_r_TGfvjck11EOp5Qf91Q5ATzK9wdoiPbMfddQEtTg37Q9Bb_mIKG76ey6yi3A6A9L3971PXRAfoq5qPd7QH-L4SazYL6881A',
    id_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5qYzRSRGd6UWpjNE5FRXdPRVJHT0VNME56UkVOVUpFTkRoRU1UQkJRekE0UkVVNE9UTkROUSJ9.eyJuaWNrbmFtZSI6ImZha2UiLCJuYW1lIjoiZmFrZUBmYWtlLmNvbSIsInBpY3R1cmUiOiJodHRwOi8vcmVzLmNsb3VkaW5hcnkuY29tL3JlZHN0b25lL2ltYWdlL3VwbG9hZC92MTUyNDY0Nzc3NS91c2Vycy9hdmF0YXJzL2tlZTcxNHVlZmhlanVkYXlrenFkLmpwZyIsInVwZGF0ZWRfYXQiOiIyMDE4LTA1LTA3VDA3OjIxOjIxLjQzN1oiLCJlbWFpbCI6ImZha2VAZmFrZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOi8vbGVvbi10cnVzdC5ldS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWFiMGM3YjM3MWI1YWQwZTYyOTk3Y2MxIiwiYXVkIjoidUttZ2dPMnpCVm15ZlNhby1JQ0tHYXFjcjdFS2tfa3ciLCJpYXQiOjE1MjU2Nzc2ODEsImV4cCI6MTUyNTcxMzY4MX0.dbxXTcghHiVPQm9HiGjgnIAoNAM2Y2pwuqG9dTWadPob5esNozAgAbdluBvgm7duOxUSQeZLbfAtmvU5qUU_oUGFYPJmPw40WeHH-J4d_K97qgKDDuH8xKuFwjSn-NoWK-T6r1uLjVUX4-37wxrP4pY0tYiZ9_gJabeWZX-QQqNW2lYePexaLwu39kG9VckXT7raL6jn6INeqcmwpiYkrF_JxOeLqmkjBKcqdUcC-1sWOkeWxFSiURSRsFADPr0-IBnVGq_lKf0Aj_5XwbZgYDB8KDBiXiG1rrhdbHRRfd45YqKPMUJ02PPU-x0lHgwgWCj_AXPBwQa2PUp96kbv3w',
  };
  lib.default.mockImplementation(() => expected);
  const props = {
    login: 'login',
    password: 'password',
  };

  const actual = await authenticationService.authenticate(props);

  expect(actual).toEqual(expected);
});

test('should authenticate mixup sensitive data', async () => {
  const response = {
    access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5qYzRSRGd6UWpjNE5FRXdPRVJHT0VNME56UkVOVUpFTkRoRU1UQkJRekE0UkVVNE9UTkROUSJ9.eyJpc3MiOiJodHRwczovL2xlb24tdHJ1c3QuZXUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDVhYjBjN2IzNzFiNWFkMGU2Mjk5N2NjMSIsImF1ZCI6WyJodHRwczovL2xlb24tdHJ1c3QuZXUuYXV0aDAuY29tL2FwaS92Mi8iLCJodHRwczovL2xlb24tdHJ1c3QuZXUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTUyNTY3NzY4MSwiZXhwIjoxNTI1NzY0MDgxLCJhenAiOiJ1S21nZ08yekJWbXlmU2FvLUlDS0dhcWNyN0VLa19rdyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgYWRkcmVzcyBwaG9uZSByZWFkOmN1cnJlbnRfdXNlciB1cGRhdGU6Y3VycmVudF91c2VyX21ldGFkYXRhIiwiZ3R5IjoicGFzc3dvcmQifQ.AeCUhHoDkiYkRjb2QMDfvLZm_pUrgBSN2RMgEzhZiRaQTIbtWXchq_Cxq0FgslPvvUactHZVFIImREVlIBlQlcKofbEfjM4_qZ39JzXJCaX7PMhBXWs7ISRKf6S61tZwWQ-u8j7X8LLdd7w8KA95IHUK9BCSTA6rTV10w8YWejJGajpsOcnmg94px3K4iSxQrlZCrX-7TIh_WhKYTJNWhU_-hiTDpL46_fNkByxOrX6VkKUQnN-YL_r_TGfvjck11EOp5Qf91Q5ATzK9wdoiPbMfddQEtTg37Q9Bb_mIKG76ey6yi3A6A9L3971PXRAfoq5qPd7QH-L4SazYL6881A',
    id_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5qYzRSRGd6UWpjNE5FRXdPRVJHT0VNME56UkVOVUpFTkRoRU1UQkJRekE0UkVVNE9UTkROUSJ9.eyJuaWNrbmFtZSI6ImZha2UiLCJuYW1lIjoiZmFrZUBmYWtlLmNvbSIsInBpY3R1cmUiOiJodHRwOi8vcmVzLmNsb3VkaW5hcnkuY29tL3JlZHN0b25lL2ltYWdlL3VwbG9hZC92MTUyNDY0Nzc3NS91c2Vycy9hdmF0YXJzL2tlZTcxNHVlZmhlanVkYXlrenFkLmpwZyIsInVwZGF0ZWRfYXQiOiIyMDE4LTA1LTA3VDA3OjIxOjIxLjQzN1oiLCJlbWFpbCI6ImZha2VAZmFrZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOi8vbGVvbi10cnVzdC5ldS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWFiMGM3YjM3MWI1YWQwZTYyOTk3Y2MxIiwiYXVkIjoidUttZ2dPMnpCVm15ZlNhby1JQ0tHYXFjcjdFS2tfa3ciLCJpYXQiOjE1MjU2Nzc2ODEsImV4cCI6MTUyNTcxMzY4MX0.dbxXTcghHiVPQm9HiGjgnIAoNAM2Y2pwuqG9dTWadPob5esNozAgAbdluBvgm7duOxUSQeZLbfAtmvU5qUU_oUGFYPJmPw40WeHH-J4d_K97qgKDDuH8xKuFwjSn-NoWK-T6r1uLjVUX4-37wxrP4pY0tYiZ9_gJabeWZX-QQqNW2lYePexaLwu39kG9VckXT7raL6jn6INeqcmwpiYkrF_JxOeLqmkjBKcqdUcC-1sWOkeWxFSiURSRsFADPr0-IBnVGq_lKf0Aj_5XwbZgYDB8KDBiXiG1rrhdbHRRfd45YqKPMUJ02PPU-x0lHgwgWCj_AXPBwQa2PUp96kbv3w',
  };
  const mockedLib = lib.default.mockImplementation(() => response);
  const props = {
    login: 'login',
    password: 'password',
  };
  const authenticationPath = `${config.api.path}/authenticate`;
  const expectedClains = mixUpClaims(props);
  const expected = {
    data: {
      ...expectedClains,
    },
    method: 'post',
    url: authenticationPath,
  };

  await authenticationService.authenticate(props);

  expect(mockedLib).toBeCalledWith(expected);
});
