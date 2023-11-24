import { Text, View } from "react-native";

const Header = ({ headerText, flexPosition }) => {
//   const flexPositionStyle = flexPosition ? flexPosition : "center";
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#000220",
        alignItems: "center",
        marginBottom: 16,
        marginTop: 32,
        height: 56,
        width: "100%",
        borderRadius: 24,
        borderWidth: 1,
        elevation: 12,
        shadowColor:"darkgray",
        borderColor: "gray",
      }}
    >
      <Text style={{ 
        marginRight: 8, 
        fontSize: 18, 
        fontWeight: "600", 
        color: "white",
        textAlign: "center",
        }}>
        {headerText}
      </Text>
    </View>
  );
};

export default Header;
