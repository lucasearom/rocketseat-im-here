import {
    Alert,
    FlatList,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {
    const participants = [
        "Lucas",
        "Arthur",
        "Belinha",
        "Taylor",
        "Lana",
        "Lorde",
        "Abel",
        "Mike",
        "Flor",
        "Minnie",
    ];
    function handleParticipantAdd() {
        if (participants.includes("Lucas")) {
            return Alert.alert(
                "Participante já existente!",
                "Um participante com esse nome já está na lista, adicione outro!"
            );
        }
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: "Sim",
                onPress: () => Alert.alert("Deletado!"),
            },
            {
                text: "Não",
                style: "cancel",
            },
        ]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventDate}>Terça, 2 de janeiro de 2024.</Text>
            <View style={styles.form}>
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

            <FlatList
                data={participants}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
