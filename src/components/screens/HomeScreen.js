import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { Children, useEffect, useState } from 'react'

const HomeScreen = () => {

  const [textNumbers, setTextNumbers] = useState([])
  const [userShowInput, setUserShowInput] = useState([])


  let addToInput = ({number, oprator}) => {
    console.log(number)
   
    if(oprator == "clear") {
      setTextNumbers([])
      setUserShowInput([])
    } else {
      if(oprator == "back") {
        userShowInput.splice(-1)
        textNumbers.splice(-1)
        setTextNumbers(oldNumbers => [...oldNumbers] )
        setUserShowInput(oldNumbers => [...oldNumbers] )
      } else {
        if(number) {
          setUserShowInput(oldNumbers => [...oldNumbers, number])
          setTextNumbers(oldNumbers => [...oldNumbers, number])
        } else if (oprator != "=") {
          if(oprator == "/") {
            setUserShowInput(oldNumbers => [...oldNumbers, `${"÷"}`])

          } else if(oprator == "*") {
            setUserShowInput(oldNumbers => [...oldNumbers, `${"×"}`])
          } else {
            setUserShowInput(oldNumbers => [...oldNumbers, `${oprator}`])

          }
          setTextNumbers(oldNumbers => [...oldNumbers, `${oprator}`])
        } else {
          resultFunction()

        }
        
      }
    }
  }

  let resultFunction = () => {
    let result = textNumbers.join("")
    result = eval(result)
    setTextNumbers([result])
    setUserShowInput([result])
    
  }



  return (
    <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: "#9DB2BF", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, justifyContent: 'center'}}>
            <TextInput value={userShowInput.join("")} onChangeText={setUserShowInput} showSoftInputOnFocus={false} keyboardType="numeric" style={{textAlign: 'right', fontSize: 60}} />
        </View>
        <View style={{flex: 3, justifyContent: 'center', backgroundColor: "#DDE6ED"}}>
            <View style={styles.rowStyles}>
                <TouchableOpacity onPress={() => addToInput({oprator: "clear"})} style={styles.meterialButtonStyle}>
                    <Text style={styles.meterialTextStyle}>AC</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={true} onPress={() => addToInput({oprator:"( )"})} style={styles.meterialButtonStyle}>
                    <Text style={styles.meterialTextStyle}>{'( )'}</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={true} onPress={() => addToInput("%")} style={styles.meterialButtonStyle}>
                  <Image style={styles.iconsStyles} source={require("../../assets/icons/percent.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => addToInput({oprator:"/"})} style={styles.meterialButtonStyle}>
                  <Image style={styles.iconsStyles} source={require("../../assets/icons/divide.png")} />
                </TouchableOpacity>
            </View>
            <View style={styles.rowStyles}>
                <TouchableOpacity onPress={() => addToInput({number:7})} style={styles.meterialButtonStyle}>
                    <Text style={styles.meterialTextStyle}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => addToInput({number:8})} style={styles.meterialButtonStyle}>
                    <Text style={styles.meterialTextStyle}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => addToInput({number:9})} style={styles.meterialButtonStyle}>
                  <Text style={styles.meterialTextStyle}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => addToInput({oprator:"*"})} style={styles.meterialButtonStyle}>
                  <Image style={styles.iconsStyles} source={require("../../assets/icons/close.png")} />
                </TouchableOpacity>
            </View>
            <View style={styles.rowStyles}>
                <TouchableOpacity onPress={() => addToInput({number:4})} style={styles.meterialButtonStyle}>
                    <Text style={styles.meterialTextStyle}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => addToInput({number:5})} style={styles.meterialButtonStyle}>
                    <Text style={styles.meterialTextStyle}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => addToInput({number:6})} style={styles.meterialButtonStyle}>
                  <Text style={styles.meterialTextStyle}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => addToInput({oprator:"-"})} style={styles.meterialButtonStyle}>
                  <Image style={styles.iconsStyles} source={require("../../assets/icons/minus.png")} />
                </TouchableOpacity>
            </View>
            <View style={styles.rowStyles}>
                <TouchableOpacity onPress={() => addToInput({number:1})} style={styles.meterialButtonStyle}>
                    <Text style={styles.meterialTextStyle}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => addToInput({number:2})} style={styles.meterialButtonStyle}>
                    <Text style={styles.meterialTextStyle}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => addToInput({number:3})} style={styles.meterialButtonStyle}>
                  <Text style={styles.meterialTextStyle}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => addToInput({oprator:"+"})} style={styles.meterialButtonStyle}>
                  <Image style={styles.iconsStyles} source={require("../../assets/icons/plus.png")} />
                </TouchableOpacity>
            </View>

            <View style={styles.rowStyles}>
                <TouchableOpacity onPress={() => addToInput({number: "0"})} style={styles.meterialButtonStyle}>
                    <Text style={styles.meterialTextStyle}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={true} onPress={() => addToInput({oprator:"."})} style={styles.meterialButtonStyle}>
                    <Text style={styles.meterialTextStyle}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => addToInput({oprator:"back"})} style={styles.meterialButtonStyle}>
                  <Image style={styles.iconsStyles} source={require("../../assets/icons/previous.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => addToInput({oprator:"="})} style={styles.meterialButtonStyle}>
                  <Image style={styles.iconsStyles} source={require("../../assets/icons/equal.png")} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  iconsStyles: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },

  rowStyles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10
  },

  meterialTextStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "black",
    textAlign: 'center'
  },

  meterialButtonStyle: {
    padding: 20,
    backgroundColor: "#526D82",
    borderRadius: 10,
    minWidth: 80,
    minHeight: 80,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default HomeScreen