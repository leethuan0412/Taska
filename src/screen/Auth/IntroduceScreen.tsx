import { AppButton, Block } from '@src/component';
import { AppImage } from '@src/component/AppImage/FstImage';
import { Spacing } from '@src/component/appSpacing';
import { FontSize } from '@src/component/fontSize';
import { NavigationUtils } from '@src/navigation/NavigationUtils';
import { ROUTE_AUTH } from '@src/navigation/RouteAuth';
import { colors } from '@src/theme';
import { dataIntro } from '@src/utils/mock';
import { useRef, useState } from 'react';
import { Animated, Dimensions, FlatList, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const {width} = Dimensions.get('screen')
const IntroduceScreen = () => {

  const scrollX = useRef(new Animated.Value(0)).current
  const sliceRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderItemIntro=({item}: any)=>{
    return (
      <Block width={width-20}>
        <AppImage
          source={item.image}
          resizeMode="contain"
          style={styles.iconCalender}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </Block>
    );
  }

  const DotPanigation =({data, scrollX}:any)=>{
    return (
    <Block style={styles.viewDot}>
      {data.map((_ : any, idx: number)=>{
        const inputRange = [ (idx - 1) * width, idx * (width), (idx +1)* width ]
        const dotWidth= scrollX.interpolate({
          inputRange,
           outputRange :[6,16,6],
           extrapolate: 'clamp'
        })
        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#ccc', '#246BFD', '#ccc'],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={idx.toString()}
            style={[styles.dotStyle, {width: dotWidth, backgroundColor}]}
          />
        );
      })}
    </Block>
    )
  }
  const handleOnScroll =(event: any)=>{

    Animated.event([
      {
        nativeEvent:{
          contentOffset:{
            x:scrollX
          }
        }
      }
    ],
    {
      useNativeDriver: false
    })(event)
  }
  
  const ScrollToNext =()=>{
    if (currentIndex < dataIntro.length - 1) {
      sliceRef.current.scrollToIndex({index: currentIndex + 1});
    } else NavigationUtils.navigate(ROUTE_AUTH.LOGIN);
    
  }
  const handleOnViewableItemsChanged = useRef(({viewableItems}:any) => {
    console.log('viewableItems', viewableItems);
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataIntro}
        ref={sliceRef}
        renderItem={renderItemIntro}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        viewabilityConfig={viewabilityConfig}
        contentContainerStyle={styles.flatList}
        onViewableItemsChanged={handleOnViewableItemsChanged}
      />
      <DotPanigation data={dataIntro} scrollX={scrollX} />
      <AppButton
        label="Next"
        labelStyle={styles.txtNext}
        style={styles.btnNext}
        onPress={ScrollToNext}
      />
      <AppButton
        label="Skip"
        labelStyle={styles.txtSkip}
        style={styles.btnSkip}
        onPress={() => NavigationUtils.navigate(ROUTE_AUTH.LOGIN)}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  btnNext: {
    backgroundColor: '#246BFD',
    borderRadius: Spacing.height16,
    marginTop: Spacing.height50,
  },
  txtNext: {
    color: colors.white,
    fontWeight: 'bold',
    paddingVertical: Spacing.height12,
    paddingHorizontal: Spacing.width150,
  },
  btnSkip: {
    backgroundColor: '#E9F0FF',
    borderRadius: Spacing.height16,
    marginTop: Spacing.height10,
  },
  txtSkip: {
    color: '#246BFD',
    fontWeight: 'bold',
    paddingVertical: Spacing.height12,
    paddingHorizontal: Spacing.width150,
  },
  title: {
    fontSize: FontSize.Font30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: Spacing.height40,
  },
  description: {
    fontSize: FontSize.Font16,
    textAlign: 'center',
    marginTop: Spacing.height10,
    color: '#616161',
  },
  flatList: {},
  viewDot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Spacing.height40,
  },
  dotStyle: {
    height: Spacing.height6,
    width: Spacing.height6,
    backgroundColor: '#E0E0E0',
    borderRadius: Spacing.height6,
    marginHorizontal: Spacing.width3,
  },
  container: {
    paddingHorizontal: Spacing.width10,
    flex: 1,
    marginTop: Spacing.height40,
  },
  iconCalender: {
    height: Spacing.height302,
    width: width,
    justifyContent: 'center',
  },
});
export { IntroduceScreen };

