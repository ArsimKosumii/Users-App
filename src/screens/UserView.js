import axios from "axios";
import React, { useState, useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import User from "../components/User";
import style from "../style/style";

export default function UserView() {
  const [userList, setUserlist] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("https://reqres.in/api/users?per_page=12")
        .then((response) => {
          const list = response.data.data;
          setUserlist(list);
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
  }, []);

  return (
    <View style={style.container}>
      <FlatList
        data={userList}
        renderItem={({ item }) => <User item={item} />}
      />
    </View>
  );
}
