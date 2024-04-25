import styled from 'styled-components'

export const ContainerGeral = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow-y: hidden;
    overflow-x: hidden;
`;

export const Top = styled.div`
   Background-color: #3D3B40;
   height: 175px;
   width: 100%;
   position: relative;
   text-align: center;
   color: #fff;
`;

export const ContainerBox = styled.div`
Background-color: transparent;
display: flex;
width: 100%;
position: absolute;
top: 80px;
justify-content: center;
gap: 15px;
`;

export const ContainerBox2 = styled.div`
Background-color: transparent;
display: flex;
width: 100%;
justify-content: center;
gap: 15px;
margin: 75px 0 25px 0;
`;

export const BoxNumber = styled.div`
flex-direction: column;
display: flex;
Background-color: #fff;
width: 230px;
height: 150px;
border-radius: 10px;
box-shadow: 1px 3px 10px #888888;
text-align: center;
justify-content: center;
`;

export const Numbers = styled.div`
    color: orange;
    font-size: 30px;
    Font-weigh: bold;
    margin-top: 12px;
`;

export const graphic = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid grey;
    padding: 12px;
`;

// export const Top = styled.div``;