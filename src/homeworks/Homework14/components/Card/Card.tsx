
import {CardContainer, Name} from './styles'
import Message from '../Message/Message';


function Card(){

    return <CardContainer isShowResult={true}>
        <Name>Lina Parts: </Name> 
        <Message/>
        </CardContainer>
}
export default Card;