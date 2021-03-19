import styled from 'styled-components';



const VanillaStyle = styled.div`
    img {
        width: 0;
    
    }
@media screen and (max-width: 1005px) {
    img {
        width: 100%;
    
    }
}
`

export default function VanillaLogo(){
    return(
        <VanillaStyle>
            <img src="" alt="logo Vanilla" />    
        </VanillaStyle>
    )
}