import React, { Component } from 'react';
import "./Learn.css"
import { Pane, Heading} from 'evergreen-ui';


class Learn extends Component {
    render() {
        return (
            <div className="Learn">
                <div className="Header">
                    <h1>Learning Center</h1>
                </div>
                <div className="LearnDetails">
                    <h2>Welcome!</h2>
                    <p>Welcome to the Learning Center! Here you can learn about budgeting, why it's important, how to save and more!</p>
                </div>
                <div className="CardItems">
                    <a href="/budget-item">
                        <Pane
                        elevation={2}
                        float="left"
                        width={320}
                        height={"auto"}
                        margin={25}
                        padding={30}
                        display="flex"
                        justifyContent="center"
                        alignItems="flex-start"
                        flexDirection="column"
                        >
                            <Heading size={800}>The Basics</Heading>
                            <Heading style={{marginTop: "10px"}} size={500}>Budget Item Title</Heading>
                        </Pane>
                    </a>
                    <a href="/budget-item">
                        <Pane
                        elevation={2}
                        float="left"
                        width={320}
                        height={"auto"}
                        margin={25}
                        padding={30}
                        display="flex"
                        justifyContent="center"
                        alignItems="flex-start"
                        flexDirection="column"
                        >
                            <Heading marginBottom={15} size={800}>Put Pen &amp; Paper</Heading>
                            <Heading style={{marginTop: "10px"}} size={500}>Write down your budget, and stick with it</Heading>
                        </Pane>
                    </a>
                    <a href="/budget-item">
                        <Pane
                        elevation={2}
                        float="left"
                        width={320}
                        height={"auto"}
                        margin={25}
                        padding={30}
                        display="flex"
                        justifyContent="center"
                        alignItems="flex-start"
                        flexDirection="column"
                        >
                            <Heading marginBottom={15} size={800}>Debt</Heading>
                            <Heading size={500}>Learn about Getting Out, Good Debit, and Bad Debit.</Heading>
                        </Pane>
                    </a>
                    <a href="/budget-item">
                        <Pane
                        elevation={2}
                        float="left"
                        width={320}
                        height={"auto"}
                        margin={25}
                        padding={30}
                        display="flex"
                        justifyContent="center"
                        alignItems="flex-start"
                        flexDirection="column"
                        >
                            <Heading marginBottom={15} size={800}>Savings &amp; Investing</Heading>
                            <Heading size={500}>Learn how to save and why you should Invest.</Heading>
                        </Pane>
                    </a>
                </div>
            </div>
        );
    }
}

export default Learn;