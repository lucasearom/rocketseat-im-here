import React, { useState } from "react";
import {
    Alert,
    FlatList,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState("");

    function handleParticipantAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert(
                "Participante já existente!",
                "Um participante com esse nome já está na lista, adicione outro!"
            );
        }

        setParticipants((prevState) => [...prevState, participantName]);
        setParticipantName("");
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: "Sim",
                onPress: () =>
                    setParticipants((prevState) =>
                        prevState.filter((participant) => participant !== name)
                    ),
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
                    onChangeText={(e) => setParticipantName(e)}
                    value={participantName}
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
                ListEmptyComponent={() => (
                    <Image
                        source={require("../../../assets/empty.png")}
                        style={styles.imageEmpty}
                    />
                )}
            />
        </View>
    );
}
