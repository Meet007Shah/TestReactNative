import * as React from "react";
import { View, Pressable, StyleSheet, Text, Image } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const RegisteredParticipants = () => {
  return (
    <View style={styles.registeredParticipants}>
      <Pressable style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition2]} />
        <Text style={[styles.viewAll, styles.viewAllTypo]}>View All</Text>
      </Pressable>
      <View style={[styles.groupParent, styles.groupPosition2]}>
        <Pressable style={[styles.groupContainer, styles.image91IconPosition]}>
          <View style={[styles.vinitaMishraParent, styles.image91IconPosition]}>
            <Text style={[styles.vinitaMishra, styles.rashmikaKTypo]}>
              Vinita Mishra
            </Text>
            <Text
              style={[styles.lightMiddleweight, styles.image91IconPosition]}
            >
              Light Middleweight
            </Text>
            <Image
              style={[styles.groupItem, styles.groupPosition1]}
              resizeMode="cover"
              source={require("../assets/group-8238.png")}
            />
          </View>
          <View style={[styles.groupInner, styles.groupInnerPosition]} />
          <View style={[styles.indParent, styles.indParentPosition]}>
            <Text style={[styles.ind, styles.indTypo]}>IND</Text>
            <Image
              style={[styles.image91Icon, styles.image91IconPosition]}
              resizeMode="cover"
              source={require("../assets/image-91.png")}
            />
          </View>
        </Pressable>
        <Pressable style={[styles.groupPressable, styles.groupPosition]}>
          <View style={[styles.vinitaMishraParent, styles.image91IconPosition]}>
            <Text style={[styles.rashmikaK, styles.rashmikaKTypo]}>
              Rashmika K…
            </Text>
            <Text
              style={[styles.lightMiddleweight, styles.image91IconPosition]}
            >
              Women 45-48 Kgs
            </Text>
            <Image
              style={[styles.groupIcon, styles.groupPosition1]}
              resizeMode="cover"
              source={require("../assets/group-82381.png")}
            />
          </View>
          <View style={[styles.rectangleView, styles.groupInnerPosition]} />
          <View style={[styles.indGroup, styles.indParentPosition]}>
            <Text style={[styles.ind, styles.indTypo]}>IND</Text>
            <Image
              style={[styles.image91Icon, styles.image91IconPosition]}
              resizeMode="cover"
              source={require("../assets/image-91.png")}
            />
          </View>
        </Pressable>
        <Pressable style={[styles.groupWrapper, styles.groupPosition]}>
          <View style={[styles.vinitaMishraParent, styles.image91IconPosition]}>
            <View
              style={[styles.vinitaMishraParent, styles.image91IconPosition]}
            >
              <Text style={[styles.chernekaJ, styles.rashmikaKTypo]}>
                Cherneka J…
              </Text>
              <Text
                style={[styles.lightMiddleweight, styles.image91IconPosition]}
              >
                Women 45-48 Kgs
              </Text>
              <Image
                style={[styles.groupIcon, styles.groupPosition1]}
                resizeMode="cover"
                source={require("../assets/group-82382.png")}
              />
            </View>
            <View style={[styles.rectangleView, styles.groupInnerPosition]} />
            <View style={[styles.ausParent, styles.indParentPosition]}>
              <Text style={[styles.aus, styles.indTypo]}>AUS</Text>
              <Image
                style={[styles.image91Icon, styles.image91IconPosition]}
                resizeMode="cover"
                source={require("../assets/image-100.png")}
              />
            </View>
          </View>
        </Pressable>
      </View>
      <Text style={styles.registeredParticipants420}>
        Registered Participants (420)
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 47,
    width: 121,
    left: "50%",
  },
  groupPosition2: {
    top: "50%",
    position: "absolute",
  },
  viewAllTypo: {
    textAlign: "left",
    fontFamily: FontFamily.avenirMedium,
    fontWeight: "500",
  },
  image91IconPosition: {
    left: 0,
    position: "absolute",
  },
  rashmikaKTypo: {
    textAlign: "center",
    color: Color.darkslategray_100,
    fontSize: FontSize.size_sm,
    bottom: 18,
    fontFamily: FontFamily.avenirExtrabold,
    fontWeight: "800",
    position: "absolute",
  },
  groupPosition1: {
    height: 80,
    left: 10,
    top: 0,
    position: "absolute",
  },
  groupInnerPosition: {
    height: 22,
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_2xs,
    marginTop: -3.5,
    top: "50%",
    position: "absolute",
  },
  indParentPosition: {
    height: 15,
    marginTop: 0.5,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  indTypo: {
    color: Color.gray_200,
    lineHeight: 12,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.avenirExtrabold,
    fontWeight: "800",
    bottom: 0,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  groupPosition: {
    width: 99,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    marginTop: -23.5,
    marginLeft: -60.5,
    borderStyle: "solid",
    borderColor: "#707070",
    borderWidth: 1,
    opacity: 0,
    height: 47,
    width: 121,
    left: "50%",
    backgroundColor: Color.white,
  },
  viewAll: {
    marginLeft: -29.5,
    bottom: 13,
    color: Color.mediumslateblue,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.avenirMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: -60,
    bottom: 10,
    position: "absolute",
    width: 121,
  },
  vinitaMishra: {
    left: 7,
  },
  lightMiddleweight: {
    fontSize: FontSize.size_xs,
    color: Color.gray_100,
    bottom: 0,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.avenirMedium,
    fontWeight: "500",
  },
  groupItem: {
    width: 80,
  },
  vinitaMishraParent: {
    right: 0,
    bottom: 0,
    left: 0,
    top: 0,
  },
  groupInner: {
    marginLeft: -29,
    width: 51,
    left: "50%",
  },
  ind: {
    marginLeft: -0.5,
  },
  image91Icon: {
    top: 2,
    bottom: 3,
    maxHeight: "100%",
    width: 15,
  },
  indParent: {
    marginLeft: -23,
    width: 39,
    height: 15,
    marginTop: 0.5,
  },
  groupContainer: {
    width: 106,
    bottom: 0,
    left: 0,
    top: 0,
  },
  rashmikaK: {
    left: 5,
  },
  groupIcon: {
    right: 9,
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleView: {
    left: 24,
    right: 24,
  },
  indGroup: {
    marginLeft: -19.5,
    width: 39,
    height: 15,
    marginTop: 0.5,
  },
  groupPressable: {
    marginLeft: -49.5,
    left: "50%",
  },
  chernekaJ: {
    left: 6,
  },
  aus: {
    marginLeft: -1.5,
  },
  ausParent: {
    marginLeft: -20.5,
    width: 41,
    height: 15,
    marginTop: 0.5,
  },
  groupWrapper: {
    right: 0,
  },
  groupParent: {
    marginTop: -72,
    left: 25,
    height: 129,
    right: 24,
  },
  registeredParticipants420: {
    marginTop: -109,
    left: 15,
    lineHeight: 19,
    color: Color.darkslategray_200,
    fontFamily: FontFamily.avenirExtrabold,
    fontWeight: "800",
    textAlign: "left",
    fontSize: FontSize.size_base,
    top: "50%",
    position: "absolute",
  },
  registeredParticipants: {
    alignSelf: "stretch",
    borderRadius: Border.br_8xs,
    height: 248,
    zIndex: 3,
    marginTop: 15,
    backgroundColor: Color.white,
  },
});

export default RegisteredParticipants;
