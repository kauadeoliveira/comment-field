import styled from "styled-components";

export const Container = styled.div`
    background-color: #3936C0;
    width: 414px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    
    textarea{
        padding: 10px;
        margin: 10px 0px;
        width: 342px;
        height: 138px;
        outline: none;
        border-radius: 10px;
    }
`

export const Button = styled.button`
    background-color:${props => props.isOn ? '#000' : "gray"};
    border-radius: 10px;
    width: 324px;
    height: 64px;
    color: #fff;
    border: none;
    font-size: 17px;
    cursor: ${props => props.isOn ? 'pointer' : 'default'};
`
export const List = styled.ul`
    list-style: none;
    margin-top: 30px;
    width: 90%;
    
    li{
        margin: 10px;
        background-color: rgb(255, 255, 255, 0.14);
        color: #fff;
        border-radius: 5px;
        padding: 15px;
        box-shadow: 2px 2px 5px 0px #00000017;
    }
`