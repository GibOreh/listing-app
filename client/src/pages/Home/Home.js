import { Container} from 'react-bootstrap';

import EditorChoice from './EditorChoice'; 
import GameUpdate from './GameUpdate';
import AppUpdate from './AppUpdate';
import Search from './Search';


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
