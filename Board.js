import { View, Text, StyleSheet } from 'react-native';

import Row from './Row';

export default function Board({board}) {
    return (
        <View style={styles.container}>
            {board.map((row, rowIndex) => (
                <Row key={rowIndex} cellValues={row} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        gap: 8,
        padding: 8,
        borderRadius: 8,
    },
});