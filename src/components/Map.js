import React from "react";
import styled from "styled-components";
import PText from "./PText";
import MapImg from "../assets/images/map.png";

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background-color: var(--deep-dark);
    max-width: 300px;
    width: 100%;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: none;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className='container'>
        <div className='map__card'>
          <h3 className='map__card__heading'>Here is me</h3>
          <PText>Nixa, MO - USA</PText>
          <a
            className='map__card__link'
            href='https://www.google.com/maps/place/Nixa,+MO+65714/@37.046449,-93.3125731,14z/data=!3m1!4b1!4m5!3m4!1s0x87cf6eed13ac8447:0xacf1a5ed53154eb7!8m2!3d37.0433863!4d-93.294353'
            target='_blank'
            rel='noreferrer'
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
