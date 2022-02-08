import styled from 'styled-components'

export const QuoteContainer = styled.div`
    position: fixed;
    text-align:center;
    bottom: 0;
    width: 600px;
    left: 50%;
    margin-left: -300px;
    @media screen and (max-width: 600px) {
        width: 350px;
        margin-left: -175px;
    }
    @media screen and (max-width: 400px) {
        width: 80%;
        text-align: center;
        margin-left: -150px;
        padding: 2px;
    }
    @media screen and (max-width:300px) {
        width: 80%;
        font-size: 10px;
        margin-left: -110px;
        padding-left: 0.5px;
        justify-content: center;
    }
`

export const Text = styled.p`
    font-size: 1.2rem;
    @media screen and (max-width:400px) {
        font-size: 1rem;
    }
    @media screen and (max-width:300px) {
        font-size: 15px;
    }

`