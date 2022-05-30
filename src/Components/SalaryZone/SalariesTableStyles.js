import styled from "styled-components"


export const Div = styled.div`
    width: 45%;
    background-color: white;
    padding: .5rem 1rem 1rem 1rem;
`

export const Table = styled.table`
    width: 100%;
    text-align: left;
    border-spacing: 0;
    border-collapse: collapse;
    font-weight: lighter;

    thead{
        border-bottom: 1px solid blue;
    }


    th{
        color: blue;
        font-size: 1.2rem;
        padding: .5rem;
        font-weight: lighter;
        text-align: left;
    }

    th,
    td{
        padding: .5rem;

        input{
            width: 80%;
            outline: none;
            border: none;
            border-bottom: 1px solid blue;
            font-size: 1.2rem;
            padding: .4rem;
        }
    }

    td{
        font-size: 1.2rem;
        input[type=number]{
            font-weight: lighter;
        }
    }

`