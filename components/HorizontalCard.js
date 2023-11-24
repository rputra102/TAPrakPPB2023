import { View, Text, Image } from "react-native";

const HorizontalCard = ({ dataNama }) => {
  const imageUrl = dataNama.images.jpg.image_url || "https://avatars.githubusercontent.com/u/116475964?v=4";
  const title = dataNama.title || "Anime Title";
  const score = dataNama.score || "N/A";

  return (
    <View
      style={{
        
        width: 150,
        height: 220,
        marginHorizontal: 3,
        borderRadius: 8,
        flexDirection: "column",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Image
        source={{ uri: imageUrl }}
        style={{
          width: 140,
          height: 210,
          borderRadius: 15,
          
        }}
      />
      {/* <Text
        style={{
          fontSize: 14,
          color: "white",
          fontWeight: "600",
          textAlign: "center", // Mengatur tata letak teks ke tengah
         
          
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 11,
          fontWeight: "400",
          color: "lightgray",
          textAlign: "center", 
          
          
        }}
      >
        Score: {score}
      </Text> */}
    </View>
  );
};

export default HorizontalCard;
