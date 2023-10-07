import React, { useState, useEffect } from 'react';
import { Form, FormControl, Button, Col } from 'react-bootstrap';
import { apiSearchGame } from '~/apis/game';
import { useNavigate } from 'react-router-dom'; 
import './styles.css';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const [searchResults, setSearchResults] = useState([]);
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false); 

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
    };

    const handleSearchClick = () => {
        if (!searchTerm) {
            return;
        }

        setDebouncedSearchTerm(searchTerm);
        navigate(`/results/${searchTerm}`);
    };

    useEffect(() => {
        const debounce = setTimeout(() => {
            setIsSearching(false); 
        }, 300);

        return () => {
            clearTimeout(debounce);
        };
    }, [debouncedSearchTerm]);

    useEffect(() => {
        if (isSearching) { 
            apiSearchGame(debouncedSearchTerm)
                .then((response) => {
                    setSearchResults(response.data.gameData);
                })
                .catch((error) => {
                    console.error('Error fetching games:', error);
                });
        } else {
            setSearchResults([]);
        }
    }, [isSearching, debouncedSearchTerm]);

    return (
        <div className="search-container mx-auto text-center">
            <Form>
                <div className="d-flex flex-column flex-md-row">
                    <FormControl
                        type="text"
                        placeholder="Input to Search ..."
                        className="mr-2 search-input p-4"
                        onChange={handleSearch}
                    />
                    <Col lg={3} className="p-0">
                        <Button variant="danger" className="search-button p-2 mt-3 mt-md-0 w-100" onClick={handleSearchClick}>
                            Search
                        </Button>
                    </Col>
                </div>
            </Form>
            
        </div>
    );
}

export default Search;
