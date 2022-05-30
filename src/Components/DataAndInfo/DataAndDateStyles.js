import styled from "styled-components";
export const DivData = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    padding: 2rem;
    justify-content: space-between;
    background: white;
    h2{
        font-weight: lighter;
        color: blue;
        margin-top: 0;
    }

    .left {
        width: 50%;
    }
    .right {
        width: 45%;

        
    }
    .right, .left{
        .radios{
            width: 85%;
            display: flex;
            justify-content: start;
        }

        .radio{
            display: flex;
            flex-direction: column;
            justify-content: left;
            align-items: center;
            margin-right: 4rem;

            input[type=radio]{
                width: 17px;
                height: 17px;
            }
        }
    }

    label{
        font-size: 1.2rem;
        text-align: center;
        color: black;
        font-weight: lighter;
    }

    input{
        width: 100%;
        outline: none;
        border: none;
        border-bottom: 1px solid blue;
        font-size: 1.2rem;
        padding: .4rem;
    }
    
`
