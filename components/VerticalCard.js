import { View, Text, Image } from "react-native";

const VerticalCard = ({ dataNama }) => {
  const imageUrl = dataNama.images.jpg.image_url || "https://avatars.githubusercontent.com/u/116475964?v=4";
  const title = dataNama.title || "Anime Title";
  const score = dataNama.score || "N/A";

  return (
    <View
      style={{
        display: "flex",
        paddingVertical: 4,
        borderRadius: 8,
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <View
        style={{
          borderWidth: 0,
          borderRadius: 12,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "left",
          borderColor: "lightgray",
          width: 300,
        }}
      >
        <Image
          source={{ uri: imageUrl }}
          style={{
            width: 85,
            height: 120,
            borderWidth: 0,
            borderRadius: 12,
            borderColor: "lightblue",
          }}
        />
        <View
          style={{
            flexDirection: "column",
            marginLeft: 7,
            justifyContent:"flex-start",
            maxWidth: 180,
          }}
        >
          <Text
            style={{
              marginTop: 5,
              fontSize: 15,
              fontWeight: "600",
              marginLeft: 5,
              alignItems: "flex-end",
              paddingVertical:5,
              color: "white",
            }}
          >
            {dataNama.title}
          </Text>
          <Text
            style={{
              fontSize: 11,
              fontWeight: "500",
              color: "silver",
              marginLeft: 5,
              
            }}
          >
            Score: {dataNama.score}
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "400",
              color: "silver",
              marginLeft: 5,
              
            }}
          >
            {dataNama.aired.string}
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "400",
              color: "silver",
              marginLeft: 5,
              
            }}
          >
            members: {dataNama.members}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default VerticalCard;
