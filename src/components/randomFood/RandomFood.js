import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-material-ui';

const style = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: '#FAFAD2',
  },
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAD2',
  },
});

function RandomFood() {
  return (
    <ScrollView style={style.scrollViewContainer}>
      <View style={style.container}>
        <Card>
          <Text>Random food</Text>
        </Card>
      </View>
    </ScrollView>
  );
}

export default RandomFood;
