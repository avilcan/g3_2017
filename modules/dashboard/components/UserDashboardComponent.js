import React, {PropTypes} from 'react';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';
import SidebarComponent from '../../../components/SidebarComponent';

const UserDashboardComponent = (props) => {
    return (
    <Split>
        <SidebarComponent
            onAddPTO = {() => {}}
        />
        <Box>
            <AnnotatedMeter
                legend
                type='circle'
                max={30}
                units="Days"
                series={[{"label": "Off", "value": 20, "colorIndex": "graph-1"}, {"label": "Remaining", "value": 10, "colorIndex": "graph-2"}]} />
        </Box>
    </Split>
    )
}

export default UserDashboardComponent;