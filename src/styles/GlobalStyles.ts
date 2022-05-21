import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #ffffff;

    --gray-100: #f7f7f7;
    --gray-200: #e5e5e5;
    --gray-300: #dfdfdf;
    --gray-400: #b8b8b8;
    --gray-500: #626262;

    --orange-500: #f39200;

    --header-height: 7rem;
    --context: 1300px;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  .swiper {
    position: relative;
    width: 100%;
  }

  .swiper-slide {
    background: #fff;
  
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;

    border-radius: 2rem;
  }

  .swiper-pagination-bullet {
    width: 0.5rem;
    height: 0.5rem;
  }

  .swiper-pagination {
  .swiper-pagination-bullet {
    background: #fff;
  }

  .swiper-pagination-bullet-active {
    background-color: var(--orange-500);
  }
}
`;