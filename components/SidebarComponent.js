import React, {PropTypes} from 'react';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Pulse from 'grommet/components/icons/Pulse';
import AddIcon from 'grommet/components/icons/base/Add';

const SidebarComponent = (props) => {
    return (
       <Sidebar colorIndex='neutral-1'>
        <Header pad='medium'
            justify='between'>
            <Title>
            Menu
            </Title>
        </Header>
        <Box flex='grow'
            justify='start'>
            <Menu primary={true}>
                <Button
                    label="Add PTO"
                    onClick={props.onAddPTO}
                    size="small"
                    plain
                    icon={<AddIcon />}
                >
                </Button>
                <Anchor href='/list'>
                    My PTOs
                </Anchor>
                <Anchor href='/logout'>
                    Log out
                </Anchor>
            </Menu>
        </Box>
        <Footer pad='medium'>
    
        </Footer>
     </Sidebar>
    )
}

export default SidebarComponent;