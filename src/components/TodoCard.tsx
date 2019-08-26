import React from 'react';
import { Card, Typography, Icon } from 'antd'
import { Todo } from '../types/index.';

const { Text } = Typography;

const TodoCard: React.FC<Todo> = (props) => {
    const { title, completed } = props

    return (
        <Card
            style={{
                padding: 5,
                margin: 5
            }}
        >
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
        </Card>
    )
}

export default TodoCard