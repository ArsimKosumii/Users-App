import React, { useState, useEffect } from "react";
import style from "../style/style";
import { View, Text, Image, Modal, TouchableOpacity } from "react-native";
import ImageView from "react-native-image-viewing";
import axios from "axios";

export default function UserDetailsView({ route }) {
  const [user, setUser] = useState(route.params.item);
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState(user.id);
  const images = [{ uri: user.avatar }];

  const incrementId = () => {
    if (id < 12) {
      setId(id + 1);
    }
  };

  const decrementId = () => {
    if (id > 1) {
      setId(id - 1);
    }
  };

  useEffect(() => {
    try {
      axios
        .get("https://reqres.in/api/users/" + id)
        .then((response) => {
          const user = response.data.data;
          setUser(user);
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status == 403) {
              alert("Error: 403. Forbidden!");
            } else if (error.response.status == 405) {
              alert("Error: 405. Method not allowed!");
            } else if (error.response.status == 500) {
              alert("Error: 500. Internal Server Error!");
            } else {
              alert("Unexpected Error occurred!");
            }
          }
        });
    } catch (error) {
      alert(error);
    }
  }, [id]);

  return (
    <View style={style.container}>
      <View style={style.userDetailsView}>
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <Image
            source={{ uri: user.avatar }}
            style={style.userDetailsAvatar}
          />
        </TouchableOpacity>
        <Text style={style.userDetailsText}>ID: {user.id}</Text>
        <Text style={style.userDetailsText}>
          Full Name: {user.first_name + " " + user.last_name}
        </Text>
        <Text style={style.userDetailsText}> Email: {user.email}</Text>
      </View>
      <View style={style.userDetailsFooter}>
        <TouchableOpacity
          disabled={id == 1}
          onPress={() => decrementId()}
          style={[
            style.userDetailsFooterButton,
            { backgroundColor: "red" },
            id == 1 && { opacity: 0.5 },
          ]}
        >
          <Text style={style.userDetailsFooterButtonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={id == 12}
          onPress={() => incrementId()}
          style={[style.userDetailsFooterButton, id == 12 && { opacity: 0.5 }]}
        >
          <Text style={style.userDetailsFooterButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

      <ImageView
        images={images}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      />
    </View>
  );
}
