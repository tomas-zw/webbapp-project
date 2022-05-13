import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Typography, Forms, Base } from '../../styles';

export default function AuthFields({ auth, setAuth, title, submit, navigation}) {
    return (
        <View style={Forms.container}>
            <Text style={Typography.inputLabel}>E-post</Text>
            <TextInput
                style={Forms.input}
                onChangeText={(content: string) => {
                    setAuth({ ...auth, email: content })
                }}
                value={auth?.email}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <Text style={Typography.inputLabel}>Lösenord</Text>
            <TextInput
                style={Forms.input}
                onChangeText={(content: string) => {
                    setAuth({ ...auth, password: content })
                }}
                value={auth?.password}
                secureTextEntry={true}
            />
            <View style={Base.alignCenter}>
                <TouchableOpacity
                    style={Base.buttonContainer}
                    onPress={() => {
                        submit();
                    }}
                    >
                    <Text style={Typography.buttonText}>{title}</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};
