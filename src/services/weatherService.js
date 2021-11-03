import axios from "axios";
import config from "../config";

export default {
  getAutoComplete: (key) => {
    return new Promise(async (resolve) => {
      // axios.get(config.autoCompleteEndpoint + key).then((res) => {
      //   if (res.data) return resolve(res.data);
      // });
    });
  },

  getCurrentLocationWeather: (cityId) => {
    return new Promise(async (resolve) => {
      // axios.get(config.getSearchedLocationEndpoint + cityId + config.apikey).then((res) => {
      //   if (res.data) return resolve(res.data);
      // });
      resolve([
        {
          LocalObservationDateTime: "2021-11-03T19:01:00+08:00",
          EpochTime: 1635937260,
          WeatherText: "Cloudy",
          WeatherIcon: 7,
          HasPrecipitation: false,
          PrecipitationType: null,
          LocalSource: {
            Id: 7,
            Name: "Huafeng",
            WeatherCode: "01"
          },
          IsDayTime: false,
          Temperature: {
            Metric: {
              Value: 20.5,
              Unit: "C",
              UnitType: 17
            },
            Imperial: {
              Value: 69,
              Unit: "F",
              UnitType: 18
            }
          },
          MobileLink: "http://www.accuweather.com/en/cn/nanning/102263/current-weather/102263?lang=en-us",
          Link: "http://www.accuweather.com/en/cn/nanning/102263/current-weather/102263?lang=en-us"
        }
      ]);
    });
  },

  getFiveDayForcast: (cityId) => {
    return new Promise(async (resolve) => {
      // axios.get(config.getFiveDayForcastndpoint + cityId + config.apikey + "&metric=true").then((res) => {
      //   if (res.data) return resolve(res.data);

      // });
      resolve({
        Headline: {
          EffectiveDate: "2021-11-07T13:00:00+08:00",
          EffectiveEpochDate: 1636261200,
          Severity: 4,
          Text: "Rain Sunday afternoon",
          Category: "rain",
          EndDate: "2021-11-07T19:00:00+08:00",
          EndEpochDate: 1636282800,
          MobileLink: "http://www.accuweather.com/en/cn/nanning/102263/daily-weather-forecast/102263?unit=c&lang=en-us",
          Link: "http://www.accuweather.com/en/cn/nanning/102263/daily-weather-forecast/102263?unit=c&lang=en-us"
        },
        DailyForecasts: [
          {
            Date: "2021-11-03T07:00:00+08:00",
            EpochDate: 1635894000,
            Temperature: {
              Minimum: {
                Value: 19,
                Unit: "C",
                UnitType: 17
              },
              Maximum: {
                Value: 22,
                Unit: "C",
                UnitType: 17
              }
            },
            Day: {
              Icon: 12,
              IconPhrase: "Showers",
              HasPrecipitation: true,
              PrecipitationType: "Rain",
              PrecipitationIntensity: "Light",
              LocalSource: {
                Id: 7,
                Name: "Huafeng",
                WeatherCode: "07"
              }
            },
            Night: {
              Icon: 12,
              IconPhrase: "Showers",
              HasPrecipitation: true,
              PrecipitationType: "Rain",
              PrecipitationIntensity: "Light",
              LocalSource: {
                Id: 7,
                Name: "Huafeng",
                WeatherCode: "07"
              }
            },
            Sources: ["AccuWeather", "Huafeng"],
            MobileLink: "http://www.accuweather.com/en/cn/nanning/102263/daily-weather-forecast/102263?day=1&unit=c&lang=en-us",
            Link: "http://www.accuweather.com/en/cn/nanning/102263/daily-weather-forecast/102263?day=1&unit=c&lang=en-us"
          },
          {
            Date: "2021-11-04T07:00:00+08:00",
            EpochDate: 1635980400,
            Temperature: {
              Minimum: {
                Value: 19,
                Unit: "C",
                UnitType: 17
              },
              Maximum: {
                Value: 25,
                Unit: "C",
                UnitType: 17
              }
            },
            Day: {
              Icon: 7,
              IconPhrase: "Cloudy",
              HasPrecipitation: false,
              LocalSource: {
                Id: 7,
                Name: "Huafeng",
                WeatherCode: "02"
              }
            },
            Night: {
              Icon: 7,
              IconPhrase: "Cloudy",
              HasPrecipitation: false,
              LocalSource: {
                Id: 7,
                Name: "Huafeng",
                WeatherCode: "02"
              }
            },
            Sources: ["AccuWeather", "Huafeng"],
            MobileLink: "http://www.accuweather.com/en/cn/nanning/102263/daily-weather-forecast/102263?day=2&unit=c&lang=en-us",
            Link: "http://www.accuweather.com/en/cn/nanning/102263/daily-weather-forecast/102263?day=2&unit=c&lang=en-us"
          },
          {
            Date: "2021-11-05T07:00:00+08:00",
            EpochDate: 1636066800,
            Temperature: {
              Minimum: {
                Value: 21,
                Unit: "C",
                UnitType: 17
              },
              Maximum: {
                Value: 28,
                Unit: "C",
                UnitType: 17
              }
            },
            Day: {
              Icon: 4,
              IconPhrase: "Intermittent clouds",
              HasPrecipitation: false,
              LocalSource: {
                Id: 7,
                Name: "Huafeng",
                WeatherCode: "01"
              }
            },
            Night: {
              Icon: 7,
              IconPhrase: "Cloudy",
              HasPrecipitation: false,
              LocalSource: {
                Id: 7,
                Name: "Huafeng",
                WeatherCode: "02"
              }
            },
            Sources: ["AccuWeather", "Huafeng"],
            MobileLink: "http://www.accuweather.com/en/cn/nanning/102263/daily-weather-forecast/102263?day=3&unit=c&lang=en-us",
            Link: "http://www.accuweather.com/en/cn/nanning/102263/daily-weather-forecast/102263?day=3&unit=c&lang=en-us"
          },
          {
            Date: "2021-11-06T07:00:00+08:00",
            EpochDate: 1636153200,
            Temperature: {
              Minimum: {
                Value: 20,
                Unit: "C",
                UnitType: 17
              },
              Maximum: {
                Value: 28,
                Unit: "C",
                UnitType: 17
              }
            },
            Day: {
              Icon: 3,
              IconPhrase: "Partly sunny",
              HasPrecipitation: false,
              LocalSource: {
                Id: 7,
                Name: "Huafeng",
                WeatherCode: "01"
              }
            },
            Night: {
              Icon: 38,
              IconPhrase: "Mostly cloudy",
              HasPrecipitation: false,
              LocalSource: {
                Id: 7,
                Name: "Huafeng",
                WeatherCode: "01"
              }
            },
            Sources: ["AccuWeather", "Huafeng"],
            MobileLink: "http://www.accuweather.com/en/cn/nanning/102263/daily-weather-forecast/102263?day=4&unit=c&lang=en-us",
            Link: "http://www.accuweather.com/en/cn/nanning/102263/daily-weather-forecast/102263?day=4&unit=c&lang=en-us"
          },
          {
            Date: "2021-11-07T07:00:00+08:00",
            EpochDate: 1636239600,
            Temperature: {
              Minimum: {
                Value: 12,
                Unit: "C",
                UnitType: 17
              },
              Maximum: {
                Value: 25,
                Unit: "C",
                UnitType: 17
              }
            },
            Day: {
              Icon: 12,
              IconPhrase: "Showers",
              HasPrecipitation: true,
              PrecipitationType: "Rain",
              PrecipitationIntensity: "Moderate",
              LocalSource: {
                Id: 7,
                Name: "Huafeng",
                WeatherCode: "07"
              }
            },
            Night: {
              Icon: 38,
              IconPhrase: "Mostly cloudy",
              HasPrecipitation: false,
              LocalSource: {
                Id: 7,
                Name: "Huafeng",
                WeatherCode: "01"
              }
            },
            Sources: ["AccuWeather", "Huafeng"],
            MobileLink: "http://www.accuweather.com/en/cn/nanning/102263/daily-weather-forecast/102263?day=5&unit=c&lang=en-us",
            Link: "http://www.accuweather.com/en/cn/nanning/102263/daily-weather-forecast/102263?day=5&unit=c&lang=en-us"
          }
        ]
      });
    });
  }
};
