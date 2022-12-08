import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import axios from "axios";
const Registration = () =>{
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [passwrd,setPasswrd] = useState("");

    const[issubmit, setIsubmit] = useState(false);

    useEffect(()=> {
        const authenticate = async => {
            axios.post("http://localhost/MyTestAuth/registration.php",
            JSON.stringify({
                username:username,
                email:email,
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

    
    return(
        <View style={styles.container}>
            <TextInput placeholder="Username" style={styles.input} 
            onChangeText={usernameHandler}/>
            <TextInput placeholder="Email" style={styles.input} autoCapitalize="none"
            onChangeText={(text)=>setEmail(text)}/>
            <TextInput placeholder="password" style={styles.input} secureTextEntry={true} autoCapitalize="none"
            onChangeText={(text)=>setPasswrd(text)}/>
            <View style={styles.buttonContainer}>
                <Button title="Register" onPress={()=>setIsubmit(true)}/>
            </View>
        </View>
    );
};
const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:center,
        justifyContent:center,
    },
    input:{
        paddingVertical:5,
        borderBottomColor:red,
        borderBottomWidth:1,
        width:'55%',
    },
    buttonContainer:{
        marginTop:20,

    }
})

export default Registration;