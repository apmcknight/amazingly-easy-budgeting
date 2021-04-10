import React, { Component } from 'react';
import { Offline } from 'react-detect-offline';
import { Pane, Alert } from 'evergreen-ui';

class OfflineAlert extends Component {
    render() {
        const styles = {
            position: "absolute",
            bottom: "50px",
            marginLeft: "20px",
            marginRight: "20px"
        }

        return (
            <div>
            <Offline>
                <Pane>
                    <Alert
                    intent="danger"
                    title="It looks like You're Offline"
                    style={styles}
                    >
                    Data may not be saved, and the app may not work as intended!
                    </Alert>
                </Pane>
            </Offline>
            </div>
        );
    }
}

export default OfflineAlert;