import React, { useState } from 'react';

function MainPage() {
  // 상태 변수로 '방 생성하기' 또는 '방 들어가기' 버튼이 눌렸는지 추적
  const [showNicknameInput, setShowNicknameInput] = useState(false);
  const [nickname, setNickname] = useState('');

  // 버튼 클릭 핸들러
  const handleButtonClick = () => {
    setShowNicknameInput(true);
  };

  // 닉네임 입력 필드 핸들러
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h1>메인 페이지</h1>
      
      {/* 방 생성하기 버튼 */}
      <button style={styles.button} onClick={handleButtonClick}>방 생성하기</button>
      
      {/* 방 들어가기 버튼 */}
      <button style={styles.button} onClick={handleButtonClick}>방 들어가기</button>

      {/* 닉네임 입력 필드 렌더링 */}
      {showNicknameInput && (
        <div style={styles.nicknameContainer}>
          <input 
            type="text" 
            placeholder="닉네임을 입력하세요" 
            value={nickname} 
            onChange={handleNicknameChange} 
            style={styles.input}
          />
        </div>
      )}
    </div>
  );
}

// 스타일 정의
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  nicknameContainer: {
    marginTop: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
  },
};

export default MainPage;
