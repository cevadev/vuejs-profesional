/**
 * platziMusicService - Api que nos permite interactuar con la api de Platzi
 */
import trae from 'trae'
import configService from './config'

// creamos una nueva instancia de trae y la guardamos en el objeto platziMusicService
const platziMusicService = trae.create({
  baseUrl: configService.apiUrl
})

// exportamos nuestro objeto platziMusicService
export default platziMusicService
