import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Text, Image } from "react-native";
import style from "../style/style";

export default function User(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={style.user}
      onPress={() => navigation.push("UserDetailsView", { item: props.item })}
    >
      <Image style={style.userImage} source={{ uri: props.item.avatar }} />
      <Text>{props.item.first_name + " " + props.item.last_name}</Text>
    </TouchableOpacity>
  );
}
