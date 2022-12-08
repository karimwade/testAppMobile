import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Registration from './screen/Registration';

  

export default function App() {
  const [username,setUsername] = useState("");
  const [passwrd,setPasswrd] = useState("");
  const[issubmit, setIsubmit] = useState(false);

  useEffect(()=> {
    const authenticate = async => {
        axios.post("http://localhost/MyTestAuth/authentification.php",
        JSON.stringify({
            username:username,
            passwrd:passwrd,
        })).then((response) =>{
            console.log(response);
            setIsubmit(false)
        }).catch((err) =>{
            console.log(err)
        });
    };
   if (issubmit) authenticate();
},[issubmit]);

const usernameHandler = (text) => {
    setUsername(text);
}

  return (
    <View style={styles.container}>
      <Text>Bienvenue dans la page de Connexion</Text>
      <TextInput placeholder="Username" style={styles.input} 
            onChangeText={usernameHandler}/>
        
      <TextInput placeholder="password" style={styles.input} secureTextEntry={true} autoCapitalize="none"
            onChangeText={(text)=>setPasswrd(text)}/>
            <View style={styles.buttonContainer}>
                <Button title="Connexion" onPress={()=>setIsubmit(true)}/>
                <Button title="Inscription" onPress={Registration}/>
            </View>
      <StatusBar style="auto" />
    </View>
  );

 
  //return <Registration/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
