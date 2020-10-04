import React from "react";
import { styles } from './styles';
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

const AppButton = (props) => {
  const { title, titleStyle, btnStyle, ...rest } = props;
  const AppButtonType =
    Platform.OS == "ios" ? TouchableOpacity : TouchableWithoutFeedback;
  return (
    <View style={styles.btn}>
      <AppButtonType style={[btnStyle]} {...rest}>
        <Text style={[titleStyle]}>{title}</Text>
      </AppButtonType>
    </View>
  );
};

export default AppButton;
