import React, { useState, useEffect } from 'react';
import { apiGetGames } from '~/apis/game';
import Item from '../../GameItem/GameItem';
import { HiChevronRight } from 'react-icons/hi2';
import { Container, Row, Col} from 'react-bootstrap';

function EditorChoice() {
    const [editorChoice, setEditorChoice] = useState([]);
    const editorChoicesDisplay = editorChoice.slice(0, 6);

    const fetchGames = async () => {
        const response = await apiGetGames({ sort: 'updatedAt' , editorChoice: true });
        setEditorChoice(response.data.games);
    };

    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <Container>
            <h4 className="my-4">EDITORS' CHOICES <HiChevronRight /></h4>
            <Row>
                {editorChoicesDisplay.map((el) => (
                    <Col key={el.id} lg={4} xs={12}>
                        <Item itemData={el} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default EditorChoice;
