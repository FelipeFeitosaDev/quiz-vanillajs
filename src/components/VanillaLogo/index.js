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
            <img src="https://raw.githubusercontent.com/FelipeFeitosaDev/vanillajs-quiz/32d57f8cd407ae3368e8166927b93741da6aa283/quiz-vanillaJs_layout2_vector.svg" alt="logo Vanilla" />    
        </VanillaStyle>
    )
}