import React from 'react'
import {
    AdMobBanner,
} from 'expo-ads-admob';
import {View} from "react-native";

export const Banner = () => {
    const bannerError = () => {
        console.log("An error");
        return;
    }
    return(
        <View style={{backgroundColor: 'black', width: '100%', alignItems: 'center'}}>
        <AdMobBanner
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-3485393765261217/5109333554" //Real ID
            // adUnitID="ca-app-pub-3940256099942544/2934735716" //Test ID
            servePersonalizedAds // true or false
            onDidFailToReceiveAdWithError={bannerError}
        />
        </View>
    )
}