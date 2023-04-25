import * as React from "react";
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
} from "react-native";
import HorizontalViewActions from "../components/HorizontalViewActions";
import RegisteredParticipants from "../components/RegisteredParticipants";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const IPhone1312ProMax158 = () => {
  return (
    <View style={styles.iphone1312ProMax158}>
      <HorizontalViewActions
        rulesRegulations={`Rules & Regulations`}
        rulesRegulationsZIndex={0}
      />
      <HorizontalViewActions
        rulesRegulations={`Schedule & Fixtures`}
        rulesRegulationsZIndex={1}
        rulesRegulationsMarginTop={15}
      />
      <HorizontalViewActions
        rulesRegulations={`Refrees & Judges`}
        rulesRegulationsZIndex={2}
        rulesRegulationsMarginTop={10}
      />
      <RegisteredParticipants />
      <View style={styles.info}>
        <Pressable style={styles.readMoreWrapper}>
          <Text style={[styles.readMore, styles.viewTypo]}>Read More</Text>
        </Pressable>
        <Text style={styles.loremIpsumIs}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer too dummy…
        </Text>
      </View>
      <View style={[styles.listMapView, styles.childShadowBox]}>
        <View style={[styles.listViewWrapper, styles.viewWrapperPosition]}>
          <Text style={[styles.listView, styles.info1Typo]}>List view</Text>
        </View>
        <Pressable style={[styles.mapViewWrapper, styles.viewWrapperPosition]}>
          <Text style={[styles.mapView, styles.viewTypo]}>Map view</Text>
        </Pressable>
      </View>
      <StatusBar style={styles.childPosition} barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  viewTypo: {
    textAlign: "center",
    marginTop: -11,
    fontSize: FontSize.size_base,
    top: "50%",
  },
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    backgroundColor: Color.white,
  },
  innerLayout: {
    width: 36,
    position: "absolute",
    backgroundColor: Color.white,
  },
  info1Typo: {
    color: Color.gray_200,
    fontFamily: FontFamily.avenirMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  viewWrapperPosition: {
    width: 125,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  childPosition: {
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  readMore: {
    left: 10,
    color: Color.mediumslateblue,
    fontFamily: FontFamily.avenirMedium,
    fontWeight: "500",
    textAlign: "center",
    marginTop: -11,
    position: "absolute",
  },
  readMoreWrapper: {
    marginLeft: -49,
    bottom: 25,
    width: 100,
    height: 32,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  loremIpsumIs: {
    top: 20,
    left: 15,
    fontFamily: FontFamily.avenirRegular,
    color: Color.gray_100,
    width: 369,
    textAlign: "left",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  info: {
    alignSelf: "stretch",
    borderRadius: Border.br_8xs,
    height: 180,
    zIndex: 4,
    marginTop: 15,
    backgroundColor: Color.white,
  },
  listView: {
    marginLeft: -30.5,
    textAlign: "center",
    marginTop: -11,
    fontSize: FontSize.size_base,
    top: "50%",
    color: Color.gray_200,
  },
  listViewWrapper: {
    borderTopLeftRadius: Border.br_31xl,
    borderBottomLeftRadius: Border.br_31xl,
    left: 0,
    backgroundColor: Color.white,
  },
  mapView: {
    marginLeft: -34.5,
    color: "#959595",
    fontFamily: FontFamily.avenirMedium,
    fontWeight: "500",
    textAlign: "center",
    marginTop: -11,
    position: "absolute",
    left: "50%",
  },
  mapViewWrapper: {
    borderTopRightRadius: Border.br_31xl,
    borderBottomRightRadius: Border.br_31xl,
    backgroundColor: "#e0e0e0",
    right: 0,
  },
  listMapView: {
    width: "62.81%",
    borderRadius: Border.br_31xl,
    height: 50,
    zIndex: 6,
    marginTop: -18,
  },
  iphone1312ProMax158: {
    backgroundColor: "#f7f7f7",
    flex: 1,
    paddingLeft: Padding.p_mini,
    paddingRight: Padding.p_mini,
    alignItems: "center",
    width: "100%",
  },
});

export default IPhone1312ProMax158;
