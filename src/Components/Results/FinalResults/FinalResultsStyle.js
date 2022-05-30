import styled from "styled-components";

export const Div = styled.div`
    width: 100%;
    height: 80%;
    background-color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    text-align: center;

    div > label{
        font-size: 1.2rem;
    }

    div > input[type=checkbox]{
        cursor: pointer;
        margin-left: .5rem;
        margin-right: 2.5rem;
        width: 17px;
        height: 17px;
    }
`