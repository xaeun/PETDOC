import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { HospitalList } from "../App";
import Button from '../component/Button';
import BookMarkStar from "../component/BookMarkStar";
import '../css/HospitalInfo.css';


const HospitalInfo = () => {
    const hospitalList = useContext(HospitalList);
    const navigate = useNavigate();
    const { hos_id } = useParams();
    const [originData, setOriginData] = useState({});

    useEffect(() => {
        if (hospitalList.length >= 1) {
            const targetHospital = hospitalList.find((it) =>
                parseInt(it.hos_id) === parseInt(hos_id)
            );
            if (targetHospital) {
                setOriginData(targetHospital);
            }
        }
    }, [hos_id, originData]);


    return (
        <div className="HospitalInfo">
            <div className="h_info">
                <Button
                    btnName={'backbtn'}
                    btnText={<span className='material-icons-outlined'>arrow_back</span>}
                    btnClick={() => { navigate(-1) }}
                />
                <div className="h_photo"><img src={originData.hos_photo} /></div>
            </div>
            <div className="h_head">
                <div className="h_head1">
                    <h3>{originData.hos_name}</h3>
                    <BookMarkStar id={originData.hos_id} book={originData.bookmark}/>
                </div>
                <div className="h_head2">
                    <div>
                        <p>{originData.address}</p>
                        <p>{(originData.call) === '정보 없음' ? '' : (originData.call)}</p>
                    </div>
                    <div>
                        <span className="material-symbols-outlined ">pin_drop</span>
                        <Button
                            btnName={'showmap'}
                            btnText={'지도보기'}
                            btnClick={()=>navigate('/hospital')}
                        />
                    </div>
                </div>
            </div>
            <div className="h_time">
                <h3>진료시간</h3>
                <div>
                    <p> • {`${originData.open_hours?.open_day && originData.open_hours.open_day.join(', ')}`} {originData.open_hours?.open_time} ~ {originData.open_hours?.close_time}</p>
                    <p> • 점심시간 {originData.open_hours?.lunch_start}  {(originData.open_hours?.lunch_end) === '' ? '' : `~ ${originData.open_hours?.lunch_end}`}</p>
                </div>
            </div>
            <div className="h_animal">
                <h3>진료동물</h3>
                <p>{originData.poss_animals && originData.poss_animals.join(', ')}</p>
            </div>
            <div className="h_service">
                <h3>병원 시설 및 서비스</h3>
                <p>{originData.service && originData.service.map((it) => (
                    <span key={it}>{it}</span>
                ))}</p>
            </div>
            <div className="h_reserve">
                <Button
                    btnText={'전화하기'}
                    btnClick={() => { navigate(`/reservation`) }}
                />
                <Button
                    btnText={'예약하기'}
                    btnClick={() => { navigate(`/reservation/${originData.hos_id}`) }}
                />
            </div>


        </div>
    );
};

export default HospitalInfo;