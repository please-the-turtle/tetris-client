import { create } from 'zustand'
import { createAuthSlice } from './authSlice'

export const useStore = create((...a) => ({
  ...createAuthSlice(...a),
}))
