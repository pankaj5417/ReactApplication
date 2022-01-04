import styled from 'styled-components'
export const Button= styled.button`
color: ${(props)=>(props.theme==="light"?"":"")};
background:${(props)=>(props.theme==="light"?"":"")};
border:1px solid black


`
export const Div=styled.div`
height:200px;
width:300px;
background:grey;
& >p{ 
color:yellow;
}
& >p:hover{
    color:red;
}
`