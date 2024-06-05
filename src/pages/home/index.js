import styles from './styles';
import { SafeAreaView, View,Text, Pressable} from 'react-native';


export default function App({navigation}){
    return (
            <SafeAreaView style={styles.container}>
                

                <View style={styles.box1}>
                    <View style={styles.boxIconsText}>
                        <View>
                            <Text>Icon</Text>
                        </View>
                        <View style={styles.boxIcons}>
                            <Text>Icon</Text>
                            <Text>Icon</Text>
                            <Text>Icon</Text>
                        </View>
                    </View>
                    <View style={styles.boxBemVindo}>
                        <Text>Olá Arrombado</Text>
                    </View>
                </View>

                <View style={styles.box2}>
                <View style={styles.boxIconsNav}>
                    <Text>Conta</Text>
                    <Text>Icon</Text>
                </View>
                <View style={styles.boxMoney}>
                    <Text style={styles.titleMoney}>R$1.356,98</Text>
                </View>
                <View style={styles.boxModalIcons}>
                    <Pressable>
                         <Text>Pagar</Text>
                    </Pressable>
                    <Pressable>
                         <Text>Entrada</Text>
                    </Pressable>
                </View>
                </View>

                <View style={styles.box3}>
                    <View>
                        <Text>Historico</Text>
                    </View>
                    <View>
                        <Text>Conta</Text>
                        <Text>Icon</Text>
                    </View>
                </View>
                <View style={styles.box4}>
                    <View></View>
                </View>
             
            </SafeAreaView>
    )
}
