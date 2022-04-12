import React from 'react';
import { TextField } from '../components/TextField';

export const SignupPage = () => {
  return  (
   <div className="m-4">
      <div className="text-3xl font-bold mb-10">회원가입</div>
      
      <div>
        <TextField label="아이디" placeholder="아이디를 입력해주세요." />
        <TextField label="비밀번호" placeholder="비밀번호를 입력해주세요."
        type="password"/>
        <TextField label="비밀번호 확인" placeholder="비밀번호를 입력해주세요."
        type="password"/>
        <TextField label="이름" placeholder="이름을 입력해주세요." />
      </div>

      <div className="mt-10">
       <div className="py-4 mt-2 border border-gray-800 text-gray-800 text-center rounded-xl">회원가입</div>
      </div>

    </div>
  );
};
