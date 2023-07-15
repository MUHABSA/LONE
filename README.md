# LONE | 로컬로 오네

![‎로네 리드미 ‎001](https://github.com/MUHABSA/LONE/assets/102042383/13e27316-04bc-4547-a7f2-0daed5235c93)


📄 URL: https://lone.vercel.app/

📄 서비스 이용을 위한 테스트 계정

```
💌 ID: lone@lone.com
🔐 PASSWORD: testlone
```
<br>


<br><br><br>

![‎로네 리드미 ‎002](https://github.com/MUHABSA/LONE/assets/102042383/0a326919-6213-4658-ab52-3b54df5201df)
![‎로네 리드미 ‎003](https://github.com/MUHABSA/LONE/assets/102042383/39bccc9a-43b1-45ea-b9dc-0fb5ef086a49)
![‎로네 리드미 ‎004](https://github.com/MUHABSA/LONE/assets/102042383/d4c5e62c-1408-4c08-b37c-19220f0570ba)
![‎로네 리드미 ‎005](https://github.com/MUHABSA/LONE/assets/102042383/4d506e4e-c40f-411b-b4d1-eff59abfbbff)
![‎로네 리드미 ‎006](https://github.com/MUHABSA/LONE/assets/102042383/0f49c20d-c60c-40e4-bad1-a1cab829f3e9)
![‎로네 리드미 ‎007](https://github.com/MUHABSA/LONE/assets/102042383/42105b7a-b9dd-48ba-9fd4-9f9dada63e00)
![‎로네 리드미 ‎008](https://github.com/MUHABSA/LONE/assets/102042383/06bd9f95-103a-4c5f-a36a-0038c407cb3e)


<br>

## 🥂 팀원 소개
|완벽한 디테일을 추구하는 [최유정](https://github.com/yuzomi)|코드 위 모든 문제를 해결하는 [고지연](https://github.com/yeon1615)|
|:---:|---|
|전체 기획, 디자인, UI 개발을 맡았어요|프론트엔드 기능 개발, Firebase DB 연동을 맡았어요|

<br> <br>

## 🥂 기술 및 개발환경

### [기술]
|사용한 기술|내용|
|:---:|---|
|Figma|개발 전 UI 디자인을 한 눈에 알아보기 쉽도록 디자인 툴은 Figma를 사용했어요|
|React|컴포넌트의 분리와 재사용 측면에서 효율성을 높이기 위해 React를 사용했어요|
|Styled-components|CSS의 컴포넌트화로 스타일 시트 파일을 유지보수 할 필요가 없도록 Styled-components를 사용했어요|
|Kakao Map SDK|양조장의 위치를 효과적으로 전달하기 위해 Kakao 지도 API를 활용해 위치정보를 시각적으로 전달했어요|
|Firebase|유저 인증과 데이터베이스를 편리하게 구현하고 관리하기 위해 Firebase를 사용했어요|

<br>

### [개발환경]
|개발환경|우리가 선택한 방식|
|:---:|---|
|브랜치전략|Git-flow|
|정적 코드 분석 도구|ESLint|
|Code Formatter|Prettier|
|협업 도구|Jira: 진행사항 관리 <br> Discord: 실시간 채팅 및 화면 공유를 통한 협업|

<br> <br>

## 🥂 트러블 슈팅

- 구현하고자 한 기능: 모달 컴포넌트 생성 및 소멸 시 슬라이드 애니메이션

  <br>

1. 처음 생각했던 코드
    1. `@keyframes`를 사용해 원하는 효과를 만든 후, 모달 온오프 애니메이션 적용을 위한 `openModal` , `closeModal` 클래스를 생성한다.
        
        ```jsx
        const slide = keyframes`
          from {
            transform: translateY(330px);
          } 
          to{
            transform: translateY(0);
          }
        `;
        
        const MapModal = styled.div`
          position: fixed;
        	//중략
        
          &.openModal {
            animation: ${slide} 0.4s ease-out normal forwards;
          }
          &.closeModal {
            animation: ${slide} 0.2s ease-out reverse forwards;
          }
        `;
        ```
        
    2. 컴포넌트의 `className` 을 state로 관리해 초기값을 `openModal` 로 설정, 마운트시에 열림 애니메이션이 자동으로 적용되도록 한다.
        
        ```jsx
        const [animation, setAnimation] = useState('openModal');
        
        ...
        <MapModal className={animation}>
        ...
        </MapModal>
        ```
        
    3. 컴포넌트의 언마운트를 제어하는 함수에 `setTimeout` 메서드를 사용해 `animation-duration` 시간만큼 언마운트를 지연시켜 언마운트 전에 애니메이션이 실행되도록 한다.
        
        ```jsx
        // 모달의 닫기 버튼
        <button
          onClick={() => {
            setAnimation('closeModal');
            setTimeout(() => {
              setIsMarkerClicked(!isMarkerClicked); 
        			//isMarkerClicked : 모달의 온오프 여부(마커가 눌렸는지)를 관리하는 상태값
            }, 200);
          }}
        />
        ```

        <br>
        
2. 문제점
    1. 마운트시에는 정상적으로 애니메이션이 실행되지만, 언마운트시에 적용한 애니메이션이 제대로 작동되지 않고 컴포넌트가 바로 사라져버리는 문제 발생
    2. 개발자도구로 확인한 결과 언마운트 전에 `closeModal` 클래스가 제대로 들어가는 것은 확인

    <br>
    
3. 이유
    1. `openModal` 클래스와 `closeModal` 클래스가 동일한 키프레임명(slide)을 `animation-name` 속성으로 공유
    2. 따라서 클래스를 변경하더라도 해당 컴포넌트의 `animation-name`은 동일하게 유지되는 상태로 `animation-direction`과 `animation-duration`만 덮어쓰이기 때문에 의도대로 애니메이션이 재실행되지 않은 것

  <br>
    
4. 해결코드
    1. 마운트시에 열림 애니메이션이 실행된 후, `setTimeout` 메서드를 사용해 해당 애니메이션의 `duration`만큼 기다린 후 state를 빈 문자열로 초기화
    2. `closeModal` 클래스명으로 state가 변경되는 시점에서는 해당 컴포넌트의 `animation` 속성이 비어있으므로 변경된 `animation`이 제대로 작동
        
        ```tsx
        const [animation, setAnimation] = useState('openModal');
        
        useEffect(() => {
          const resetTimer = setTimeout(() => {
            setAnimation('');
          }, 400);
          return () => {
            clearTimeout(resetTimer);
          };
        }, []);
        
        ...
        
        <button
          onClick={() => {
            setAnimation('closeModal');
            setTimeout(() => {
              setIsMarkerClicked(!isMarkerClicked);
            }, 200);
          }}
        />
        ```
