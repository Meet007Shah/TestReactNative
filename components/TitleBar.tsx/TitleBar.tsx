import * as React from "react";
import {
  View,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Pressable,
  Image,
  Text,
} from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

type TitleBarType = {
  style?: StyleProp<ViewStyle>;
};

const TitleBar = ({ style }: TitleBarType) => {
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <View style={styles.child} />
        <Pressable style={[styles.path73Wrapper, styles.innerLayout]}>
          <Image
            style={[styles.path73Icon, styles.infoIconPosition]}
            resizeMode="cover"
            source={require("../assets/path-73.png")}
          />
        </Pressable>
        <Pressable style={[styles.inner, styles.innerLayout]}>
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/group-7026.png")}
          />
        </Pressable>
        <Pressable style={[styles.infoParent, styles.infoIconPosition]}>
          <Text style={[styles.info, styles.infoIconPosition]}>Info</Text>
          <Image
            style={[styles.path73Icon1, styles.infoIconPosition]}
            resizeMode="cover"
            source={require("../assets/path-731.png")}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  innerLayout: {
    width: 36,
    backgroundColor: Color.white,
    position: "absolute",
  },
  infoIconPosition: {
    left: "50%",
    position: "absolute",
  },
  child: {
    top: 0,
    right: 0,
    left: 0,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    backgroundColor: Color.white,
    bottom: 0,
    position: "absolute",
  },
  path73Icon: {
    marginTop: -10.32,
    marginLeft: -7.41,
    width: 12,
    height: 22,
    top: "50%",
  },
  path73Wrapper: {
    top: 18,
    bottom: 17,
    left: 16,
  },
  groupChild: {
    top: 6,
    right: 8,
    bottom: 7,
    left: 3,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  inner: {
    marginTop: -18.5,
    right: 16,
    height: 38,
    top: "50%",
  },
  info: {
    marginLeft: -32.25,
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    fontFamily: FontFamily.avenirMedium,
    color: Color.gray_200,
    textAlign: "left",
    bottom: 0,
    left: "50%",
  },
  path73Icon1: {
    marginTop: -4,
    marginLeft: 17.25,
    width: 17,
    height: 10,
    top: "50%",
  },
  infoParent: {
    marginTop: -14.5,
    marginLeft: -32,
    width: 65,
    height: 33,
    top: "50%",
  },
  view: {
    width: "100%",
    height: 73,
  },
});

export default TitleBar;
