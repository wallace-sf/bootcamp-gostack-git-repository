import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      height: 36px;
      width: 36px;
      border: 2px solid #eee;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          margin-left: 10px;
          padding: 3px 4px;
          background-color: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const IssueFilter = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  button {
    padding: 10px 15px;
    background-color: #b8b7b7;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 4px;

    & + button {
      margin-left: 10px;
    }

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  button {
    padding: 10px 15px;
    background-color: #7159c1;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 4px;

    svg {
      font-size: 18px;
    }

    &:disabled {
      opacity: 0.6;
    }

    & + button {
      margin-left: 10px;
    }
  }
`;
