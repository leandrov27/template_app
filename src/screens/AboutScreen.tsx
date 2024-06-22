import { RHFTextField } from '@/components/hook-form';
import { COLORS, SIZES } from '@/constants';
import { useTheme } from '@/theme/ThemeProvider';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

const AboutScreen = () => {
  //^ use states
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { dark, colors, setScheme } = useTheme();

  const [search, setSearch] = useState('hola soy valor');

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    dark ? setScheme('light') : setScheme('dark')
  };

  const handleTextChange = (text: string) => {
    setSearch(text);
  };

  return (
    <SafeAreaView style={[localStyle.area, { backgroundColor: colors.background }]}>
      <View style={[localStyle.container, { backgroundColor: colors.background }]}>
        {/**HEADER */}
        <View style={localStyle.headerContainer}>
          <View style={localStyle.viewLeft}>
            <Image
              source={{uri: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718841600&semt=ais_user'}}
              resizeMode='contain'
              style={localStyle.userIcon}
            />

            <View style={localStyle.viewNameContainer}>
              <Text style={localStyle.greeeting}>Buenos Días 👋</Text>
              <Text style={[localStyle.title, {color: dark ? COLORS.white : COLORS.greyscale900}]}>
                Leandro Valdez
              </Text>
            </View>
          </View>

          <View style={localStyle.viewRight}>
            <TouchableOpacity onPress={toggleDarkMode}>
              {dark ? (
                <Ionicons name='sunny' color={COLORS.warning} size={28} />
              ) : (
                <Ionicons name='moon' color={COLORS.primary} size={28} />
              )}
            </TouchableOpacity>
          </View>
        </View>


        <RHFTextField 
        insideLeftIcon={() => <Ionicons name='mail-outline' color={colors.primary} size={20} />}
        onTextChange={handleTextChange}
        _value={search}
        placeholder="Buscar..."
        label="Buscar Valor"
        _errorText={search.length > 20 ? "Maximum length exceeded" : ""}
        required
        />

        <RHFTextField 
          _value={'search'}
          insideLeftIcon={() => <Ionicons name='lock-closed-outline' color={colors.primary} size={20} />}
        
          onTextChange={handleTextChange}
          rightAccessory={() => <Ionicons name='eye-off-outline' color={colors.primary} size={20} />}
          placeholder="Buscar..."
          label="Buscar Valor"
          _errorText={search.length > 20 ? "Maximum length exceeded" : ""}
          required
        />

      </View>
    </SafeAreaView>
  )
}

const localStyle = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingTop: 5
  },
  headerContainer: {
    width: SIZES.width - 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  viewLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  greeeting: {
    fontSize: 12,
    fontFamily: "regular",
    color: "gray",
  },
  title: {
    fontSize: 20,
    fontFamily: "bold",
    color: COLORS.greyscale900
  },
  viewNameContainer: {
    marginLeft: 10
  },
  viewRight: {
    flexDirection: "row",
    alignItems: "center"
  },
  bellIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.black,
    marginRight: 8
  },

  inputContainer: {
    flexDirection: "row",
    borderColor: COLORS.greyscale500,
    borderWidth: .4,
    borderRadius: 6,
    height: 58,
    width: SIZES.width - 32,
    alignItems: 'center',
    marginVertical: 16,
    backgroundColor: COLORS.greyscale500,
},
input: {
  flex: 1,
  marginVertical: 10,
  height: 40,
  fontSize: 14,
  color: "#111"
}
});

export default AboutScreen;