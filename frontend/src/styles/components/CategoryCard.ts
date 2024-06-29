import styled from 'styled-components'

export const Card = styled.div`
  margin: 0.5rem;
  flex: 1 1 auto;
  position: relative;

  .image {
    object-fit: cover;
    border: 2px solid black;
    transition: all 5s cubic-bezier(0.14, 0.96, 0.91, 0.6);
  }

  .info {
    position: absolute;
    top: 50%;
    left: 50%;
    background: white;
    padding: 1.5rem;
    text-align: center;
    transform: translate(-50%, -50%);
    opacity: 0.8;
    border: 1px solid black;
    cursor: pointer;
  }

  :hover .image {
    transform: scale(1.2);
  }

  :hover .info {
    opacity: 0.9;
  }
`
