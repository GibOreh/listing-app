import React, {useState} from 'react'
import { Nav} from 'react-bootstrap';
import './style.css';
import Popular from './AppPopular/AppPopular'
import Update from './AppUpdate/AppUpdate'
import NewReleases from './AppNewReleases/AppNewReleases'
import AllCategory from './AppAllCategory/AppAllCategory'

const tabs = [
    {id: 1, name: 'Update', content: <Update/>},
    {id: 2, name: 'New', content: <NewReleases/>},
    {id: 3, name: 'Popular', content: <Popular/>},
    {id: 4, name: 'All Category', content: <AllCategory/>},
]
function AppCategory() {
    const [activedTab, setActiveTab] = useState(1)

  return (
    <div>
        <h2>App Category</h2>
        <p>
            For us, enthusiasts, the love for games never changes. And to keep that love burning, we created this
            category to store the best MOD APK, Paid APK & Original APK games, as a premise to build a “so deep”
            playground for gamers. When participating in this journey, you will discover a new game world, a new
            land that you have never known. There are countless attractive, unique, and worth-playing titles shared
            every day. And a part of them are MOD APK games that serve the growing needs of many players. Especially
            we don’t charge anything!
        </p>
        <Nav variant="tabs" className="mb-4">
            {tabs.map((tab) => (
                <Nav.Item key={tab.id}>
                    <Nav.Link
                        onClick={() => setActiveTab(tab.id)}
                        className={activedTab === tab.id ? 'active' : ''}
                    >
                        {tab.name}
                    </Nav.Link>
                </Nav.Item>
            ))}
        </Nav>
        <div>
            {tabs[activedTab - 1].content}
        </div>
    </div>
  )
}

export default AppCategory