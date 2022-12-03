import styled from "styled-components";

type ContainerProps = {
    done: boolean
}

export const Container = styled.div(({done}: ContainerProps)=>(
`
    display: flex;
    background-color: #96958a;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-between;

    div{
        display: flex;
        align-items: center;
    }

    label{
        color: #dee7e7;
        text-decoration: ${done ? 'line-through' : 'initial'};
        font-size: 18px;
        font-weight: 400
    }

    input{
        width:25px;
        height:25px;
        margin-right: 5px;
    }
` ))