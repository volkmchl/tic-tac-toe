import { View, Text, StyleSheet } from 'react-native';

export default function Row(props) {
    return (
        <View style={styles.container}>
            <Text>Row</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row',
        gap: 20,
    }
})