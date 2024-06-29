import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 2rem;
  margin-bottom: 2rem;

  .title {
    font-size: 2rem;
    text-transform: uppercase;
    margin: 0 1rem 1rem;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2.5rem 1rem;
    place-items: center;
  }
`
