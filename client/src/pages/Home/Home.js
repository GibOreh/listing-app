import { Container} from 'react-bootstrap';

import EditorChoice from './EditorChoice/EditorChoice'; 
import GameUpdate from './GameUpdate/GameUpdate';
import AppUpdate from './AppUpdate/AppUpdate';
import Search from '../Search/Search';


function Home() {
    return (
        <Container >
            <Search />
            <EditorChoice />
            <GameUpdate /> 
            <AppUpdate /> 
        </Container>
    );
}

export default Home;
