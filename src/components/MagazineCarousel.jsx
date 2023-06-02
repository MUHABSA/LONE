import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs, limit, query } from 'firebase/firestore';
import { db } from '../Firebase';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function MagazineCarousel() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const q = query(collection(db, 'articles'), limit(3));
        const querySnapshot = await getDocs(q);
        setArticles(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
      } catch (e) {
        alert('error');
        console.log(e);
      }
    };
    getArticles();
  }, []);

  return (
    <section>
      <h3>오늘의 추천 기사~등 리더기용 타이틀</h3>
      <SlickSlider {...setting}>
        {articles.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/magazine/${item.id}`, { state: item })}
          >
            {/* 사진 위에 제목 넣고싶으면 주석 해제해서 쓰면 됨 */}
            {/* <strong>{item.title}</strong> */}
            <img src={item.image} alt={item.alt} />
          </div>
        ))}
      </SlickSlider>
    </section>
  );
}

const setting = {
  infinite: true, //무한 반복 옵션
  draggable: true, //드래그 가능 여부
  dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
  arrows: false, // 옆으로 이동하는 화살표 버튼 표시 여부
  speed: 700, // dot, arrow 눌렀을 때 다음 슬라이드로 완전히 넘어가는데까지 걸리는 시간(ms)
  fade: false, // 페이드아웃 형식으로 다음 컨텐츠 보여주고 싶을 때(드래그해도 페이드아웃으로 넘어감)
  fadeSpeed: 700, // 페이드아웃 시간 (ms)
  autoplay: false, // 다음 컨텐츠 자동으로 보여줄지
  autoplaySpeed: 5000, // 오토플레이시 다음으로 넘어가는 간격 (ms)
  pauseOnHover: true, // 슬라이드 이동시 마우스 호버하면 슬라이더 멈추게 설정
};

// 스타일링 원하는대로 수정하세용
const SlickSlider = styled(Slider)`
  // 외부 레이아웃 스타일링
  width: 100%;
  margin: 0 auto;

  // 슬라이드별 이미지 스타일링
  .slick-slide img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }

  // 기본 ⚫⚪⚪ 형태의 dot으로 하고 싶을 경우
  .slick-dots {
    position: absolute;
    bottom: 8px; // 사진 최하단과 dot 사이 간격
    li {
      margin-left: -5px; // dot 사이 간격
    }

    // 전체 dot 디폴트 스타일링
    button::before {
      opacity: 1;
      color: white;
    }

    //현재 인덱스의 dot 스타일링
    .slick-active {
      button::before {
        opacity: 1;
        color: black;
      }
    }
  }

  // 💜 dot 자체를 스타일링 하고 싶을 경우
  .slick-dots {
    position: absolute;
    bottom: 1px;
    li {
      padding: 0 50px; // button::before의 width값의 반으로 주면 dot끼리 딱 붙음(참고)
      opacity: 0.5;
      overflow: hidden;

      button::before {
        content: '';
        width: 100px;
        height: 6px;
        background-color: white;
      }
    }

    .slick-active {
      opacity: 1;
      button::before {
        background-color: #be98fd;
      }
    }
  }
`;
