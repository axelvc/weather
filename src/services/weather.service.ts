/* eslint-disable @typescript-eslint/no-explicit-any */
interface Temp {
  c: number
  f: number
}

interface Condition {
  text: string
  icon: string
}

export interface Forecast {
  date: Date
  condition: Condition
  temp: Temp
}

export interface Weather {
  location: {
    country: string
    name: string
    timezone: string
  }
  current: {
    lastUpdated: Date
    isDay: boolean
    uvIndex: number
    humidity: number
    cloud: number
    temp: {
      real: Temp
      feels: Temp
    }
    condition: Condition
    wind: {
      kph: number
      mph: number
      direction: string
    }
    pressure: {
      mb: number
      in: number
    }
    precipitation: {
      mm: number
      in: number
    }
    visibility: {
      km: number
      mi: number
    }
  }
  forecast: {
    today: {
      rainChange: number
      snowChange: number
      temp: {
        min: Temp
        max: Temp
        dewPoint: Temp
      }
      astro: {
        sunrise: string
        sunset: string
        moonrise: string
        moonset: string
        moonPhase: {
          name: string
          icon: string
        }
        moonIllumination: number
      }
    }
    hours: Forecast[]
    days: Forecast[]
  }
}

async function fetchWeather(location: string) {
  const r = await fetch(`/api/weather?location=${location}`)
  return await r.json()
}

async function fetchTimezone(location: string) {
  const r = await fetch(`/api/timezone?location=${location}`)
  return await r.json()
}

export default async function getWeather(location: string): Promise<Weather> {
  const { current: c, forecast: f, location: l } = await fetchWeather(location)
  const { timezone } = await fetchTimezone(location)
  const isDay = Boolean(c.is_day)

  const lastUpdated = new Date(c.last_updated_epoch * 1000)
  const todayForecast = f.forecastday[0]

  function getConditionIcon(code: number): string {
    return `condition/${isDay ? 'day' : 'night'}/${code}`
  }

  return {
    current: {
      isDay,
      lastUpdated,
      humidity: c.humidity,
      cloud: c.cloud,
      uvIndex: c.uv,
      temp: {
        real: {
          c: c.temp_c,
          f: c.temp_f,
        },
        feels: {
          c: c.feelslike_c,
          f: c.feelslike_f,
        },
      },
      condition: {
        text: c.condition.text,
        icon: getConditionIcon(c.condition.code),
      },
      wind: {
        kph: c.wind_kph,
        mph: c.wind_mph,
        direction: c.wind_dir,
      },
      pressure: {
        mb: c.pressure_mb,
        in: c.pressure_in,
      },
      precipitation: {
        mm: c.precip_mm,
        in: c.precip_in,
      },
      visibility: {
        km: c.vis_km,
        mi: c.vis_miles,
      },
    },
    location: {
      timezone,
      country: l.country,
      name: l.name,
    },
    forecast: {
      today: {
        rainChange: todayForecast.day.daily_chance_of_rain,
        snowChange: todayForecast.day.daily_chance_of_snow,
        temp: {
          min: {
            c: todayForecast.day.mintemp_c,
            f: todayForecast.day.mintemp_f,
          },
          max: {
            c: todayForecast.day.maxtemp_c,
            f: todayForecast.day.maxtemp_f,
          },
          dewPoint: {
            c: todayForecast.hour[lastUpdated.getHours()].dewpoint_c,
            f: todayForecast.hour[lastUpdated.getHours()].dewpoint_f,
          },
        },
        astro: {
          sunrise: todayForecast.astro.sunrise,
          sunset: todayForecast.astro.sunset,
          moonrise: todayForecast.astro.moonrise,
          moonset: todayForecast.astro.moonset,
          moonPhase: {
            name: todayForecast.astro.moon_phase,
            icon: `moon/${todayForecast.astro.moon_phase.replaceAll(' ', '_').toLowerCase()}`,
          },
          moonIllumination: Number(todayForecast.astro.moon_illumination),
        },
      },
      hours: todayForecast.hour.map((hour: any) => ({
        date: new Date(hour.time_epoch * 1000),
        temp: {
          c: hour.temp_c,
          f: hour.temp_f,
        },
        condition: {
          text: hour.condition.text,
          icon: getConditionIcon(hour.condition.code),
        },
      })),
      days: f.forecastday.map(({ day, date_epoch }: any) => ({
        date: new Date(date_epoch * 1000),
        temp: {
          c: day.avgtemp_c,
          f: day.avgtemp_f,
        },
        condition: {
          text: day.condition.text,
          icon: getConditionIcon(day.condition.code),
        },
      })),
    },
  }
}
