// import { getToken } from './auth.js'
import axios from 'axios'
// import { baseUrl } from '../config.js'

// export function headers() {
//   return {
//     headers: { Authorization: `Bearer ${getToken()}` },
//   }
// }

//* EXERCISE REQ

export function getAllExercises() {
  return axios.get('/api/exercises')
}

//* PROGRAM REQ

export function getAllPrograms() {
  return axios.get('/api/programs')
}

//* LIKE / COMMENT REQ

// export function likeExercise(exerciseId) {
//   return axios.post(`/api/exercises/${exerciseId}/like/`, null, headers())
// }

// export function createExerciseComment(exerciseId, formData) {
//   return axios.post(`/api/exercises/${exerciseId}/comments/`, formData, headers())
// }

//* AUTH REQ

// export function userProfile(userId) {
//   return axios.get(`api/auth/profile/${userId}`, headers())

