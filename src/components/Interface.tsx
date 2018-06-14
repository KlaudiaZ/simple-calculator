import * as React from 'react';
import Button from './Button';
import './styles/Interface.scss';

class Interface extends React.Component {
    public render () {
        return (
            <div className="interface">
                <Button>{"1"}</Button>
                <Button>{"2"}</Button>
                <Button>{"3"}</Button>
                <Button>{"4"}</Button>
                <Button>{"5"}</Button>
                <Button>{"6"}</Button>
                <Button>{"7"}</Button>
                <Button>{"8"}</Button>
                <Button>{"9"}</Button>
                <Button>{"0"}</Button>
                <Button>{"+"}</Button>
                <Button>{"-"}</Button>
                <Button>{"="}</Button>
                <Button>{"*"}</Button>
                <Button>{"/"}</Button>
            </div>
        );
    }
}

export default Interface;