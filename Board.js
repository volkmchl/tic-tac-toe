import { View, Text, StyleSheet } from 'react-native';

import Row from './Row';

export default function Board(props) {
    return (
        <View style={styles.container}>
            <Row/>
            {
                props.board.map((row) => 
                     <Row row={row} />
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        alignItems: "center",
        justifyContent: "center",
    }
})