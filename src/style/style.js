import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },

  user: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },

  userImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    margin: 5,
  },

  userDetailsView: {
    paddingVertical: 20,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },

  userDetailsAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  userDetailsText: {
    marginTop: 10,
    fontSize: 20,
  },

  userDetailsFooter: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  userDetailsFooterButton: {
    width: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    borderRadius: 5,
  },

  userDetailsFooterButtonText: {
    color: "white",
  },
});
