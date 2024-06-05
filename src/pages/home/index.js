import styles from './styles';
import { SafeAreaView, View,Text, Pressable} from 'react-native';
import {Feather,FontAwesome,FontAwesome5,FontAwesome6     } from '@expo/vector-icons';

export default function App({navigation}){
    return (
            <SafeAreaView style={styles.container}>
                

                <View style={styles.box1}>
                    <View style={styles.boxIconsText}>
                        <View>
                         <Feather name="user" size={24} color="black" />
                        </View>
                        <View style={styles.boxIcons}>
                        <FontAwesome name="cog" size={24} color="black" />
                        
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
                    <FontAwesome5 name="comments-dollar" size={24} color="black" />
                         
                    </Pressable>
                    <Pressable>
                    <FontAwesome6 name="circle-dollar-to-slot" size={24} color="black" />
                        
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
             
            </SafeAreaView>
    )
}
