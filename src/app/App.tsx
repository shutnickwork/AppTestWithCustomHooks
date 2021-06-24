import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  ImageStyle,
  Image
} from 'react-native';
import useFetch from 'use-http'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {IArticle} from "../types/types";

declare const global: {HermesInternal: null | {}};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    height: 140,
    borderBottomWidth: 1,
    borderBottomColor: Colors.separator,
    backgroundColor: Colors.white
  } as ViewStyle,
  descriptionContainer: {
    flex: 1,
    marginTop: 13,
    marginLeft: 8,
    marginBottom: 12,
    paddingRight: 14,
    flexDirection: "column",
    justifyContent: "space-between"
  } as ViewStyle,
  label: {
    fontSize: 14,
    //fontFamily: FontNames.regular,
    color: Colors.fontDark,
  } as TextStyle,
  image: {
    height: 106,
    width: 106,
    resizeMode: "cover",
    marginTop: 16,
    marginLeft: 16,
    marginBottom: 16
  } as ImageStyle,
});

const url = `http://api.blog.testing.singree.com/?page=1&limit=10`;

const App = () => {

  if (typeof(HermesInternal) === "undefined") {
    console.log("Hermes is not enabled");
  } else {
    console.log("Hermes is enabled");
  }

  const options = {} // these options accept all native `fetch` options
  // the last argument below [] means it will fire onMount (GET by default)
  const { loading, error, data = [] } = useFetch(url, options, []);


  return (
    <>
      {error && <Text>{error.message || 'Error'}</Text>}
      {loading && <Text>Loading</Text>}
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            {data?.articles?.map((item: IArticle) => (
                <TouchableOpacity
                    key={item._id}
                    style={styles.itemContainer}
                    onPress={() => {}}
                    activeOpacity={0.7}
                >
                  <Image style={styles.image}         source={{
                    uri: 'https://ru.reactjs.org/logo-og.png',
                  }} resizeMethod={"resize"}/>
                  <View style={styles.descriptionContainer}>
                    {item.label ? <Text style={styles.label}>Метка: {item.label}</Text> : null}
                    <Text style={styles.label}>Название: {item.title}</Text>
                    <Text style={styles.label}>Дата: {item.created}</Text>
                    <Text style={styles.label}>Автор: {item.authorName}</Text>
                  </View>
                </TouchableOpacity>
            ))}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.tsx</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
