//NavigatiorUtil
export default class NavigatorUril {
  static goPage (params, page) {
    // 在BottomTabBar页面接受navigation
    const navigation = NavigationUtil.navigation
    if (!navigation) {
      console.log("NavigationUtil.navigation can not be null")
      return;
    }
    navigation.navigate(
      page,
      {
        ...params
      }
    )
  }
}
