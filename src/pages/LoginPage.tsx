import React, { useState } from 'react';
import { TextField } from '../components/TextField';
import data from '../db/data.json';
import { useHistory } from 'react-router-dom';

export const LoginPage = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const { replace } = useHistory();

 const users = data.users;

const checkUser = () => {
  if (email === "" || password ==="") {
    alert('아이디와 비밀번호를 입력해주세요')
    return;
  }

  for (let i = 0; i < users.length; i++) {
    if (email === users[i].email && password === users[i].password) {
        alert("로그인 성공");
        replace('/');
        return;
    }   else if (email === users[i].email && password === users[i].password) {
        alert("비밀번호가 틀립니다");
        return;
    }
  }
  alert("로그인 실패");
};

  return (
    <div className="m-4 space-y-10">
      <div className="text-3xl font-bold mb-10">로그인</div>
      
      <div className="space-y-3">
        <TextField
        label={"이메일"}
        placeholder="이메일을 입력해주세요."
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        />
        <TextField
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요."
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        />
      </div>

      <div className="">
       <div
       className="py-4 bg-gray-800 text-white text-center rounded-xl"
       onClick={() => {
         checkUser();
       }}>
         로그인</div>
       <div className="py-4 mt-2 border border-gray-800 text-gray-800 text-center rounded-xl">회원가입</div>
      </div>

    </div>
  );
};  