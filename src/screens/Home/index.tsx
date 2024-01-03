import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export default function Home() {
    function handleParticipantAdd() {
        console.log("Você clicou no botão de adicionar");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventDate}>Terça, 2 de janeiro de 2024.</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome do participante"
                placeholderTextColor="#6B6B6B"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleParticipantAdd}
            >
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}
