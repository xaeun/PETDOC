import { useState, useEffect } from 'react';
import BottomMenu from '../../component/BottomMenu/BottomMenu';
import Chatting from './Chatting/Chatting';
import ConsultBtns from './ConsultBtns/ConsultBtns';
import './Consult.css';

const consultDummy = [
    {
        consult_id: 0,
        consult_content: `
            양파 - 양파의 강한 독성은 개나 고양이의 적혈구를 녹려버리며, 급성 빈혈을 일으켜 사망하기도 합니다.
            초콜렛 -  중독을 일으키고, 지나친 흥분상태를 보이기도 하며, 노란 점액질의 구토의 빈도가 증가합니다.
            우유 - 강아지와 고양이는 유당을 분해할 수 없어 설사를 일으키며 이는 2차 감염원이 되기도 합니다.
            생선 - 생선가시는 소화되지않아 장기에 상처나 염증을 유발하며, 기름이 다량 함유된 통조림은 설사와
            구토를 일으켜 소화장애를 유발합니다.
            닭뼈 - 소화될 때 뼈가 날카롭게 분해되어 소화기관에 상처를 내어 염증이나, 혈변, 심각한 경우 사망에 
            이를 수 있습니다.
            마른 오징어 - 개들은 씹지않고 바로 소화기관으로 넘기므로, 입과 식도, 위까지 손상될 수 있습니다.
            채소류 과잉섭취 - 다량의 채소 섭취는 과잉공급으로 체외로 배출되므로 적당량을 주는 것이 좋습니다.
        `
    },
    {
        consult_id: 1,
        consult_content: `이물질 섭취 및 소화계 질환-
        반려견은 종종 이물질을 먹거나 소화계 질병에 걸릴 수 있습니다. 이는 구토, 설사 및 소화불량과 같은 증상으로 나타날 수 있습니다.
         피부질환-
        피부 알레르기, 진드기, 곰팡이 등으로 인한 피부 문제는 흔히 발생합니다. 가령 가려움증, 발진, 털 떨어짐 등이 관찰될 수 있습니다.
         관절질환-
        관절염이나 디스크 질환과 같은 관절 문제는 노화에 따라 발생할 수 있습니다. 이는 보행에 영향을 미칠 수 있으며, 통증과 불편을 유발할 수 있습니다.
         심장 질환-
        심장 기능 저하나 심부전과 같은 심장 질환은 나이가 들면서 발생할 수 있습니다. 호흡곤란, 기침, 허전감 등의 증상이 나타날 수 있습니다.
         감염성 질환-
        바이러스나 박테리아에 의한 감염은 발생할 수 있으며, 이로 인한 열, 기침, 토 등의 증상이 나타날 수 있습니다.
        
        이러한 질병을 예방하고 관리하기 위해서는 정기적인 건강 검진, 규칙적인 예방접종, 올바른 식이 및 적절한 운동이 중요합니다. 주인의 주의와 관심을 통해 동물의 행동 변화나 이상 징후를 빠르게 감지하여 즉각적인 치료가 이루어지도록 하는 것이 중요합니다.
        `
    },
    {
        consult_id: 2,
        consult_content: `
        반려동물의 응급처치는 중요한 기술이며, 다음은 일반적인 응급 상황에 대한 간략한 지침입니다. 그러나 응급 상황에 직면했을 때는 즉시 동물 병원에 전화하고 전문가의 지시를 따르는 것이 가장 중요합니다.
        호흡곤란-
        동물의 입, 코, 목을 확인하여 이물질이나 특이사항이 없는지 확인합니다.
        만약 호흡이 멈추면, 기본 심폐소생술을 시도합니다. 가슴 압박과 인공 호흡을 번갈아 가며 실시합니다.
        출혈-
        출혈 부위에 깨끗한 천이나 거즈를 사용하여 압박하고 드레싱을 감싸서 피의 흐름을 제어합니다.
        골절 또는 관절 탈구-
        부상 부위를 움직이지 않도록 고정합니다. 필요하다면 부상 부위에 냉동 꾸러미나 얼음을 묻어 부종을 줄입니다.
        응급 상황 시 이동 및 안정화-
        동물을 안전하게 옮기고, 가급적이면 다른 동물이나 사람들로부터 격리시켜 안정된 상태로 유지합니다.
        
        응급처치는 특수한 상황에 따라 다를 수 있으며, 상황에 따라 동물의 상태를 신속하게 판단하고 적절한 조치를 취하는 것이 중요합니다. 가능한한 빠른 시간 내에 동물 병원에 전화하여 전문가의 도움을 받도록 노력해야 합니다.
        `
    },
    {
        consult_id: 3,
        consult_content: `
        예방접종을 한 후에는 열, 침울, 통증, 종창 등의 접종반응이 나타날 수 있지만, 대부분의 경우 하루 정도 조용한 곳에 두면 자연히 회복됩니다. 
        *만약, 증상이 심할 경우나, 이상증상이 나타날 경우에는 담당 수의사에게 문의하셔야 합니다.
        
        강아지
        
        -혼합예방주사(DHPPL)
        
        *홍역 (Canine Distemper), 간염 (Hepatitis), 파보장염 (Parvo virus), 파라인플루엔자 (Para influenza) 예방을 위한 통합예방주사 입니다.
        
        기초접종: 생후6~8주에 1차 접종
        추가접종: 1차 접종 후 2~4주 간격으로 2~4회
        보강접종: 추가접종 후 매년 1회 주사
        
        -코로나 바이러스성 장염(Coronavirus)
        
        기초접종: 생후68주에 1차 접종
        추가접종: 1차 접종 후 2~4주 간격으로 1~2회
        보강접종: 추가접종 후 매년 1회 주사
        
        -기관염/기관지염 (Kennel Cough)
        
        기초접종: 생후 6~8주에 1차 접종
        추가접종: 1차 접종 후 2~4주 간격으로 1~2회
        보강접종: 추가접종 후 매년 1회 주사
        
        -광견병
        
        기초접종: 생후 3개월 이상 1회 접종
        보강접종: 6개월 간격으로 주사
        
        
        고양이
        
        -혼합예방주사 (CVRP)
        
        기초접종: 생후 6~8주에 1차 접종
        추가접종: 1차 접종 후 2~4주 간격으로 2~3회
        보강접종: 추가접종 후 매년 1회 주사
         
        *고양이 범백혈구 감소증 (Feline panleukopenia), 전염성 비기관지염 (infectious bronchitis), 클라미디아 (Chlamydia), 칼라시 바이러스 (Calici virus) 예방을 위한 혼합예방주사 입니다.
        
        -고양이 백혈병 (feline Leukemia)
        
        기초접종: 생후 9~11주에 1차 접종
        추가접종: 1차 접종 후 2~4주 간격으로 1~2회
        보강접종: 추가접종 후 매년 1회 주사
        
        -전염성 복막염 (FIP)
        
        추가접종: 1차 접종 후 2~3주 간격으로 1회
        보강접종: 추가접종 후 매년 1회 주사
        
        -광견병
        기초접종: 생후 3개월 이상 1회 접종
        보강접종: 1개월 간격으로 주사
        
        토끼
        
        -3개월령 이하
        기초접종: 구입 후 5일 뒤
        추가접종: 1차 접종 후 1개월 뒤
        보강접종: 매년 9월 중순까지 접종
        
        -3개월령 이상
        기초접종: 건강상태 양호할 때
        보강접종: 매년 9월 중순까지 접종
        
        -바이러스성 출혈병
        기초접종: 생후 3개월 이상 1회 접종
        보강접종: 매년 1회 접종
        `
    },
    {
        consult_id: 4,
        consult_content: `
        훈련- 

        훈육/훈련시기:
        
        훈육은 생후 2~3개월부터 시작하게 되며, 간단하고 쉽게 끝낼 수 있는 배설요령, 식사요령정도로 훈련을 시작하면 됩니다.
        
        생후 7~8개월부턴 신체의 성장에 의해 행동범위가 넓어지므로 본격적인 훈련을 준비해야 합니다.
        훈련은 훈육보다 더 많은 시간과 노력이 필요하며, 보호자와 반려견 모두 더 많은 체력과 힘이 요구됩니다.
        
        사회화-
        
        생후 3주 정도에서 13주정도 사이에 가능한 많은 사람과 접촉시키고, 여러 소리나 상황을 경험 시키면 환경에 잘 적응하는 반려견으로 성장시킵니다.
        강아지와 함께 시간을 보내고, 같이 놀아주고, 말도 걸고, 쓰다듬어 주는등 정을 주며 키워야 합니다.
        강아지에게 해도 되는것과 하지 말아야 할 것을 꾸준히 가르쳐 주어야 합니다. 
        `
    },
    {
        consult_id: 5,
        consult_content: `
        <임신과 출산>
        * 발정과 교배
        - 발정은 품종, 개체, 발육 정도에 따라 차이가 있으나 조숙한 소형견은 5-7개월, 중형견은 8-10개월, 대형견은 1년이상 지나야 시작됩니다.
        - 발정증상은 외음부가 팽창되고 혈액이 섞인 액체가 배출되며, 개가 안정적이지 못하고 외음부를 자주 핥습니다.
        - 발정주기는 나포의 발육, 성숙, 배란, 황체형성 등에 따라 4기로 구분합니다.
        
        * 임신기간
        - 개의 임신기간은 평군 9주(63일)로 이 기간 중 아래쪽 좆에서 연한 초유가 분비되며 점점 짙어집니다. 출산이 가까워지며 불안정한 상태가 되고 교배일을 정확히 알면 그 교배일로붙터 분만 예정일을 알 수 있습니다.
        새끼의 발육 상태에 따라 2-3일의 편차가 있습니다.
        
        * 임신 중인 반려견 관리
        - 임신중인 개에게는 적당한 영양 섭취와 적당한 운동 및 산책이 중요합니다. 너무 무리하게 운동을 시키거나 많은 양의 사료를 지급해서는 안되며 이는 난산이나 유산이 원인이 되기도 합니다. 따라서 적당한 영향섭취를 시켜 강아지가 비대해지지 않도록 해야합니다.
        - 임시중인 개는 평소바다 많은 양의 에너지가 필요하므로 영양을 충분히 섭취할 수 있도록 급여하면 되고 사료의 양의 평소의 30%까지 늘려 급여하면 됩니다.
        - 적당한 운동도 필수적이나 계단 오르내리기, 문턱 넘어가가기 등 복부의 자극이 될 만한 행동은 금해야 합니다.
        
        * 출산견의 건강상태
        - 어미 개의 체온은 분만 24시간 전에 일시적으로 37도 정도로 떨어지나 분만 후에는 정상 체온으로 돌아옵니다. 맥박은 평소보다 20 이상을 넘지만, 분만 후에는 조금 떨어지고 수유하는 초기에는 높게 유지합니다.
        분만 후에는 자궁 등에 상처가 있어 2일 후에 열이 나는 경우가 있으며 이 때 체온이 40도까지 올라가나 일주일쯤 지나면 정상으로 돌아옵니다.
        `
    }
];

const Consult = () => {
    const [selectedNum, setSelectedNum] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const handleNumClick = (num) => {
        setSelectedNum(num);
    }
    useEffect(() => {
        // selectedNum가 변경될 때마다(버튼 다른거 클릭할때마다) chatHistory를 업데이트
        setChatHistory((it) => [
            ...it,
            {
                id: selectedNum,
                content: getContent(selectedNum),
            },
        ]);
    }, [selectedNum]);

    const getContent = (selectedNum) => {
        const isSelected = consultDummy.find(
            item => item.consult_id === selectedNum
        );
        return isSelected
            ? isSelected.consult_content
            : '무엇을 도와드릴까요?';
    }

    return (
        <div className="Consult">
            <h2 className='consult_title'>상담하기</h2>
            <Chatting chatHistory={chatHistory} />
            <ConsultBtns handleNumClick={handleNumClick} />
            <BottomMenu />
        </div>
    )
}

export default Consult;