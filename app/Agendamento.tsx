import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import Header from "./components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import { Calendar, DateData } from "react-native-calendars";
import { useRouter } from "expo-router";


export default function Agendamento() {
  const [currentStep, setCurrentStep] = useState(1);
  const [motivo, setMotivo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [cep, setCep] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>(' ');
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const availableTimes = ["08:00", "08:30", "09:00", "09:30", "10:00"];

  const handleNextStep = () => {
    if (currentStep < 4) { // Alterado para 4 etapas
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleConfirmAgendamento = () => {
    if (!selectedDate || !selectedTime) {
      Alert.alert(
        "Erro",
        "Por favor, selecione a data e o horário para o agendamento."
      );
      return;
    }
    Alert.alert(
      "Agendamento Confirmado",
      `Data: ${selectedDate} \nHorário: ${selectedTime}`
    );
  };

  const onDayPress = (day: DateData) => {
    setSelectedDate(day.dateString);
  };

  const router = useRouter();
  const handleBackPress = () => {
    router.push('/Home')
  };

  return (
    <View style={styles.container}>
      {/* <Header userName="Everalda" location="Jaboatão, Pernambuco - Brasil" /> */}

      <View style={styles.formContainer}>
        {/* Etapa 1 */}
        {currentStep === 1 && (
          <View style={styles.stepContainer}>
            <Text style={styles.txtAgend}>Agendamento</Text>

            <Text style={styles.txtMtv}>Motivo de agendamento *</Text>
            <View style={styles.card}>
              <Picker
                selectedValue={motivo}
                onValueChange={(itemValue) => setMotivo(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Selecione o motivo" value="" />
                <Picker.Item label="Motivo 1" value="motivo1" />
                <Picker.Item label="Motivo 2" value="motivo2" />
                <Picker.Item label="Motivo 3" value="motivo3" />
              </Picker>
            </View>

            <Text style={styles.descrit}>Descrição do caso *</Text>
            <View style={styles.card1}>
              <TextInput
                style={styles.textInput}
                placeholder="Dê uma breve descrição do seu caso"
                value={descricao}
                onChangeText={(text) => setDescricao(text)}
                multiline
                placeholderTextColor="#666666"
              />
            </View>

            <TouchableOpacity
              onPress={handleNextStep}
              style={styles.arrowButton}
            >
              <Ionicons name="arrow-forward" size={30} color="white" />
            </TouchableOpacity>
          </View>
        )}

        {/* Etapa 2 */}
        {currentStep === 2 && (
          <View style={styles.stepContainer}>
            <Text style={styles.txtAgend}>Agendamento</Text>

            <View style={styles.card2}>
              <Text
                style={{ color: "#000000", fontSize: 15, marginBottom: 15 }}
              >
                Onde você mora?
              </Text>

              <TextInput
                style={styles.textInput1}
                placeholder="Informe o CEP"
                value={cep}
                onChangeText={(text) => setCep(text)}
                keyboardType="numeric"
                placeholderTextColor="#000000"
              />
            </View>

            <Text
              style={{
                color: "#176438",
                fontSize: 18,
                marginBottom: 10,
                marginRight: 0,
              }}
            >
              Escolha o local de atendimento de sua{"\n"}preferência
            </Text>
            <View style={styles.card6}>
              <View style={styles.localContainer}>
                <Text style={styles.localText}>
                  <Text style={{ color: "#000000", fontSize: 15 }}>
                    Defensoria Pública do Estado de Pernambuco{"\n"}
                  </Text>

                  <Text style={{ color: "#808380", fontSize: 14 }}>
                    Recife - Conde da Boa Vista{"\n"}
                  </Text>

                  <Text style={{ color: "#40D2A3", fontSize: 12 }}>
                    Segunda a Sábado 8:00 às 13:00
                  </Text>
                </Text>

                <TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
                  <View
                    style={[styles.circle, isSelected && styles.circleSelected]}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.arrowContainer}>
              <TouchableOpacity
                onPress={handlePrevStep}
                style={styles.arrowButton1}
              >
                <Ionicons name="arrow-back" size={30} color="#3DEB43" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleNextStep}
                style={styles.arrowButton}
              >
                <Ionicons name="arrow-forward" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Etapa 3 */}
        {currentStep === 3 && (
          <View style={styles.stepContainer}>
            <Text style={styles.txtAgend}>Agendamento</Text>

            <View style={styles.card7}>
              <Calendar
                onDayPress={onDayPress}
                markedDates={{
                  [selectedDate]: {
                    selected: true,
                    selectedColor: "#176438",
                    selectedTextColor: "white",
                  },
                }}
                theme={{
                  selectedDayBackgroundColor: "#176438",
                  todayTextColor: "#176438",
                  arrowColor: "#176438",
                  monthTextColor: "#176438",
                  textSectionTitleColor: "#176438",
                  dayTextColor: "#000000",
                  dotColor: "#176438",
                  selectedDotColor: "#fff",
                  todayBackgroundColor: "#DCEDE4",
                  backgroundColor: "#DCEDE4",
                }}
                style={styles.calendar}
                minDate={new Date().toISOString().split("T")[0]}
              />
            </View>

            <Text
              style={{
                color: "#424242",
                fontSize: 15,
                marginRight: 170,
                marginBottom: 5,
                fontWeight: "bold",
              }}
            >
              Horários disponíveis
            </Text>

            <View style={styles.timeSlotsContainer}>
              {availableTimes.map((time, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.timeSlotButton,
                    selectedTime === time && styles.selectedTimeSlot,
                  ]}
                  onPress={() => setSelectedTime(time)}
                >
                  <Text style={styles.timeSlotText}>{time}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={[styles.confirmButton7, { marginTop: 10 }]}
              onPress={handleConfirmAgendamento}
            >
              <Text style={styles.confirmButtonText}>
                Confirmar Agendamento
              </Text>
            </TouchableOpacity>

            <View style={styles.arrowContainer}>
              <TouchableOpacity
                onPress={handlePrevStep}
                style={styles.arrowButton}
                
              >
                <Ionicons name="arrow-back" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  formContainer: {
    width: "80%",
    marginTop: 20,
  },
  stepContainer: {
    width: "100%",
    alignItems: "center",
  },
  txtAgend: {
    color: "#176438",
    fontSize: 20,
    marginRight: 188,
    fontWeight: "bold",

    marginVertical: 0,
    marginBottom: 20,
  },
  txtMtv: {
    color: "#000000",
    fontSize: 15,
    marginRight: 130,
    marginVertical: 10,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#DCEDE4",
    width: "100%",
    padding: 15,
    borderRadius: 20,
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#3DEB43",
    borderRadius: 10,
    overflow: "hidden",
  },
  picker: {
    width: "100%",
    height: 50,
    borderColor: "#3DEB43",
    borderWidth: 1,
    borderRadius: 10,
    color: "#666666",
  },
  descrit: {
    color: "#000000",
    fontSize: 15,
    marginRight: 160,
    marginVertical: 10,
    // marginBottom: 20,
  },

  textInput: {
    height: 100,
    // textAlign: "center",
    textAlignVertical: 'top',
    padding: 10,
    borderRadius: 0,
    borderColor: "transparent",
    // borderWidth: 10,
  },
  arrowButton: {
    backgroundColor: "#176438",
    width: 85,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  arrowButton1: {
    backgroundColor: "#EEEEEE",
    width: 85,
    height: 40,
    borderRadius: 10,
    borderColor: "#3DEB43",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },

  rowText: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  textButton: {
    fontSize: 16,
    color: "#000",
  },
  buttonSimNao: {
    backgroundColor: "#DCEDE4",
    width: "40%",
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  selectedButton: {
    backgroundColor: "#26A076",
  },

  arrowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "30%",
    marginTop: 30,
  },

  card1: {
    backgroundColor: "#DCEDE4",
    width: "100%",
    padding: 15,
    borderRadius: 20,
    marginBottom: 10,
    height: 75,
  },
  textInput1: {
    height: 40,
    textAlignVertical: "top",
    padding: 10,
    borderRadius: 10,
    borderColor: "#26A076",
    borderWidth: 1,
  },
  localText: {
    flex: 1,
  },

  localContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  circleSelected: {
    backgroundColor: "#176438",
  },
  card7: {
    backgroundColor: "#DCEDE4",
    width: "90%",
    padding: 1,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 10,
  },

  calendar: {
    height: 320,
    borderRadius: 10,
    backgroundColor: "#DCEDE4",
  },
  timeSlotsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 0,
  },
  timeSlotButton: {
    backgroundColor: "#e0e0e0",

    borderRadius: 50,
    marginBottom: 4,
    marginRight: 6,
    width: 60,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  timeSlotText: {
    fontSize: 15,
    color: "#000",
  },
  confirmButton: {
    backgroundColor: "#176438",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  confirmButtonText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },

  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#176438",
    marginRight: 10,
    backgroundColor: "transparent",
  },

  selectedTimeSlot: {
    backgroundColor: "#176438",
  },

  confirmButton7: {
    backgroundColor: "#176438",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    width: 182,
    height: 39,
  },

  card2: {
    backgroundColor: "#EEEEEE",
    width: 346,
    height: 114,
    padding: 15,
    borderRadius: 20,
    marginBottom: 10,
  },
  card6: {
    backgroundColor: "#EEEEEE",
    width: 295,
    height: 110,
    padding: 15,
    borderRadius: 20,
    marginBottom: 10,
  },
});
