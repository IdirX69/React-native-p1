import { View, Text, Image } from "react-native";
import React, { useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      name: "Pc Portable",
      price: "1500 $",
      note: 4.3,
      img: "https://www.01net.com/app/uploads/2023/07/HP-Chromebook-680x453.jpg",
    },
    {
      name: "Iphone 14",
      price: "1200 $",
      note: 4.7,
      img: "https://www.idboox.com/wp-content/uploads/2023/04/iPhone-14.jpg",
    },
    {
      name: "Cable usb-c",
      price: "13 $",
      note: 4.1,
      img: "https://m.media-amazon.com/images/I/51qjpHLqpgL._AC_SX679_.jpg",
    },
    {
      name: "Iphone 12",
      price: "1200 $",
      note: 4.7,
      img: "https://www.idboox.com/wp-content/uploads/2023/04/iPhone-14.jpg",
    },
  ]);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",

          margin: 5,
          flexGrow: 1,
        }}
      >
        <Text>ProductList</Text>
        <Text>See all</Text>
      </View>
      <View style={{ width: "100%", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((el, index) => (
          <View key={index} style={{ width: "50%" }}>
            <Image
              source={{
                uri: el.img,
              }}
              style={{
                height: 150,
                margin: 8,
                marginLeft: 13,
                borderRadius: 8,
                objectFit: "contain",
              }}
            />
            <View
              style={{
                margin: 8,
                marginLeft: 15,
                width: "35%",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <Text>{el.name}</Text>
              <Text>{el.price}</Text>
              <Text>{el.note}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ProductList;
