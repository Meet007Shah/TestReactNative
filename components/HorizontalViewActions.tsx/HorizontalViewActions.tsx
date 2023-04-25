import React, { useMemo } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

type HorizontalViewActionsType = {
  rulesRegulations?: string;

  /** Style props */
  rulesRegulationsZIndex?: number;
  rulesRegulationsMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HorizontalViewActions = ({
  rulesRegulations,
  rulesRegulationsZIndex,
  rulesRegulationsMarginTop,
}: HorizontalViewActionsType) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("zIndex", rulesRegulationsZIndex),
      ...getStyleValue("marginTop", rulesRegulationsMarginTop),
    };
  }, [rulesRegulationsZIndex, rulesRegulationsMarginTop]);

  return (
    <View style={[styles.rulesRegulationsWrapper, groupViewStyle]}>
      <Pressable style={styles.rulesChildPosition}>
        <View
          style={[styles.rulesRegulationsChild, styles.rulesChildPosition]}
        />
        <Text style={[styles.rulesRegulations1, styles.smallButtonPosition]}>
          {rulesRegulations}
        </Text>
        <View style={[styles.smallButton, styles.smallButtonPosition]}>
          <View style={[styles.smallButtonChild, styles.rulesChildPosition]} />
          <View style={[styles.viewWrapper, styles.viewPosition]}>
            <Text style={[styles.view, styles.viewPosition]}>View</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rulesChildPosition: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  smallButtonPosition: {
    top: "50%",
    position: "absolute",
  },
  viewPosition: {
    left: "50%",
    marginTop: -9.5,
    top: "50%",
    position: "absolute",
  },
  rulesRegulationsChild: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
  },
  rulesRegulations1: {
    marginTop: -10.5,
    left: 16,
    fontSize: FontSize.size_base,
    lineHeight: 19,
    fontWeight: "800",
    fontFamily: FontFamily.avenirExtrabold,
    color: Color.darkslategray_200,
    textAlign: "left",
  },
  smallButtonChild: {
    borderRadius: Border.br_51xl,
    backgroundColor: Color.gray_200,
  },
  view: {
    marginLeft: -15,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.avenirRegular,
    color: Color.whitesmoke_200,
    textAlign: "center",
  },
  viewWrapper: {
    marginLeft: -14.5,
    width: 30,
    height: 19,
  },
  smallButton: {
    marginTop: -17.5,
    right: 16,
    width: 89,
    height: 36,
  },
  rulesRegulationsWrapper: {
    alignSelf: "stretch",
    height: 75,
    zIndex: 0,
  },
});

export default HorizontalViewActions;
