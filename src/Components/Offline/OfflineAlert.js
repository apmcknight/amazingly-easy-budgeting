import React, { Component } from 'react';
import { Offline } from 'react-detect-offline';
import { Pane, Alert } from 'evergreen-ui';

class OfflineAlert extends Component {
    render() {
        return (
            <div>
            <Offline>
                <Pane>
                    <Alert
                    intent="danger"
                    title="It looks like You're Offline"
                    className="Alert"
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