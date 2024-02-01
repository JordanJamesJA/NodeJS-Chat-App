import{ MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '54346914-b791-4fd0-8e67-acb747b2c07b', 
        props.user.username, 
        props.user.secret
    );
    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps}/>
            < MultiChatWindow {...chatProps} style={{height: '100%'}}/>
        </div>
    )
}

export default ChatsPage
