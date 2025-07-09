'use client'
import { createContext, useReducer, useEffect } from 'react'
import { successAlert, errorAlert } from '@/app/lib/alert/alert'
import { toast } from 'react-hot-toast'


const actionTypes = {
  ADD_PASSWORD: 'addPassword',
  DELETE_PASSWORD: 'deletePassword',
  UPDATE_PASSWORD: 'updatePassword',
  DEFAULT_PASSWORDS: 'defaultPasswords',
  SET_SECRET_KEY: 'setSecretKey',
  CLEAR_STATE: 'clearState',
  CLEAR_ERRORS: 'clearErrors',
  SET_LOADING: 'setLoading'
}

export const PasswordsContext = createContext()

const initialState = {
  passwords: [],
  secretKey: null,
  lastOperation: null,
  lastError: null,
  errors: [],
  loading: false,
  loadingOperation: null
}

const passwordReducer = (state, action) => {
  try {
    switch (action.type) {
      case actionTypes.ADD_PASSWORD:
        return {
          ...state,
          passwords: [...state.passwords, action.payload],
          lastOperation: 'add',
          errors: [],
          loading: false,
          loadingOperation: null
        }

      case actionTypes.DELETE_PASSWORD:
        if (!action.payload) {
          return {
            ...state,
            errors: [...state.errors, 'ID de contraseña no válido'],
            loading: false,
            loadingOperation: null
          }
        }
        const password = state.passwords.find(p => p.id === action.payload)
        if (!password) {
          return {
            ...state,
            errors: [...state.errors, 'Contraseña no encontrada'],
            loading: false,
            loadingOperation: null
          }
        }
        return {
          ...state,
          passwords: state.passwords.filter(p => p.id !== action.payload),
          lastOperation: 'delete',
          errors: [],
          loading: false,
          loadingOperation: null
        }

      case actionTypes.UPDATE_PASSWORD:
        if (!action.payload || !action.payload.id) {
          return {
            ...state,
            errors: [...state.errors, 'ID de contraseña no válido'],
            loading: false,
            loadingOperation: null
          }
        }
        const existingPassword = state.passwords.find(
          p => p.id === action.payload.id
        )
        if (!existingPassword) {
          return {
            ...state,
            errors: [
              ...state.errors,
              'Contraseña no encontrada para actualizar'
            ],
            loading: false,
            loadingOperation: null
          }
        }
        return {
          ...state,
          passwords: state.passwords.map(pass =>
            pass.id === action.payload.id ? action.payload : pass
          ),
          lastOperation: 'update',
          errors: [],
          loading: false,
          loadingOperation: null
        }

      case actionTypes.DEFAULT_PASSWORDS:
        if (!Array.isArray(action.payload)) {
          return {
            ...state,
            errors: [
              ...state.errors,
              'Los datos de contraseñas deben ser un array'
            ]
          }
        }
        return {
          ...state,
          passwords: action.payload,
          errors: []
        }

      case actionTypes.SET_SECRET_KEY:
        if (action.payload === null) {
          return {
            ...state,
            secretKey: null,
            errors: []
          }
        }
        if (typeof action.payload !== 'string') {
          return {
            ...state,
            errors: [...state.errors, 'La clave debe ser un string']
          }
        }
        return {
          ...state,
          secretKey: action.payload,
          errors: [],
          loading: false,
          loadingOperation: null,
          lastOperation: 'add'
        }

      case actionTypes.CLEAR_STATE:
        return {
          ...initialState
        }

      case actionTypes.CLEAR_ERRORS:
        return {
          ...state,
          errors: [],
          lastError: null
        }

      case actionTypes.SET_LOADING:
        return {
          ...state,
          loading: action.payload.loading,
          loadingOperation: action.payload.loadingOperation
        }

      default:
        console.warn('[PasswordsReducer] Acción desconocida:', action.type)
        return state
    }
  } catch (error) {
    console.error('[PasswordsReducer] Error:', error)
    return {
      ...state,
      errors: [...state.errors, error.message]
    }
  }
}

export const PasswordsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(passwordReducer, initialState)
  useEffect(() => {
    console.log('[PasswordsProvider] Estado actualizado:', {
      lastOperation: state.lastOperation,
      errors: state.errors.length > 0
    })

    if (state.lastOperation === 'add' || state.lastOperation === 'update') {
     successAlert(state.lastOperation === 'update' ? 'Contraseña actualizada exitosamente' : 'Contraseña guardada exitosamente')
    } else if (state.lastOperation === 'delete') {
      successAlert('Contraseña eliminada exitosamente')
    }

    if (state.errors.length > 0) {
      const errorMessage = state.errors[state.errors.length - 1]
      errorAlert(errorMessage)
      dispatch({ type: actionTypes.CLEAR_ERRORS })
    }
  }, [state.lastOperation, state.errors])

  useEffect(() => {
    return () => {
      dispatch({ type: actionTypes.CLEAR_STATE })
    }
  }, [])

  return (
    <PasswordsContext.Provider
      value={{
        passwords: state.passwords,
        dispatch,
        secretKey: state.secretKey,
        errors: state.errors,
        clearErrors: () => dispatch({ type: actionTypes.CLEAR_ERRORS })
      }}
    >
      {children}
    </PasswordsContext.Provider>
  )
}
