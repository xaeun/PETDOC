import React, { useContext, useEffect, useState } from "react";
import { AnimalList } from "../App";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/PetPage.css";
import Button from "../component/Button";
import PetDetail from "../component/PetDetail";
import { AnimalListDispatch } from "../App";
import styled from "styled-components";
import moment from "moment";
import Slider from "react-slick";

const PetPage = () => {
    const navigate = useNavigate();
    const petDummy = useContext(AnimalList);
    const { onReserveRemove } = useContext(AnimalListDispatch);
    const [choosePet, setChoosePet] = useState(1);
    const [isMyPet, setIsMyPet] = useState(true);
    const location = useLocation();

    const sliderSetting = {
        arrows: false,
        infinite: false,
        slidesToShow: 3.5,
        slidesToScroll: 1,
    }

    const changePage = () => {
        setIsMyPet(!isMyPet);
    }

    const clickPet = (id) => {
        setChoosePet(id);
    }

    const filterPetDummy = choosePet === 1 ? petDummy.filter((pet) => (pet.pet_id === 1)) : petDummy.filter((pet) => (pet.pet_id === choosePet));

    const handleReserDelete = (reservationId) => {
        const shouldDelete = window.confirm('예약을 취소하시겠습니까?');
        if (shouldDelete) {
            onReserveRemove(reservationId);
        }
    };

    useEffect(() => {
        if(location.state && location.state) {
            setIsMyPet(location.state.isMyPet)
        }
    }, [location.state])

    if (isMyPet === true) {
        return (
            <div className="PetPage">
                <PetPageTop>
                    <div>
                        <Button
                            btnText={"내 반려동물"}
                            btnName={'mypet now'}
                        />
                        <Button
                            btnText={"예약내역"}
                            btnClick={() => {
                                changePage()
                            }}
                            btnName={'reser'}
                        />
                    </div>
                </PetPageTop>
                <Slider {...sliderSetting}>
                    {petDummy.map((btn) => (
                        <Button
                            btnImg={btn.pet_photo}
                            btnClick={() => clickPet(btn.pet_id)}
                            key={btn.pet_id}
                            btnName={`petImg ${btn.pet_id} ${choosePet === btn.pet_id ? 'selected' : ''}`}
                        />
                    ))}
                    <Button
                        btnName={"addPets"}
                        btnClick={() => navigate('/addpets')}
                        btnText={<span className="material-symbols-outlined">add</span>}
                    />
                </Slider>
                <div>
                    {filterPetDummy.map((pet) => (
                        <PetDetail
                            key={pet.pet_id} {...pet} choosePet={choosePet}
                        />
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div className="MyReservation">
                <PetPageTop>
                    <div>
                        <Button
                            btnText={"내 반려동물"}
                            btnClick={() => {
                                changePage()
                            }}
                            btnName={'mypet'}
                        />
                        <Button
                            btnText={"예약내역"}
                            btnName={'reser now'}
                        />
                    </div>

                </PetPageTop>
                <ul>
                    {petDummy
                        .filter((animal) => (!!animal.reservations?.length > 0))
                        .map((animal) => (
                            animal.reservations
                                .map((reservation) => (
                                    <li {...reservation} key={reservation.reserve_id} className="eachReservation">
                                        <div className="txt">
                                            <div className="reservebtns">
                                                <p>방문예정</p>
                                                <Button
                                                    btnText={'예약취소하기'}
                                                    btnClick={() => { handleReserDelete(reservation.reserve_id) }}
                                                />
                                            </div>
                                            <div className="reservedate">
                                                <p>{moment(new Date(reservation.reserve_date)).format("YYYY년 MM월 DD일")}&nbsp;</p>
                                                <p>{reservation.reserve_time}</p>
                                            </div>
                                            <p className="hos_name">{reservation.hospital_name}</p>
                                            <p className="sub">방문목적: {reservation.reserve_purpose}</p>
                                            <p className="sub">증상: {reservation.symptom == '' ? '없음' : reservation.symptom}</p>
                                        </div>
                                        <div className="photo" key={animal.pet_id}>
                                            <p className="pet_photo">
                                                <img src={animal.pet_photo} alt="reservPetPhoto" />
                                            </p>
                                            <p>{animal.pet_name}</p>
                                        </div>
                                    </li>
                                ))
                        ))
                    }
                </ul>
            </div>
        )
    }
};
export default PetPage;

const PetPageTop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    max-width: 768px;
    margin : 0 auto;
    padding: 60px 0 10px;
    background-color: #fff;
    z-index: 10;
    div{
        display: flex;
    }
    div > .btn{
        width: 50%;
        background-color: #fff;
        line-height: 45px;
        border-radius: 10px 10px 0 0;
        box-sizing: border-box;
        border-bottom: 1px solid #999;
        color: #999;
        font-size: 16px;
        font-weight: 600;
    }
    div > .mypet.now{
        border-top: 1px solid #999;
        border-right: 1px solid #999;
        border-left: 1px solid #999;
        border-bottom: 0;
        color: #333;
    }
    div > .reser.now{
        border-top: 1px solid #999;
        border-left: 1px solid #999;
        border-right: 1px solid #999;
        border-bottom: 0;
        color: #333;
    }

`