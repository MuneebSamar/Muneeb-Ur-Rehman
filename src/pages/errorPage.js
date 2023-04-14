import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Wrapper>
      <section>
        <h1>404</h1>
        <h3>Sorry, this page does not found</h3>
        <Link to="/" className="btn bg-secondary">
          back home
        </Link>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
  .btn {
    padding: 0.75rem 1.5rem;
    color: var(--clr-white);
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    font-weight: 700;
    border-radius: var(--radius);
    transition: var(--transition);
    &:hover {
      background: var(--clr-primary-8);
    }
  }
`;
export default Error;
