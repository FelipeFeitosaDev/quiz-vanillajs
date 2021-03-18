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
            <img src="https://raw.githubusercontent.com/FelipeFeitosaDev/vanillajavascript-quiz/852d1fdeb7c80231b229e8a7e418e3def912d76a/quiz-vanillaJs_layout2_vector.svg" alt="logo Vanilla" />    
        </VanillaStyle>
    )
}