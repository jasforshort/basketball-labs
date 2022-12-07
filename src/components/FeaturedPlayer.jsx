import React, { useState, useEffect } from 'react'
import "./styles/featured_players_2.css";

const FeaturedPlayer = ({playerStats, fetchWatchlist}) => {
  const deleteClick = (e, playerId, userId) => {
    console.log(playerId);
    fetch(`http://localhost:5000/watchlist/delete/${playerId}`, {
        method: "DELETE",
        headers: { jwt_token: localStorage.token }
    })
    .then(response => fetchWatchlist())
    .catch(error => console.log(error.message))
  }
  return (
    <>
    <div tabindex="0" className="focus:outline-none">
        <div className="mx-auto container py-8">
          <div className="flex flex-wrap items-center lg:justify-between justify-center">
            <div tabindex="0" className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8 entire-player-tile">
              <div>
                <img src={playerStats.picture} tabindex="0" className="focus:outline-none w-full h-44 player-photo" />
              </div>
              <div className="bg-slate-800 player-description-box">
                <div className="flex items-center justify-between px-4 pt-4">
                  <button class="btn btn-danger" onClick={e => deleteClick(e, playerStats.id)}>Remove Player</button>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2 tabindex="0" className="focus:outline-none text-lg font-semibold text-white">{playerStats.first_name} {playerStats.last_name}</h2>
                    <p tabindex="0" className="focus:outline-none text-xs text-slate-400 pl-5">{playerStats.team_name}</p>
                  </div>
                  <p tabindex="0" className="focus:outline-none text-xs text-slate-400 mt-2 featured-stat-info"><br/>Points: {playerStats.points}<br/><br/>Assists: {playerStats.assists}<br/><br/>Rebounds: {playerStats.rebounds}</p>
                  <div className="flex mt-4">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <table class="min-w-full">
            <thead class="bg-white border-b">
              <tr className='bg-gray-300'>
                <th scope="col" class="text-xl font-medium text-gray-900 px-6 py-4 text-left hover:bg-gray-300">
                  Avatars
                </th>
                <th scope="col" class="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                  Players
                </th>
                <th scope="col" class="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                  Points
                </th>
                <th scope="col" class="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                  Assists
                </th>
                <th scope="col" class="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                  Rebounds
                </th>
                <th scope="col" class="text-xl font-medium text-gray-900 px-4 py-3 text-left">
                  Turnovers
                </th>
                <th scope="col" class="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                  Steals
                </th>
                <th scope="col" class="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                  Blocks
                </th>
                <th scope="col" class="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                  FGP%
                </th>
                <th scope="col" class="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                  FTP%
                </th>
                <th scope="col" class="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                  3PM%
                </th>
                <th scope="col" class="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                  Remove from Watchlist
                </th>
              </tr>
            </thead>
            <tbody> 
              <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <img class="w-20 h-16 rounded" src={playerStats.picture} alt="Default avatar" />
                </td>
                <td class="text-2xl text-gray-900 font-extrabold px-6 py-4 whitespace-nowrap">
                  {playerStats.first_name} {playerStats.last_name}
                </td>
                <td class="text-xl text-gray-900 font-bold px-6 py-4 whitespace-nowrap bg-orange-500">
                  {playerStats.points}
                </td>
                <td class="text-xl text-gray-900 font-bold px-6 py-4 whitespace-nowrap bg-orange-500">
                  {playerStats.assists}
                </td>
                <td class="text-xl text-gray-900 font-bold px-6 py-4 whitespace-nowrap bg-orange-500">
                  {playerStats.rebounds}
                </td>
                <td class="text-xl text-gray-900 font-bold px-6 py-4 whitespace-nowrap bg-yellow-500">
                  {playerStats.turnovers}
                </td>
                <td class="text-xl text-gray-900 font-bold px-6 py-4 whitespace-nowrap bg-yellow-500">
                  {playerStats.steals}
                </td>
                <td class="text-xl text-gray-900 font-bold px-6 py-4 whitespace-nowrap bg-yellow-500">
                  {playerStats.blocks}
                </td>
                <td class="text-xl text-gray-900 font-bold px-6 py-4 whitespace-nowrap bg-lime-500">
                  {playerStats.field_goal_percentage}
                </td>
                <td class="text-xl text-gray-900 font-bold px-6 py-4 whitespace-nowrap bg-lime-500">
                  {playerStats.free_throw_percentage}
                </td>
                <td class="text-xl text-gray-900 font-bold px-6 py-4 whitespace-nowrap bg-lime-500">
                  {playerStats.three_points_made}
                </td>
                <td class="text-xl text-gray-900 font-bold px-6 py-4 whitespace-nowrap bg-lime-500"> 
                  <button class="btn btn-danger" onClick={e => deleteClick(e, playerStats.id)}>Remove Player</button>
                </td>
              </tr>
               </tbody>
          </table> */}
      </>
  )
}

export default FeaturedPlayer