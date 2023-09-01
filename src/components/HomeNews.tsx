import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import image from "../../assets/image.png";

const HomeNews = () => {
  return (
    <View>
      <ScrollView horizontal>
        <Image
          source={image}
          style={{ height: 115, margin: 8, marginLeft: 13, borderRadius: 8 }}
        />
        <Image
          source={image}
          style={{ height: 115, margin: 8, borderRadius: 8 }}
        />
      </ScrollView>
    </View>
  );
};

export default HomeNews;
