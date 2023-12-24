import styled from 'styled-components';

const FilterContainer = styled.div`
    padding-left: 16px;
    width: 320px;
    margin-bottom: 20px;
    p {
        font-size: 20px;
    }
    input {
        width: 100%;
        margin-bottom: 8px;
        border-radius: 4px;
        border: 1px solid #6f6ffa;
        outline: none;
        font-size: 16px;
        
    }
`;

const List = styled.ul`
position: relative;
    display: table-cell;
    font-size: 24px;
    text-transform: capitalize;
    list-style: none;
    span::before {
        content: '';
        margin-right: 8px;
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #6f6ffa;

    }
    li:not(:last-child) {
        padding-bottom: 8px; 
    }
    span {
        vertical-align: middle;
        padding-right: 12px;
    } 
    button {
        padding: 4px 8px;
        width: 120px;
        background-color: #6f6ffa;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        color: white;
        font-family: inherit;
        font-size: medium;
        letter-spacing: 1px;
        box-shadow: 0 15px 15px rgba(124, 97, 245, 0.2);
        &:hover {
            background-color: #0404ac;
            letter-spacing: 2px;
            scale: 1.01;
        }
    } 
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-transform: capitalize;
    gap: 4px;
    input {
        width: 100%;
        margin-bottom: 8px;
        border-radius: 4px;
        border: 1px solid #6f6ffa;
        outline: none;
        font-size: 16px;
    }
`;

const Container = styled.div`
    margin: 20px;
`;

const AddButton = styled.button`
    padding: 4px 8px;
    width: 160px;
    background-color: #6f6ffa;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: white;
    font-family: inherit;
    font-size: medium;
    letter-spacing: 1px;
    box-shadow: 0 15px 15px rgba(124, 97, 245, 0.2);
    &:hover {
        background-color: #0404ac;
        letter-spacing: 2px;
        scale: 1.01;
    }
`;

const FormStyled = styled.form`
  width: 320px;
  text-align: center;
`; 

const Title = styled.h1`
  font-size: 56px;
  padding-left: 16px;
`;

const TitleSection = styled.h2`
  font-size: 34px;
  padding-left: 16px;
`;

export {FilterContainer, List, InputContainer, Container, AddButton, FormStyled, Title, TitleSection}