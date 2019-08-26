import React from 'react';
import { Card, Typography, Icon } from 'antd'
import { Link } from "react-router-dom";
import store from '../store';

const { Title, Text } = Typography;

type Props = {
    match: {
        params: {
            id: string
        }
    }
}

const TodoPage: React.FC<Props> = (props) => {
    const { match } = props

    const getTodo = (id: string) => {
        const shiftedId = +id - 1
        return store.getState().todos.todos[shiftedId]
    }

    const { userId, title, completed } = getTodo(match.params.id)

    return (
        <div>
            {<Card
                style={{
                    padding: 5,
                    margin: 5
                }}
            >   
                <Title>{ userId }'s todo </Title>
                <Text 
                    strong
                    style={{
                        marginRight: 10
                    }}
                >
                    { title }
                </Text>

                {completed ? 
                    <Icon 
                        type="check" 
                        style={{
                            color: 'green'
                        }}>
                    </Icon> : 
                    <Icon
                        type="close"
                        style={{
                        color: 'red'
                    }}>
                    </Icon>
                }
            </Card>}
            <Link to="/todos">Back</Link>
        </div>
    )
}

export default TodoPage