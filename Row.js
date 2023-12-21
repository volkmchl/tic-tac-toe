import { View, Text, StyleSheet } from 'react-native';

import Cell from './Cell';

export default function Row({cellValues}) {
    return (
        <View style={styles.container}>
            {cellValues.map((cellValue, columnIndex) => (
                <Cell key={columnIndex} cellValue={cellValue} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8,
    }
})