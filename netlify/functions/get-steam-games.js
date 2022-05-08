import fetch from 'node-fetch'
require('dotenv').config()

const API_ENDPOINT = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?steamid=76561199068492201&count=3&key=${process.env.REACT_APP_STEAM_API_KEY}`
const STATS_ENDPOINT = `https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v2/?steamid=76561199068492201&appid=252950&key=${process.env.REACT_APP_STEAM_API_KEY}`
const ACHIEVEMENTS_ENDPOINT = `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v1/?steamid=76561199068492201&appid=252950&key=${process.env.REACT_APP_STEAM_API_KEY}
`
exports.handler = async (event, context) => {
  try {
    const response = await fetch(API_ENDPOINT)
    const data = await response.json()
    const stats = await fetch(STATS_ENDPOINT)
    const achievements = await fetch(ACHIEVEMENTS_ENDPOINT)
    console.log(achievements)
    console.log(stats)
    return { statusCode: 200, body: JSON.stringify({ data }) }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' })
    }
  }
}
