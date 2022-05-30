import styled from "styled-components";

export const Div = styled.div`
    width: 100%;
    height: 12%;
    background-color: white;
    padding: .5rem 1rem 1rem 1rem;
`

export const ResultTable = styled.table`
    background: white;
    width: 100%;
    text-align: left;
    border-spacing: 0;
    border-collapse: collapse;

    thead{
        border-bottom: 1px solid blue;
    }


    th{
        color: blue;
        font-size: 1.2rem;
        padding: .5rem;
        font-weight: lighter;
    }

    th,
    td{
        padding: .5rem;
    }

    td{
        font-size: 1.2rem;
    }
`;